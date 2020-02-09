import { xyz } from "../../pb/pb";
import { toast } from 'react-toastify';

import { tradeAccountStore, tradeContractStore, tradeOrderStore, tradePositionStore, tradeTradeStore, tradeTickStore } from "../../../stores/storesIndex";

class RpcClientRspHandler {

    public static getInstance(): RpcClientRspHandler {
        if (!RpcClientRspHandler.instance) {
            RpcClientRspHandler.instance = new RpcClientRspHandler();
        }
        return RpcClientRspHandler.instance;
    }

    private static instance: RpcClientRspHandler;
    private constructor() {
    }


    public onSubscribeRsp(rpcSubscribeRsp: xyz.redtorch.pb.IRpcSubscribeRsp) {
        const commonRsp = rpcSubscribeRsp.commonRsp;
        // 检查commonRsp,以免编译器报错
        if (commonRsp) {
            const errorId = commonRsp.errorId;
            const rpcReqId = commonRsp.reqId

            if(errorId === 0 ){
                console.log(`订阅完成,请求ID:${rpcReqId}`);
            }else{
                console.error(`订阅错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`);
                toast(`订阅错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`, { type: "error", autoClose: false })
            }
        }
    }


    public onUnsubscribeRsp(rpcUnsubscribeRsp: xyz.redtorch.pb.IRpcUnsubscribeRsp) {
        const commonRsp = rpcUnsubscribeRsp.commonRsp;
        // 检查commonRsp,以免编译器报错
        if (commonRsp) {
            const errorId = commonRsp.errorId;
            const rpcReqId = commonRsp.reqId

            if(errorId === 0 ){
                console.log(`取消订阅完成,请求ID:${rpcReqId}`);
            }else{
                console.error(`取消订阅错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`);
                toast(`取消订阅错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`, { type: "error", autoClose: false })
            }
        }
    }


    public onSubmitOrderRsp(rpcSubmitOrderRsp: xyz.redtorch.pb.IRpcSubmitOrderRsp) {
        const commonRsp = rpcSubmitOrderRsp.commonRsp;
        // 检查commonRsp,以免编译器报错
        if (commonRsp) {
            const errorId = commonRsp.errorId;
            const rpcReqId = commonRsp.reqId

            if(errorId === 0 ){
                console.log(`提交定单完成,请求ID:${rpcReqId}`);
            }else{
                console.error(`提交定单错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`);
                toast(`提交订单错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`, { type: "error", autoClose: false })
            }
        }
    }



    public onCancelOrderRsp(rpcCancelOrderRsp: xyz.redtorch.pb.IRpcCancelOrderRsp) {
        const commonRsp = rpcCancelOrderRsp.commonRsp;
        // 检查commonRsp,以免编译器报错
        if (commonRsp) {
            const errorId = commonRsp.errorId;
            const rpcReqId = commonRsp.reqId

            if(errorId === 0 ){
                console.log(`撤销定单完成,请求ID:${rpcReqId}`);
            }else{
                console.error(`撤销定单错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`);
                toast(`撤销定单错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`, { type: "error", autoClose: false })
            }
        }
    }


    public onSearchContractRsp(rpcSearchContractRsp: xyz.redtorch.pb.IRpcSearchContractRsp) {
        const commonRsp = rpcSearchContractRsp.commonRsp;
        // 检查commonRsp,以免编译器报错
        if (commonRsp) {
            const errorId = commonRsp.errorId;
            const rpcReqId = commonRsp.reqId

            if(errorId === 0 ){
                console.log(`搜寻合约完成,请求ID:${rpcReqId}`);
            }else{
                console.error(`搜寻合约错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`);
                toast(`搜寻合约错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`, { type: "error", autoClose: false })
            }
        }
    }

    public onGetAccountListRsp(rpcGetAccountListRsp: xyz.redtorch.pb.RpcGetAccountListRsp) {
        const commonRsp = rpcGetAccountListRsp.commonRsp;
        // 检查commonRsp,以免编译器报错
        if (commonRsp) {
            const errorId = commonRsp.errorId;
            const rpcReqId = commonRsp.reqId

            if(errorId === 0 ){
                const accountListlength = rpcGetAccountListRsp.account.length
                console.log(`获取账户列表完成,请求ID:${rpcReqId},共计${accountListlength}条数据`);
                tradeAccountStore.clearAndStoreAccountList(rpcGetAccountListRsp.account);
            }else{
                console.error(`获取账户列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`);
                toast(`获取账户列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`, { type: "error", autoClose: false })
            }
        }
    }

