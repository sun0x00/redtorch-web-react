import { xyz } from "../../pb/pb";
import { rpcClientProcess } from './rpcClientProcess';
import * as uuidv4 from 'uuid/v4';
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
    public static getInstance(): RpcClientApi {
        if (!RpcClientApi.instance) {
            RpcClientApi.instance = new RpcClientApi();
        }
        return RpcClientApi.instance;
    }

    private static instance: RpcClientApi;
    private constructor() {
    }

    public asyncSubscribe(contract: xyz.redtorch.pb.ContractField): boolean {

        const reqId = uuidv4()
        const operatorId = authenticationStore.operatorId;
        const sourceNodeId = authenticationStore.nodeId;

        const commonReq = new CommonReqField()
        commonReq.sourceNodeId = sourceNodeId;
        commonReq.targetNodeId = 0;
        commonReq.operatorId = operatorId;
        commonReq.reqId = reqId;

        const rpcSubscribeReq = new RpcSubscribeReq();

        rpcSubscribeReq.commonReq = commonReq;
        rpcSubscribeReq.contract = contract;
        rpcSubscribeReq.contract.gatewayId = "";

        return rpcClientProcess.sendRoutineCoreRpc(0, RpcSubscribeReq.encode(rpcSubscribeReq).finish(), reqId, RpcId.SUBSCRIBE_REQ);

    }

    // ------------------------------------------------------------------------------
    public asyncUnsubscribe(contract: xyz.redtorch.pb.ContractField, gatewayId: string): boolean {

        const reqId = uuidv4()
        const operatorId = authenticationStore.operatorId;
        const sourceNodeId = authenticationStore.nodeId;

        const commonReq = new CommonReqField()
        commonReq.sourceNodeId = sourceNodeId;
        commonReq.targetNodeId = 0;
        commonReq.operatorId = operatorId;
        commonReq.reqId = reqId;

        const rpcUnsubscribeReq = new RpcUnsubscribeReq();

        rpcUnsubscribeReq.commonReq = commonReq;
        rpcUnsubscribeReq.contract = contract;
        rpcUnsubscribeReq.gatewayId = gatewayId;

        return rpcClientProcess.sendRoutineCoreRpc(0, RpcUnsubscribeReq.encode(rpcUnsubscribeReq).finish(), reqId, RpcId.UNSUBSCRIBE_REQ);

    }

    // ------------------------------------------------------------------------------
    public asyncSubmitOrder(submitOrderReq: xyz.redtorch.pb.SubmitOrderReqField): boolean {

        const reqId = uuidv4()
        const operatorId = authenticationStore.operatorId;
        const sourceNodeId = authenticationStore.nodeId;

        const commonReq = new CommonReqField()
        commonReq.sourceNodeId = sourceNodeId;
        commonReq.targetNodeId = 0;
        commonReq.operatorId = operatorId;
        commonReq.reqId = reqId;

        const rpcSubmitOrderReq = new RpcSubmitOrderReq();

        rpcSubmitOrderReq.commonReq = commonReq;
        rpcSubmitOrderReq.submitOrderReq = submitOrderReq;

        return rpcClientProcess.sendRoutineCoreRpc(0, RpcSubmitOrderReq.encode(rpcSubmitOrderReq).finish(), reqId, RpcId.SUBMIT_ORDER_REQ);

    }

    // ------------------------------------------------------------------------------
    public asyncCancelOrder(orderId: string, originOrderId?: string): boolean {

        const reqId = uuidv4()
        const operatorId = authenticationStore.operatorId;
        const sourceNodeId = authenticationStore.nodeId;

        const commonReq = new CommonReqField()
        commonReq.sourceNodeId = sourceNodeId;
        commonReq.targetNodeId = 0;
        commonReq.operatorId = operatorId;
        commonReq.reqId = reqId;

        const cancelOrderReq = new CancelOrderReqField()
        cancelOrderReq.orderId = orderId;
        if (originOrderId) {
            cancelOrderReq.originOrderId = originOrderId;
        }

        const rpcCancelOrderReq = new RpcCancelOrderReq();
        rpcCancelOrderReq.commonReq = commonReq;
        rpcCancelOrderReq.cancelOrderReq = cancelOrderReq;

        return rpcClientProcess.sendRoutineCoreRpc(0, RpcCancelOrderReq.encode(rpcCancelOrderReq).finish(), reqId, RpcId.CANCEL_ORDER_REQ);

    }

    // ------------------------------------------------------------------------------
    public asyncSearchContract(contract: xyz.redtorch.pb.ContractField): boolean {

        const reqId = uuidv4()
        const operatorId = authenticationStore.operatorId;
        const sourceNodeId = authenticationStore.nodeId;

        const commonReq = new CommonReqField()
        commonReq.sourceNodeId = sourceNodeId;
        commonReq.targetNodeId = 0;
        commonReq.operatorId = operatorId;
        commonReq.reqId = reqId;

        const rpcSearchContractReq = new RpcSearchContractReq();

        rpcSearchContractReq.commonReq = commonReq;
        rpcSearchContractReq.contract = contract;

        return rpcClientProcess.sendRoutineCoreRpc(0, RpcSearchContractReq.encode(rpcSearchContractReq).finish(), reqId, RpcId.SEARCH_CONTRACT_REQ);

    }

    // -------------------------------------------------------------------------------------
    public asyncGetAccountList() {
        const reqId = uuidv4()
        const operatorId = authenticationStore.operatorId;
        const sourceNodeId = authenticationStore.nodeId;

        const commonReq = new CommonReqField()
        commonReq.sourceNodeId = sourceNodeId;
        commonReq.targetNodeId = 0;
        commonReq.operatorId = operatorId;
        commonReq.reqId = reqId;

        const rpcGetAccountListReq = new RpcGetAccountListReq();

        rpcGetAccountListReq.commonReq = commonReq;

        return rpcClientProcess.sendRoutineCoreRpc(0, RpcGetAccountListReq.encode(rpcGetAccountListReq).finish(), reqId, RpcId.GET_ACCOUNT_LIST_REQ);
    }

    // -------------------------------------------------------------------------------------
    public asyncGetMixContractList() {
        const reqId = uuidv4()
        const operatorId = authenticationStore.operatorId;
        const sourceNodeId = authenticationStore.nodeId;

        const commonReq = new CommonReqField()
        commonReq.sourceNodeId = sourceNodeId;
        commonReq.targetNodeId = 0;
        commonReq.operatorId = operatorId;
        commonReq.reqId = reqId;

        const rpcGetMixContractListReq = new RpcGetMixContractListReq();

        rpcGetMixContractListReq.commonReq = commonReq;

        return rpcClientProcess.sendRoutineCoreRpc(0, RpcGetMixContractListReq.encode(rpcGetMixContractListReq).finish(), reqId, RpcId.GET_MIX_CONTRACT_LIST_REQ);
    }

    // -------------------------------------------------------------------------------------
    public asyncGetPositionList() {
        const reqId = uuidv4()
        const operatorId = authenticationStore.operatorId;
        const sourceNodeId = authenticationStore.nodeId;

        const commonReq = new CommonReqField()
        commonReq.sourceNodeId = sourceNodeId;
        commonReq.targetNodeId = 0;
        commonReq.operatorId = operatorId;
        commonReq.reqId = reqId;

        const rpcGetPositionListReq = new RpcGetPositionListReq();

        rpcGetPositionListReq.commonReq = commonReq;

        return rpcClientProcess.sendRoutineCoreRpc(0, RpcGetPositionListReq.encode(rpcGetPositionListReq).finish(), reqId, RpcId.GET_POSITION_LIST_REQ);
    }

    // -------------------------------------------------------------------------------------
    public asyncGetOrderList() {
        const reqId = uuidv4()
        const operatorId = authenticationStore.operatorId;
        const sourceNodeId = authenticationStore.nodeId;

        const commonReq = new CommonReqField()
        commonReq.sourceNodeId = sourceNodeId;
        commonReq.targetNodeId = 0;
        commonReq.operatorId = operatorId;
        commonReq.reqId = reqId;

        const rpcGetOrderListReq = new RpcGetOrderListReq();

        rpcGetOrderListReq.commonReq = commonReq;

        return rpcClientProcess.sendRoutineCoreRpc(0, RpcGetOrderListReq.encode(rpcGetOrderListReq).finish(), reqId, RpcId.GET_ORDER_LIST_REQ);
    }

    // -------------------------------------------------------------------------------------
    public asyncGetTradeList() {
        const reqId = uuidv4()
        const operatorId = authenticationStore.operatorId;
        const sourceNodeId = authenticationStore.nodeId;

        const commonReq = new CommonReqField()
        commonReq.sourceNodeId = sourceNodeId;
        commonReq.targetNodeId = 0;
        commonReq.operatorId = operatorId;
        commonReq.reqId = reqId;

        const rpcGetTradeListReq = new RpcGetTradeListReq();

        rpcGetTradeListReq.commonReq = commonReq;

        return rpcClientProcess.sendRoutineCoreRpc(0, RpcGetTradeListReq.encode(rpcGetTradeListReq).finish(), reqId, RpcId.GET_TRADE_LIST_REQ);
    }
    // -------------------------------------------------------------------------------------
    public asyncGetTickList() {
        const reqId = uuidv4()
        const operatorId = authenticationStore.operatorId;
        const sourceNodeId = authenticationStore.nodeId;

        const commonReq = new CommonReqField()
        commonReq.sourceNodeId = sourceNodeId;
        commonReq.targetNodeId = 0;
        commonReq.operatorId = operatorId;
        commonReq.reqId = reqId;

        const rpcGetTickListReq = new RpcGetTickListReq();

        rpcGetTickListReq.commonReq = commonReq;

        return rpcClientProcess.sendRoutineCoreRpc(0, RpcGetTickListReq.encode(rpcGetTickListReq).finish(), reqId, RpcId.GET_TICK_LIST_REQ);
    }


}


const rpcClientApi = RpcClientApi.getInstance()

export { rpcClientApi };