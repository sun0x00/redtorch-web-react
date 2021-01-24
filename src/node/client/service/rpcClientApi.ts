import { xyz } from "../../pb/pb";
import { rpcClientProcess } from './rpcClientProcess';
import { v4 as uuidv4 } from 'uuid';
import { authenticationStore } from "../../../stores/storesIndex";

const {
    RpcId,
    RpcSubscribeReq,
    RpcUnsubscribeReq,
    RpcSubmitOrderReq,
    RpcCancelOrderReq,
    RpcSearchContractReq,
    RpcGetAccountListReq,
    RpcGetMixContractListReq,
    RpcGetPositionListReq,
    RpcGetOrderListReq,
    RpcGetTradeListReq,
    RpcGetTickListReq,
    CommonReqField,
    CancelOrderReqField,
} = xyz.redtorch.pb

class RpcClientApi {
    public static getInstance = (): RpcClientApi => {
        if (!RpcClientApi.instance) {
            RpcClientApi.instance = new RpcClientApi();
        }
        return RpcClientApi.instance;
    }

    private static instance: RpcClientApi;

    private constructor() {
    }

    private generateCommonReq = (transactionId: string) => {
        const operatorId = authenticationStore.operatorId;
        const commonReq = new CommonReqField()
        commonReq.operatorId = operatorId;
        commonReq.transactionId = transactionId;

        return commonReq
    }

    public asyncSubscribe = (contract: xyz.redtorch.pb.ContractField): boolean => {
        const transactionId = uuidv4()

        const rpcSubscribeReq = new RpcSubscribeReq();
        rpcSubscribeReq.commonReq = this.generateCommonReq(transactionId);
        rpcSubscribeReq.contract = contract;
        rpcSubscribeReq.contract.gatewayId = "";

        return rpcClientProcess.sendRpc(RpcId.SUBSCRIBE_REQ, transactionId, RpcSubscribeReq.encode(rpcSubscribeReq).finish());
    }

    // ------------------------------------------------------------------------------
    public asyncUnsubscribe = (contract: xyz.redtorch.pb.ContractField, gatewayId: string): boolean => {
        const transactionId = uuidv4()

        const rpcUnsubscribeReq = new RpcUnsubscribeReq();

        rpcUnsubscribeReq.commonReq = this.generateCommonReq(transactionId);
        rpcUnsubscribeReq.contract = contract;
        rpcUnsubscribeReq.gatewayId = gatewayId;

        return rpcClientProcess.sendRpc(RpcId.UNSUBSCRIBE_REQ, transactionId, RpcUnsubscribeReq.encode(rpcUnsubscribeReq).finish());

    }

    // ------------------------------------------------------------------------------
    public asyncSubmitOrder = (submitOrderReq: xyz.redtorch.pb.SubmitOrderReqField): boolean => {
        const transactionId = uuidv4()

        const rpcSubmitOrderReq = new RpcSubmitOrderReq();

        rpcSubmitOrderReq.commonReq = this.generateCommonReq(transactionId);
        rpcSubmitOrderReq.submitOrderReq = submitOrderReq;

        return rpcClientProcess.sendRpc(RpcId.SUBMIT_ORDER_REQ, transactionId, RpcSubmitOrderReq.encode(rpcSubmitOrderReq).finish());
    }

    // ------------------------------------------------------------------------------
    public asyncCancelOrder = (orderId: string, originOrderId?: string): boolean => {
        const transactionId = uuidv4()

        const cancelOrderReq = new CancelOrderReqField()
        cancelOrderReq.orderId = orderId;
        if (originOrderId) {
            cancelOrderReq.originOrderId = originOrderId;
        }

        const rpcCancelOrderReq = new RpcCancelOrderReq();
        rpcCancelOrderReq.commonReq = this.generateCommonReq(transactionId);
        rpcCancelOrderReq.cancelOrderReq = cancelOrderReq;

        return rpcClientProcess.sendRpc(RpcId.CANCEL_ORDER_REQ, transactionId, RpcCancelOrderReq.encode(rpcCancelOrderReq).finish());

    }

    // ------------------------------------------------------------------------------
    public asyncSearchContract = (contract: xyz.redtorch.pb.ContractField): boolean => {
        const transactionId = uuidv4()

        const rpcSearchContractReq = new RpcSearchContractReq();

        rpcSearchContractReq.commonReq = this.generateCommonReq(transactionId);
        rpcSearchContractReq.contract = contract;

        return rpcClientProcess.sendRpc(RpcId.SEARCH_CONTRACT_REQ, transactionId, RpcSearchContractReq.encode(rpcSearchContractReq).finish());

    }

    // -------------------------------------------------------------------------------------
    public asyncGetAccountList = () => {
        const transactionId = uuidv4()
        const rpcGetAccountListReq = new RpcGetAccountListReq();

        rpcGetAccountListReq.commonReq = this.generateCommonReq(transactionId);

        return rpcClientProcess.sendAsyncHttpRpc(RpcId.GET_ACCOUNT_LIST_REQ, transactionId, RpcGetAccountListReq.encode(rpcGetAccountListReq).finish());
    }

    // -------------------------------------------------------------------------------------
    public asyncGetMixContractList = () => {
        const transactionId = uuidv4()

        const rpcGetMixContractListReq = new RpcGetMixContractListReq();

        rpcGetMixContractListReq.commonReq = this.generateCommonReq(transactionId);

        return rpcClientProcess.sendAsyncHttpRpc(RpcId.GET_MIX_CONTRACT_LIST_REQ, transactionId, RpcGetMixContractListReq.encode(rpcGetMixContractListReq).finish());
    }

    // -------------------------------------------------------------------------------------
    public asyncGetPositionList = () => {
        const transactionId = uuidv4()

        const rpcGetPositionListReq = new RpcGetPositionListReq();

        rpcGetPositionListReq.commonReq = this.generateCommonReq(transactionId);

        return rpcClientProcess.sendAsyncHttpRpc(RpcId.GET_POSITION_LIST_REQ, transactionId, RpcGetPositionListReq.encode(rpcGetPositionListReq).finish());
    }

    // -------------------------------------------------------------------------------------
    public asyncGetOrderList = () => {
        const transactionId = uuidv4()

        const rpcGetOrderListReq = new RpcGetOrderListReq();

        rpcGetOrderListReq.commonReq = this.generateCommonReq(transactionId);

        return rpcClientProcess.sendAsyncHttpRpc(RpcId.GET_ORDER_LIST_REQ, transactionId, RpcGetOrderListReq.encode(rpcGetOrderListReq).finish());
    }

    // -------------------------------------------------------------------------------------
    public asyncGetTradeList = () => {
        const transactionId = uuidv4()

        const rpcGetTradeListReq = new RpcGetTradeListReq();

        rpcGetTradeListReq.commonReq = this.generateCommonReq(transactionId);

        return rpcClientProcess.sendAsyncHttpRpc(RpcId.GET_TRADE_LIST_REQ, transactionId, RpcGetTradeListReq.encode(rpcGetTradeListReq).finish());
    }
    // -------------------------------------------------------------------------------------
    public asyncGetTickList = () => {
        const transactionId = uuidv4()

        const rpcGetTickListReq = new RpcGetTickListReq();

        rpcGetTickListReq.commonReq = this.generateCommonReq(transactionId);

        return rpcClientProcess.sendAsyncHttpRpc(RpcId.GET_TICK_LIST_REQ, transactionId, RpcGetTickListReq.encode(rpcGetTickListReq).finish());
    }


}


const rpcClientApi = RpcClientApi.getInstance()

export { rpcClientApi };