    public onGetMixContractListRsp(rpcGetMixContractListRsp: xyz.redtorch.pb.RpcGetMixContractListRsp) {
        const commonRsp = rpcGetMixContractListRsp.commonRsp;
        // 检查commonRsp,以免编译器报错
        if (commonRsp) {
            const errorId = commonRsp.errorId;
            const rpcReqId = commonRsp.reqId

            if(errorId === 0 ){
                const contractListLength = rpcGetMixContractListRsp.contract.length
                console.log(`获取混合合约列表完成,请求ID:${rpcReqId},共计${contractListLength}条数据`);
                // const mixContractList: any[] = []
                // for (let i = 0; i < contractListLength; i++) {
                //     const contract = rpcGetMixContractListRsp.contract[i];
                //     mixContractList.push(ContractField.toObject(contract as xyz.redtorch.pb.ContractField, {
                //         enums: String,
                //         longs: String,
                //         defaults: true,
                //         arrays: true,
                //         objects: true
                //     }))
                // }
                tradeContractStore.clearAndStoreContractList(rpcGetMixContractListRsp.contract);
            }else{
                console.error(`获取混合列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`);
                toast(`获取混合列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`, { type: "error", autoClose: false })
            }
        }
    }


    public onGetPositionListRsp(rpcGetPositionListRsp: xyz.redtorch.pb.RpcGetPositionListRsp) {
        const commonRsp = rpcGetPositionListRsp.commonRsp;
        // 检查commonRsp,以免编译器报错
        if (commonRsp) {
            const errorId = commonRsp.errorId;
            const rpcReqId = commonRsp.reqId

            if(errorId === 0 ){
                const positionListLength = rpcGetPositionListRsp.position.length
                console.log(`获取持仓列表完成,请求ID:${rpcReqId},共计${positionListLength}条数据`);
                tradePositionStore.clearAndStorePositionList(rpcGetPositionListRsp.position);
            }else{
                console.error(`获取持仓列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`);
                toast(`获取持仓列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`, { type: "error", autoClose: false })
            }
        }
    }


    public onGetOrderListRsp(rpcGetOrderListRsp: xyz.redtorch.pb.RpcGetOrderListRsp) {
        const commonRsp = rpcGetOrderListRsp.commonRsp;
        // 检查commonRsp,以免编译器报错
        if (commonRsp) {
            const errorId = commonRsp.errorId;
            const rpcReqId = commonRsp.reqId

            if(errorId === 0 ){
                const orderListLength = rpcGetOrderListRsp.order.length
                console.log(`获取委托列表完成,请求ID:${rpcReqId},共计${orderListLength}条数据`);
                tradeOrderStore.clearAndStoreOrderList(rpcGetOrderListRsp.order);
            }else{
                console.error(`获取委托列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`);
                toast(`获取委托列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`, { type: "error", autoClose: false })
            }
        }
    }


    public onGetTradeListRsp(rpcGetTradeListRsp: xyz.redtorch.pb.RpcGetTradeListRsp) {
        const commonRsp = rpcGetTradeListRsp.commonRsp;
        // 检查commonRsp,以免编译器报错
        if (commonRsp) {
            const errorId = commonRsp.errorId;
            const rpcReqId = commonRsp.reqId

            if(errorId === 0 ){
                const tradeListLength = rpcGetTradeListRsp.trade.length
                console.log(`获取成交列表完成,请求ID:${rpcReqId},共计${tradeListLength}条数据`);
                tradeTradeStore.clearAndStoreTradeList(rpcGetTradeListRsp.trade);
            }else{
                console.error(`获取成交列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`);
                toast(`获取成交列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`, { type: "error", autoClose: false })
            }
        }
    }

    public onGetTickListRsp(rpcGetTickListRsp: xyz.redtorch.pb.RpcGetTickListRsp) {
        const commonRsp = rpcGetTickListRsp.commonRsp;
        // 检查commonRsp,以免编译器报错
        if (commonRsp) {
            const errorId = commonRsp.errorId;
            const rpcReqId = commonRsp.reqId

            if(errorId === 0 ){
                const tickListLength = rpcGetTickListRsp.tick.length
                console.log(`获取Tick列表完成,请求ID:${rpcReqId},共计${tickListLength}条数据`);
                tradeTickStore.clearAndStoreTickList(rpcGetTickListRsp.tick);
            }else{
                console.error(`获取Tick列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`);
                toast(`获取Tick列表错误,请求ID:${rpcReqId},错误ID:${errorId},错误信息:${commonRsp.errorMsg}`, { type: "error", autoClose: false })
            }
        }
    }

    public onExceptionRsp(rpcExceptionRsp: xyz.redtorch.pb.IRpcExceptionRsp) {
        toast(`接收到异常回报,异常信息:${rpcExceptionRsp.info}`, { type: "error" });
        if (rpcExceptionRsp.originalReqId && rpcExceptionRsp.originalReqId !== "") {
            const reqId = rpcExceptionRsp.originalReqId;
            console.error(`接收到异常回报,请求ID:${reqId},异常信息:${rpcExceptionRsp.info}`);
            toast(`接收到异常回报,请求ID:${reqId},异常信息:${rpcExceptionRsp.info}`, { type: "error", autoClose: false })
        } else {
            console.error(`接收到未知请求ID的异常回报,异常信息:${rpcExceptionRsp.info}`);
            toast(`接收到异常回报,异常信息:${rpcExceptionRsp.info}`, { type: "error", autoClose: false })
        }
    }
}

const rpcClientRspHandler = RpcClientRspHandler.getInstance()

export { rpcClientRspHandler };