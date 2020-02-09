

import { xyz } from "../../pb/pb"
import { webSocketClientHandler } from '../websocket/webSocketClientHandler'
import { rpcClientRtnHandler } from './rpcClientRtnHandler';
import { rpcClientRspHandler } from './rpcClientRspHandler';
import { authenticationStore } from "../../../stores/storesIndex";

import * as lz4 from "lz4js";
import { rpcClientApi } from "./rpcClientApi";

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
    RpcGetMixContractListRsp,
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

    public static getInstance(): RpcClientProcess {
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
    //         rpcClientApi.asyncGetMixContractList()
    //     }
    //     setTimeout(this.startIntervalRefreshContractData,70*1000)

    // }

    startIntervalRefreshAllData = () => {
        this.intervalRefreshAllDataStarted = true;
        if (webSocketClientHandler.checkConnected()) {
            // 合约列表太大，单独刷新，减少刷新频率
            // rpcClientApi.asyncGetMixContractList()
            rpcClientApi.asyncGetAccountList()
            rpcClientApi.asyncGetOrderList()
            rpcClientApi.asyncGetTradeList()
            rpcClientApi.asyncGetPositionList()
            rpcClientApi.asyncGetTickList()
        }
        setTimeout(this.startIntervalRefreshAllData, 30 * 1000)

    }

    onConnectd() {
        if (!this.intervalRefreshAllDataStarted) {
            this.startIntervalRefreshAllData()
        }

        // if(!this.intervalRefreshContractDataStarted){
        //     this.startIntervalRefreshContractData()
        // }
    }

    processData(data: Uint8Array) {
        let dep;
        try {
            dep = DataExchangeProtocol.decode(data);
        } catch (error) {
            console.error("处理DEP错误,PB解析数据发生错误", error)
            console.error(`处理DEP错误,PB解析数据发生错误,原始数据HEX:${Buffer.from(data).toString('hex')}`);
            return;
        }

        const { sourceNodeId, targetNodeId, rpcId, timestamp, contentType, rpcType, reqId, contentBytes } = dep;

        const nodeId = authenticationStore.nodeId;

        if (targetNodeId !== nodeId) {
            console.error(`处理DEP错误,目标节点ID不匹配当前节点ID:${nodeId},目标节点ID:${targetNodeId}`)
            return;
        }

        // console.info(`处理DEP记录,来源节点ID:${sourceNodeId},RPC类型:${rpcType},RPC ID:${rpcId},请求ID:${reqId}内容类型:${contentType},时间戳:${timestamp}`);

        let finalContentBytes;
        if (contentType === DataExchangeProtocol.ContentType.COMPRESSED_LZ4) {
            try {
                finalContentBytes = lz4.decompress(contentBytes, undefined);
            } catch (error) {
                console.error(`处理DEP异常,来源节点ID:${sourceNodeId},RPC类型:${rpcType},RPC ID:${rpcId},请求ID:${reqId},时间戳:${timestamp},无法使用LZ4正确解析报文内容`)
                this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, "无法使用LZ4正确解析报文内容");
                return;
            }
        } else if (contentType === DataExchangeProtocol.ContentType.ROUTINE) {
            finalContentBytes = contentBytes
        } else {
            console.error(`处理DEP错误,来源节点ID:${sourceNodeId},RPC类型:${rpcType},RPC ID:${rpcId},请求ID:${reqId},时间戳:${timestamp},不支持的报文类型`)
            this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, "不支持的报文类型");
            return;
        }
        if (!finalContentBytes || finalContentBytes.length <= 0) {
            console.error(`处理DEP错误,来源节点ID:${sourceNodeId},RPC类型:${rpcType},RPC ID:${rpcId},请求ID:${reqId},时间戳:${timestamp},报文长度错误`)
            this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, "报文长度错误");
            return;
        }
        if (rpcType !== DataExchangeProtocol.RpcType.CORE_RPC) {
            console.error(`处理DEP错误,来源节点ID:${sourceNodeId},RPC类型:${rpcType},RPC ID:${rpcId},请求ID:${reqId},时间戳:${timestamp},未能识别的RPC类型`)
            return;
        }

        this.doCoreRpc(sourceNodeId, rpcId, reqId, finalContentBytes, timestamp);


    }

    doCoreRpc(sourceNodeId: number, rpcId: number, reqId: string, contentBytes: any, timestamp: number | Long) {

        switch (rpcId) {
            case RpcId.UNKNOWN_RPC_ID: {
                console.log(`处理RPC,来源节点ID:${sourceNodeId},RPC ID:${rpcId}`);
                break;
            }
            case RpcId.SUBSCRIBE_RSP: {
                try {
                    const rpcSubscribeRsp = RpcSubscribeRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcSubscribeRsp.commonRsp, sourceNodeId, reqId);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:SUBSCRIBE_RSP`);
                    rpcClientRspHandler.onSubscribeRsp(rpcSubscribeRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:SUBSCRIBE_RSP`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.UNSUBSCRIBE_RSP: {
                try {
                    const rpcUnsubscribeRsp = RpcUnsubscribeRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcUnsubscribeRsp.commonRsp, sourceNodeId, reqId);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:UNSUBSCRIBE_RSP`);
                    rpcClientRspHandler.onUnsubscribeRsp(rpcUnsubscribeRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:UNSUBSCRIBE_RSP`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.SUBMIT_ORDER_RSP: {
                try {
                    const rpcSubmitOrderRsp = RpcSubmitOrderRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcSubmitOrderRsp.commonRsp, sourceNodeId, reqId);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:SUBMIT_ORDER_RSP`);
                    rpcClientRspHandler.onSubmitOrderRsp(rpcSubmitOrderRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:SUBMIT_ORDER_RSP`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.CANCEL_ORDER_RSP: {
                try {
                    const rpcCancelOrderRsp = RpcCancelOrderRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcCancelOrderRsp.commonRsp, sourceNodeId, reqId);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:CANCEL_ORDER_RSP`);
                    rpcClientRspHandler.onCancelOrderRsp(rpcCancelOrderRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:CANCEL_ORDER_RSP`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.SEARCH_CONTRACT_RSP: {
                try {
                    const rpcSearchContractRsp = RpcSearchContractRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcSearchContractRsp.commonRsp, sourceNodeId, reqId);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:SEARCH_CONTRACT_RSP`);
                    rpcClientRspHandler.onCancelOrderRsp(rpcSearchContractRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:SEARCH_CONTRACT_RSP`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            // -------------------------------------------------------------------------------

            case RpcId.GET_ACCOUNT_LIST_RSP: {
                try {
                    const rpcGetAccountListRsp = RpcGetAccountListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetAccountListRsp.commonRsp, sourceNodeId, reqId);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:GET_ACCOUNT_LIST_RSP`);
                    rpcClientRspHandler.onGetAccountListRsp(rpcGetAccountListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:GET_ACCOUNT_LIST_RSP`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }

            // -------------------------------------------------------------------------------

            case RpcId.GET_MIX_CONTRACT_LIST_RSP: {
                try {
                    const rpcGetMixContractListRsp = RpcGetMixContractListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetMixContractListRsp.commonRsp, sourceNodeId, reqId);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:GET_MIX_CONTRACT_LIST_RSP`);
                    rpcClientRspHandler.onGetMixContractListRsp(rpcGetMixContractListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:GET_MIX_CONTRACT_LIST_RSP`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }


            // -------------------------------------------------------------------------------

            case RpcId.GET_POSITION_LIST_RSP: {
                try {
                    const rpcGetPositionListRsp = RpcGetPositionListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetPositionListRsp.commonRsp, sourceNodeId, reqId);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:GET_POSITION_LIST_RSP`);
                    rpcClientRspHandler.onGetPositionListRsp(rpcGetPositionListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:GET_POSITION_LIST_RSP`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }


            // -------------------------------------------------------------------------------

            case RpcId.GET_TRADE_LIST_RSP: {
                try {
                    const rpcGetTradeListRsp = RpcGetTradeListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetTradeListRsp.commonRsp, sourceNodeId, reqId);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:GET_TRADE_LIST_RSP`);
                    rpcClientRspHandler.onGetTradeListRsp(rpcGetTradeListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:GET_TRADE_LIST_RSP`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }


            // -------------------------------------------------------------------------------

            case RpcId.GET_ORDER_LIST_RSP: {
                try {
                    const rpcGetOrderListRsp = RpcGetOrderListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetOrderListRsp.commonRsp, sourceNodeId, reqId);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:GET_ORDER_LIST_RSP`);
                    rpcClientRspHandler.onGetOrderListRsp(rpcGetOrderListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:GET_ORDER_LIST_RSP`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            // -------------------------------------------------------------------------------

            case RpcId.GET_TICK_LIST_RSP: {
                try {
                    const rpcGetTickListRsp = RpcGetTickListRsp.decode(contentBytes);
                    this.checkCommonRsp(rpcGetTickListRsp.commonRsp, sourceNodeId, reqId);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:GET_TICK_LIST_RSP`);
                    rpcClientRspHandler.onGetTickListRsp(rpcGetTickListRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:GET_TICK_LIST_RSP`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }

            // -------------------------------------------------------------------------------
            case RpcId.EXCEPTION_RSP: {
                try {
                    const rpcExceptionRsp = RpcExceptionRsp.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:EXCEPTION_RSP`, sourceNodeId, reqId);
                    rpcClientRspHandler.onExceptionRsp(rpcExceptionRsp)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:EXCEPTION_RSP`, error);
                }
                break;
            }
            // -------------------------------------------------------------------------------

            case RpcId.ORDER_RTN: {
                try {
                    const rpcOrderRtn = RpcOrderRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:ORDER_RTN`);
                    rpcClientRtnHandler.onOrderRtn(rpcOrderRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:ORDER_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.TRADE_RTN: {
                try {
                    const rpcTradeRtn = RpcTradeRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:TRADE_RTN`);
                    rpcClientRtnHandler.onTradeRtn(rpcTradeRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:TRADE_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.POSITION_RTN: {
                try {
                    const rpcPositionRtn = RpcPositionRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:POSITION_RTN`);
                    rpcClientRtnHandler.onPositionRtn(rpcPositionRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:POSITION_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.ACCOUNT_RTN: {
                try {
                    const rpcAccountRtn = RpcAccountRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:ACCOUNT_RTN`);
                    rpcClientRtnHandler.onAccountRtn(rpcAccountRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:ACCOUNT_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.CONTRACT_RTN: {
                try {
                    const rpcContractRtn = RpcContractRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:CONTRACT_RTN`);
                    rpcClientRtnHandler.onContractRtn(rpcContractRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:CONTRACT_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.TICK_RTN: {
                try {
                    const rpcTickRtn = RpcTickRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:TICK_RTN`);
                    rpcClientRtnHandler.onTickRtn(rpcTickRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:TICK_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.ORDER_LIST_RTN: {
                try {
                    const rpcOrderListRtn = RpcOrderListRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:ORDER_LIST_RTN`);
                    rpcClientRtnHandler.onOrderListRtn(rpcOrderListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:ORDER_LIST_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.TRADE_LIST_RTN: {
                try {
                    const rpcTradeListRtn = RpcTradeListRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:TRADE_LIST_RTN`);
                    rpcClientRtnHandler.onTradeListRtn(rpcTradeListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:TRADE_LIST_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.POSITION_LIST_RTN: {
                try {
                    const rpcPositionListRtn = RpcPositionListRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:POSITION_LIST_RTN`);
                    rpcClientRtnHandler.onPositionListRtn(rpcPositionListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:POSITION_LIST_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.ACCOUNT_LIST_RTN: {
                try {
                    const rpcAccountListRtn = RpcAccountListRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:ACCOUNT_LIST_RTN`);
                    rpcClientRtnHandler.onAccountListRtn(rpcAccountListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:ACCOUNT_LIST_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.CONTRACT_LIST_RTN: {
                try {
                    const rpcContractListRtn = RpcContractListRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:CONTRACT_LIST_RTN`);
                    rpcClientRtnHandler.onContractListRtn(rpcContractListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:CONTRACT_LIST_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.TICK_LIST_RTN: {
                try {
                    const rpcTickListRtn = RpcTickListRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:TICK_LIST_RTN`);
                    rpcClientRtnHandler.onTickListRtn(rpcTickListRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:TICK_LIST_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }
            case RpcId.NOTICE_RTN: {
                try {
                    const rpcNoticeRtn = RpcNoticeRtn.decode(contentBytes);
                    console.log(`处理RPC记录,来源节点ID:${sourceNodeId},请求ID:${reqId},RPC:NOTICE_RTN`);
                    rpcClientRtnHandler.onNoticeRtn(rpcNoticeRtn)
                } catch (error) {
                    console.error(`处理RPC异常,来源节点ID:${sourceNodeId},RPC:NOTICE_RTN`, error);
                    this.sendExceptionRsp(sourceNodeId, rpcId, reqId, timestamp, error.message);
                }
                break;
            }

            default: {
                console.error(`处理RPC错误,来源节点ID:${sourceNodeId},RPC ID:${rpcId},请求ID:${reqId}不支持此功能`);
                break;
            }
        }
    }


    sendRoutineCoreRpc(targetNodeId: number, content: Uint8Array, reqId: string, rpcId: number) {
        console.log(`发送RPC记录,目标节点:${targetNodeId},请求ID:${reqId},RPC ID:${rpcId}`)
        const dep = new DataExchangeProtocol();
        dep.contentType = DataExchangeProtocol.ContentType.ROUTINE
        dep.reqId = reqId;
        dep.rpcType = DataExchangeProtocol.RpcType.CORE_RPC
        dep.rpcId = rpcId
        dep.sourceNodeId = authenticationStore.nodeId
        dep.targetNodeId = targetNodeId
        dep.timestamp = Date.now()
        dep.contentBytes = content

        if (!webSocketClientHandler.sendData(DataExchangeProtocol.encode(dep).finish())) {
            console.error(`发送RPC错误,目标节点:${targetNodeId},请求ID:${reqId},RPC ID:${rpcId}`)
            return false;
        }
        return true;

    }

    sendLz4CoreRpc(targetNodeId: number, content: Uint8Array, reqId: string, rpcId: number) {
        console.log(`发送RPC记录,目标节点:${targetNodeId},请求ID:${reqId},RPC ID:${rpcId}`)
        let encodeContent;
        try {
            encodeContent = lz4.compress(content, undefined)
        } catch (error) {
            console.error(`发送RPC错误,压缩错误,目标节点:${targetNodeId},请求ID:${reqId},RPC ID:${rpcId}`, error)
            return false;
        }

        const dep = new DataExchangeProtocol();
        dep.contentType = DataExchangeProtocol.ContentType.COMPRESSED_LZ4;
        dep.reqId = reqId;
        dep.rpcType = DataExchangeProtocol.RpcType.CORE_RPC;
        dep.rpcId = rpcId;
        dep.sourceNodeId = authenticationStore.nodeId;
        dep.targetNodeId = targetNodeId;
        dep.timestamp = Date.now();
        dep.contentBytes = encodeContent;
        if (!webSocketClientHandler.sendData(DataExchangeProtocol.encode(dep).finish())) {
            console.error(`发送RPC错误,目标节点:${targetNodeId},请求ID:${reqId},RPC ID:${rpcId}`)
            return false;
        }
        return true;
    }

    sendExceptionRsp(targetNodeId: number, originalRpcId: number, originalReqId: string, originalTimestamp: number | Long,
        info: string) {
        const rpcExceptionRsp = new RpcExceptionRsp();
        rpcExceptionRsp.originalRpcId = originalRpcId;
        rpcExceptionRsp.originalReqId = originalReqId;
        rpcExceptionRsp.originalTimestamp = originalTimestamp;
        rpcExceptionRsp.info = info;

        this.sendRoutineCoreRpc(targetNodeId, RpcExceptionRsp.encode(rpcExceptionRsp).finish(), originalReqId, RpcId.EXCEPTION_RSP)

    }

    checkCommonRsp(commonRsp: xyz.redtorch.pb.ICommonRspField | null | undefined, sourceNodeId: number, reqId: string) {
        if (!commonRsp) {
            console.error("参数commonRsp缺失");
            throw new Error("参数commonRsp缺失");
        }

        if (!commonRsp.reqId || commonRsp.reqId === "") {
            console.error("参数reqId缺失");
            throw new Error("参数reqId缺失");
        }

        if (commonRsp.reqId !== reqId) {
            console.error("请求ID不匹配");
            throw new Error("请求ID不匹配");
        }
    }

}

const rpcClientProcess = RpcClientProcess.getInstance()

export { rpcClientProcess };