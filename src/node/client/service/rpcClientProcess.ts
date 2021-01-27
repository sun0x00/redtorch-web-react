

import { xyz } from "../../pb/pb"
import { webSocketClientHandler } from '../websocket/webSocketClientHandler'
import { rpcClientRtnHandler } from './rpcClientRtnHandler';
import { rpcClientRspHandler } from './rpcClientRspHandler';

import * as lz4 from "lz4js";
import { rpcClientApi } from "./rpcClientApi";
import request from "../../../request";
import * as base64 from "byte-base64";

const {
    DataExchangeProtocol,
    RpcExceptionRsp,
    RpcId,
    RpcSubscribeRsp,
    RpcUnsubscribeRsp,
    RpcSubmitOrderRsp,
    RpcCancelOrderRsp,
    RpcSearchContractRsp,
    RpcGetAccountListRsp,
    RpcGetPositionListRsp,
    RpcGetTradeListRsp,
    RpcGetOrderListRsp,
    RpcGetContractListRsp,
    RpcGetTickListRsp,
    RpcOrderRtn,
    RpcTradeRtn,
    RpcPositionRtn,
    RpcAccountRtn,
    RpcTickRtn,
    RpcContractRtn,
    RpcNoticeRtn,
    RpcOrderListRtn,
    RpcTradeListRtn,
    RpcPositionListRtn,
    RpcAccountListRtn,
    RpcTickListRtn,
    RpcContractListRtn
} = xyz.redtorch.pb

class RpcClientProcess {

    public static getInstance = (): RpcClientProcess => {
        if (!RpcClientProcess.instance) {
            RpcClientProcess.instance = new RpcClientProcess();
        }
        return RpcClientProcess.instance;
    }

    private static instance: RpcClientProcess;
    private intervalRefreshAllDataStarted = false;
    // private intervalRefreshContractDataStarted = false;
    private constructor() {
    }

    // 定时刷新全部合约列表功能停用,对性能要求太高
    // startIntervalRefreshContractData = () => {
    //     this.intervalRefreshContractDataStarted = true;
    //     if(webSocketClientHandler.checkConnected()){
    //         rpcClientApi.asyncGetContractList()
    //     }
    //     setTimeout(this.startIntervalRefreshContractData,70*1000)

    // }

    private startIntervalRefreshAllData = () => {
        this.intervalRefreshAllDataStarted = true;
        if (webSocketClientHandler.checkConnected()) {
            // 合约列表太大，单独刷新，减少刷新频率
            // rpcClientApi.asyncGetContractList()
            rpcClientApi.asyncGetAccountList()
            rpcClientApi.asyncGetOrderList()
            rpcClientApi.asyncGetTradeList()
            rpcClientApi.asyncGetPositionList()
            rpcClientApi.asyncGetTickList()
        }
        setTimeout(this.startIntervalRefreshAllData, 30 * 1000)

    }

    public onConnectd = () => {
        if (!this.intervalRefreshAllDataStarted) {
            this.startIntervalRefreshAllData()
        }

        // if(!this.intervalRefreshContractDataStarted){
        //     this.startIntervalRefreshContractData()
        // }
    }

    public processData = (data: Uint8Array) => {
        let dep;
        try {
            dep = DataExchangeProtocol.decode(data);
        } catch (error) {
            console.error("处理DEP错误,PB解析数据发生错误", error)
            console.error(`处理DEP错误,PB解析数据发生错误,原始数据HEX:${Buffer.from(data).toString('hex')}`);
            return;
        }

        const { rpcId, timestamp, contentType, contentBytes } = dep;

        // console.info(`处理DEP记录,RPC类型:${rpcType},RPC ID:${rpcId},业务ID:${transactionId}内容类型:${contentType},时间戳:${timestamp}`);

        let finalContentBytes;
        if (contentType === DataExchangeProtocol.ContentType.COMPRESSED_LZ4) {
            try {
                finalContentBytes = lz4.decompress(contentBytes, undefined);
            } catch (error) {
                console.error(`处理DEP异常,RPC ID:${rpcId},时间戳:${timestamp},无法使用LZ4正确解析报文内容`)
                return;
            }
        } else if (contentType === DataExchangeProtocol.ContentType.ROUTINE) {
            finalContentBytes = contentBytes
        } else {
            console.error(`处理DEP错误,RPC ID:${rpcId},时间戳:${timestamp},不支持的报文类型`)
            return;
        }
        if (!finalContentBytes || finalContentBytes.length <= 0) {
            console.error(`处理DEP错误,RPC ID:${rpcId},时间戳:${timestamp},报文长度错误`)
            return;
        }

        this.doCoreRpc(rpcId, finalContentBytes, timestamp);
    }

