import { xyz } from "../../pb/pb";
import { tradeOrderStore, tradeTradeStore, tradeAccountStore, tradePositionStore, tradeContractStore, tradeTickStore } from "../../../stores/storesIndex";
import { toast } from 'react-toastify';
import { timestampFormat } from "../../../utils";
import * as Long from "long";

const {
    CommonStatusEnum
} = xyz.redtorch.pb

class RpcClientRtnHandler {

    public static getInstance(): RpcClientRtnHandler {
        if (!RpcClientRtnHandler.instance) {
            RpcClientRtnHandler.instance = new RpcClientRtnHandler();
        }
        return RpcClientRtnHandler.instance;
    }

    private static instance: RpcClientRtnHandler;
    private constructor() {
    }

    public onOrderRtn(rpcOrderRtn: xyz.redtorch.pb.IRpcOrderRtn) {
        if (rpcOrderRtn.order) {
            tradeOrderStore.storeOrder(rpcOrderRtn.order)
        }
    }


    public onTradeRtn(rpcTradeRtn: xyz.redtorch.pb.IRpcTradeRtn) {
        if (rpcTradeRtn.trade) {
            tradeTradeStore.storeTrade(rpcTradeRtn.trade)
        }
    }


    public onContractRtn(rpcContractRtn: xyz.redtorch.pb.IRpcContractRtn) {
        if (rpcContractRtn.contract) {
            tradeContractStore.storeContract(rpcContractRtn.contract)
        }
    }


    public onPositionRtn(rpcPositionRtn: xyz.redtorch.pb.IRpcPositionRtn) {
        if (rpcPositionRtn.position) {
            tradePositionStore.storePosition(rpcPositionRtn.position)
        }
    }


    public onAccountRtn(rpcAccountRtn: xyz.redtorch.pb.IRpcAccountRtn) {
        if (rpcAccountRtn.account) {
            tradeAccountStore.storeAccount(rpcAccountRtn.account)
        }
    }


    public onTickRtn(rpcTickRtn: xyz.redtorch.pb.RpcTickRtn) {
        if (rpcTickRtn.tick) {
            tradeTickStore.storeTick(rpcTickRtn.tick)
        }

    }

    public onNoticeRtn(rpcNoticeRtn: xyz.redtorch.pb.RpcNoticeRtn) {
        // 检查notice,以免编译器报错
        if (rpcNoticeRtn.notice) {
            const commonStatus = rpcNoticeRtn.notice.status
            let timestamp = 0;
            if (rpcNoticeRtn.notice.timestamp && rpcNoticeRtn.notice.timestamp instanceof Long) {
                timestamp = rpcNoticeRtn.notice.timestamp.toNumber()
            } else if (rpcNoticeRtn.notice.timestamp) {
                timestamp = rpcNoticeRtn.notice.timestamp
            }
            if (commonStatus === CommonStatusEnum.INFO) {
                toast(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`, { autoClose: 8000, type: "success" })
                console.log(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`)
            } else if (commonStatus === CommonStatusEnum.WARN) {
                toast(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`, { autoClose: false, type: "warning" })
                console.warn(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`)
            } else if (commonStatus === CommonStatusEnum.ERROR) {
                toast(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`, { autoClose: false, type: "error" })
                console.error(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`)
            } else if (commonStatus === CommonStatusEnum.SUCCESS) {
                toast(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`, { autoClose: 5000, type: "success" })
                console.log(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`)
            }
        }
    }

}
const rpcClientRtnHandler = RpcClientRtnHandler.getInstance()

export { rpcClientRtnHandler };