    private doCoreRpc = (rpcId: number, contentBytes: any, timestamp: number | Long) => {

        let transactionId: string | null | undefined = "";
        switch (rpcId) {
            case RpcId.UNKNOWN_RPC_ID: {
                console.log(`处理RPC,RPC ID:${rpcId}`);
                break;
            }
            case RpcId.SUBSCRIBE_RSP: {
                try {
                    const rpcSubscribeRsp = RpcSubscribeRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcSubscribeRsp.commonRsp);
                    transactionId = rpcSubscribeRsp.commonRsp?.transactionId;
                    rpcClientRspHandler.onSubscribeRsp(rpcSubscribeRsp)
                } catch (error) {
                    console.error(`处理RPC异常,业务ID:${transactionId},RPC:SUBSCRIBE_RSP`, error);
                }
                break;
            }
            case RpcId.UNSUBSCRIBE_RSP: {
                try {
                    const rpcUnsubscribeRsp = RpcUnsubscribeRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcUnsubscribeRsp.commonRsp);
                    transactionId = rpcUnsubscribeRsp.commonRsp?.transactionId;
                    rpcClientRspHandler.onUnsubscribeRsp(rpcUnsubscribeRsp)
                } catch (error) {
                    console.error(`处理RPC异常,业务ID:${transactionId},RPC:UNSUBSCRIBE_RSP`, error);
                }
                break;
            }
            case RpcId.SUBMIT_ORDER_RSP: {
                try {
                    const rpcSubmitOrderRsp = RpcSubmitOrderRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcSubmitOrderRsp.commonRsp);
                    transactionId = rpcSubmitOrderRsp.commonRsp?.transactionId;
                    rpcClientRspHandler.onSubmitOrderRsp(rpcSubmitOrderRsp)
                } catch (error) {
                    console.error(`处理RPC异常,业务ID:${transactionId},RPC:SUBMIT_ORDER_RSP`, error);
                }
                break;
            }
            case RpcId.CANCEL_ORDER_RSP: {
                try {
                    const rpcCancelOrderRsp = RpcCancelOrderRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcCancelOrderRsp.commonRsp);
                    transactionId = rpcCancelOrderRsp.commonRsp?.transactionId;
                    rpcClientRspHandler.onCancelOrderRsp(rpcCancelOrderRsp)
                } catch (error) {
                    console.error(`处理RPC异常,业务ID:${transactionId},RPC:CANCEL_ORDER_RSP`, error);
                }
                break;
            }
            case RpcId.SEARCH_CONTRACT_RSP: {
                try {
                    const rpcSearchContractRsp = RpcSearchContractRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcSearchContractRsp.commonRsp);
                    transactionId = rpcSearchContractRsp.commonRsp?.transactionId;
                    rpcClientRspHandler.onCancelOrderRsp(rpcSearchContractRsp)
                } catch (error) {
                    console.error(`处理RPC异常,业务ID:${transactionId},RPC:SEARCH_CONTRACT_RSP`, error);
                }
                break;
            }
            // -------------------------------------------------------------------------------

            case RpcId.GET_ACCOUNT_LIST_RSP: {
                try {
                    const rpcGetAccountListRsp = RpcGetAccountListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetAccountListRsp.commonRsp);
                    transactionId = rpcGetAccountListRsp.commonRsp?.transactionId;
                    rpcClientRspHandler.onGetAccountListRsp(rpcGetAccountListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,业务ID:${transactionId},RPC:GET_ACCOUNT_LIST_RSP`, error);
                }
                break;
            }

            // -------------------------------------------------------------------------------

            case RpcId.GET_CONTRACT_LIST_RSP: {
                try {
                    const rpcGetContractListRsp = RpcGetContractListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetContractListRsp.commonRsp);
                    transactionId = rpcGetContractListRsp.commonRsp?.transactionId;
                    rpcClientRspHandler.onGetContractListRsp(rpcGetContractListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,业务ID:${transactionId},RPC:GET_CONTRACT_LIST_RSP`, error);
                }
                break;
            }


            // -------------------------------------------------------------------------------

            case RpcId.GET_POSITION_LIST_RSP: {
                try {
                    const rpcGetPositionListRsp = RpcGetPositionListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetPositionListRsp.commonRsp);
                    transactionId = rpcGetPositionListRsp.commonRsp?.transactionId;
                    rpcClientRspHandler.onGetPositionListRsp(rpcGetPositionListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,业务ID:${transactionId},RPC:GET_POSITION_LIST_RSP`, error);
                }
                break;
            }


            // -------------------------------------------------------------------------------

            case RpcId.GET_TRADE_LIST_RSP: {
                try {
                    const rpcGetTradeListRsp = RpcGetTradeListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetTradeListRsp.commonRsp);
                    transactionId = rpcGetTradeListRsp.commonRsp?.transactionId;
                    rpcClientRspHandler.onGetTradeListRsp(rpcGetTradeListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,业务ID:${transactionId},RPC:GET_TRADE_LIST_RSP`, error);
                }
                break;
            }


            // -------------------------------------------------------------------------------

            case RpcId.GET_ORDER_LIST_RSP: {
                try {
                    const rpcGetOrderListRsp = RpcGetOrderListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetOrderListRsp.commonRsp);
                    transactionId = rpcGetOrderListRsp.commonRsp?.transactionId;
                    rpcClientRspHandler.onGetOrderListRsp(rpcGetOrderListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,业务ID:${transactionId},RPC:GET_ORDER_LIST_RSP`, error);
                }
                break;
            }
            // -------------------------------------------------------------------------------

            case RpcId.GET_TICK_LIST_RSP: {
                try {
                    const rpcGetTickListRsp = RpcGetTickListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetTickListRsp.commonRsp);
                    transactionId = rpcGetTickListRsp.commonRsp?.transactionId;
                    rpcClientRspHandler.onGetTickListRsp(rpcGetTickListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,业务ID:${transactionId},RPC:GET_TICK_LIST_RSP`, error);
                }
                break;
            }

            // -------------------------------------------------------------------------------
            case RpcId.EXCEPTION_RSP: {
                try {
                    const rpcExceptionRsp = RpcExceptionRsp.decode(contentBytes);
                    rpcClientRspHandler.onExceptionRsp(rpcExceptionRsp)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:EXCEPTION_RSP`, error);
                }
                break;
            }
            // -------------------------------------------------------------------------------

            case RpcId.ORDER_RTN: {
                try {
                    const rpcOrderRtn = RpcOrderRtn.decode(contentBytes);
                    rpcClientRtnHandler.onOrderRtn(rpcOrderRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:ORDER_RTN`, error);
                }
                break;
            }
            case RpcId.TRADE_RTN: {
                try {
                    const rpcTradeRtn = RpcTradeRtn.decode(contentBytes);
                    rpcClientRtnHandler.onTradeRtn(rpcTradeRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:TRADE_RTN`, error);
                }
                break;
            }
            case RpcId.POSITION_RTN: {
                try {
                    const rpcPositionRtn = RpcPositionRtn.decode(contentBytes);
                    rpcClientRtnHandler.onPositionRtn(rpcPositionRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:POSITION_RTN`, error);
                }
                break;
            }
            case RpcId.ACCOUNT_RTN: {
                try {
                    const rpcAccountRtn = RpcAccountRtn.decode(contentBytes);
                    rpcClientRtnHandler.onAccountRtn(rpcAccountRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:ACCOUNT_RTN`, error);
                }
                break;
            }
            case RpcId.CONTRACT_RTN: {
                try {
                    const rpcContractRtn = RpcContractRtn.decode(contentBytes);
                    rpcClientRtnHandler.onContractRtn(rpcContractRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:CONTRACT_RTN`, error);
                }
                break;
            }
            case RpcId.TICK_RTN: {
                try {
                    const rpcTickRtn = RpcTickRtn.decode(contentBytes);
                    rpcClientRtnHandler.onTickRtn(rpcTickRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:TICK_RTN`, error);
                }
                break;
            }
            case RpcId.ORDER_LIST_RTN: {
                try {
                    const rpcOrderListRtn = RpcOrderListRtn.decode(contentBytes);
                    rpcClientRtnHandler.onOrderListRtn(rpcOrderListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:ORDER_LIST_RTN`, error);
                }
                break;
            }
            case RpcId.TRADE_LIST_RTN: {
                try {
                    const rpcTradeListRtn = RpcTradeListRtn.decode(contentBytes);
                    rpcClientRtnHandler.onTradeListRtn(rpcTradeListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:TRADE_LIST_RTN`, error);
                }
                break;
            }
            case RpcId.POSITION_LIST_RTN: {
                try {
                    const rpcPositionListRtn = RpcPositionListRtn.decode(contentBytes);
                    rpcClientRtnHandler.onPositionListRtn(rpcPositionListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:POSITION_LIST_RTN`, error);
                }
                break;
            }
            case RpcId.ACCOUNT_LIST_RTN: {
                try {
                    const rpcAccountListRtn = RpcAccountListRtn.decode(contentBytes);
                    rpcClientRtnHandler.onAccountListRtn(rpcAccountListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:ACCOUNT_LIST_RTN`, error);
                }
                break;
            }
            case RpcId.CONTRACT_LIST_RTN: {
                try {
                    const rpcContractListRtn = RpcContractListRtn.decode(contentBytes);
                    rpcClientRtnHandler.onContractListRtn(rpcContractListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:CONTRACT_LIST_RTN`, error);
                }
                break;
            }
            case RpcId.TICK_LIST_RTN: {
                try {
                    const rpcTickListRtn = RpcTickListRtn.decode(contentBytes);
                    rpcClientRtnHandler.onTickListRtn(rpcTickListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:TICK_LIST_RTN`, error);
                }
                break;
            }
            case RpcId.NOTICE_RTN: {
                try {
                    const rpcNoticeRtn = RpcNoticeRtn.decode(contentBytes);
                    rpcClientRtnHandler.onNoticeRtn(rpcNoticeRtn)
                } catch (error) {
                    console.error(`处理RPC异常,RPC:NOTICE_RTN`, error);
                }
                break;
            }

            default: {
                console.error(`处理RPC错误,RPC ID:${rpcId}不支持此功能`);
                break;
            }
        }
    }

    // HTTP
    public sendAsyncHttpRpc = (rpcId: number, transactionId: string, content: Uint8Array) => {

        const data = this.generateRpcDep(rpcId, transactionId, content);
        if (data) {

            request('/api/rpc', {
                method: 'POST',
                data: {
                    voData: base64.bytesToBase64(data)
                }
            }).then((res: any) => {
                if (res) {
                    if (res.status) {
                        if (res.voData) {
                            const resData = base64.base64ToBytes(res.voData)
                            this.processData(resData)
                        }
                    } else {
                        console.error(`发送HTTP RPC错误,业务ID:${transactionId},RPC ID:${rpcId}`)
                    }
                }
            }).catch((err: any) => {
                console.log(err);
            });
        }
        return false;



    }

    public sendRpc = (rpcId: number, transactionId: string, content: Uint8Array) => {

        const data = this.generateRpcDep(rpcId, transactionId, content);
        if (data) {
            if (!webSocketClientHandler.sendData(data)) {
                console.error(`发送RPC错误,业务ID:${transactionId},RPC ID:${rpcId}`)
                return false;
            }
            return true;
        }
        return false;
    }

    private generateRpcDep = (rpcId: number, transactionId: string, content: Uint8Array) => {
        if (content.length > 10240) {
            return this.generateLz4RpcDep(rpcId, transactionId, content);
        } else {
            return this.generateRoutineRpcDep(rpcId, transactionId, content)
        }
    }

    private generateLz4RpcDep = (rpcId: number, transactionId: string, content: Uint8Array) => {
        let encodeContent;
        try {
            encodeContent = lz4.compress(content, undefined)
        } catch (error) {
            console.error(`发送RPC错误,压缩错误,业务ID:${transactionId},RPC ID:${rpcId}`, error)
            return null;
        }

        const dep = new DataExchangeProtocol();
        dep.contentType = DataExchangeProtocol.ContentType.COMPRESSED_LZ4;
        dep.rpcId = rpcId;
        dep.timestamp = Date.now();
        dep.contentBytes = encodeContent;

        return DataExchangeProtocol.encode(dep).finish()
    }

    private generateRoutineRpcDep = (rpcId: number, transactionId: string, content: Uint8Array) => {
        const dep = new DataExchangeProtocol();
        dep.contentType = DataExchangeProtocol.ContentType.ROUTINE
        dep.rpcId = rpcId
        dep.timestamp = Date.now()
        dep.contentBytes = content

        return DataExchangeProtocol.encode(dep).finish()
    }

    private checkCommonRsp = (commonRsp: xyz.redtorch.pb.ICommonRspField | null | undefined) => {
        if (!commonRsp) {
            console.error("参数commonRsp缺失");
            throw new Error("参数commonRsp缺失");
        }

        if (!commonRsp.transactionId || commonRsp.transactionId === "") {
            console.error("参数transactionId缺失");
            throw new Error("参数transactionId缺失");
        }
    }

}

const rpcClientProcess = RpcClientProcess.getInstance()

export { rpcClientProcess };