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

    public onOrderListRtn(rpcOrderListRtn: xyz.redtorch.pb.IRpcOrderListRtn) {
        if (rpcOrderListRtn.order) {
            tradeOrderStore.storeOrderList(rpcOrderListRtn.order)
        }
    }


    public onTradeListRtn(rpcTradeListRtn: xyz.redtorch.pb.IRpcTradeListRtn) {
        if (rpcTradeListRtn.trade) {
            tradeTradeStore.storeTradeList(rpcTradeListRtn.trade)
        }
    }


    public onContractListRtn(rpcContractListRtn: xyz.redtorch.pb.IRpcContractListRtn) {
        if (rpcContractListRtn.contract) {
            tradeContractStore.storeContractList(rpcContractListRtn.contract)
        }
    }


    public onPositionListRtn(rpcPositionListRtn: xyz.redtorch.pb.IRpcPositionListRtn) {
        if (rpcPositionListRtn.position) {
            tradePositionStore.storePositionList(rpcPositionListRtn.position)
        }
    }


    public onAccountListRtn(rpcAccountListRtn: xyz.redtorch.pb.IRpcAccountListRtn) {
        if (rpcAccountListRtn.account) {
            tradeAccountStore.storeAccountList(rpcAccountListRtn.account)
        }
    }


    public onTickListRtn(rpcTickListRtn: xyz.redtorch.pb.RpcTickListRtn) {
        if (rpcTickListRtn.tick) {
            tradeTickStore.storeTick(rpcTickListRtn.tick)
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
            if (commonStatus === CommonStatusEnum.COMS_INFO) {
                toast(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`, { autoClose: 8000, type: "success" })
                console.log(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`)
            } else if (commonStatus === CommonStatusEnum.COMS_WARN) {
                toast(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`, { autoClose: false, type: "warning" })
                console.warn(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`)
            } else if (commonStatus === CommonStatusEnum.COMS_ERROR) {
                toast(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`, { autoClose: false, type: "error" })
                console.error(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`)
            } else if (commonStatus === CommonStatusEnum.COMS_SUCCESS) {
                toast(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`, { autoClose: 5000, type: "success" })
                console.log(`通知:${timestampFormat(timestamp)}→ ${rpcNoticeRtn.notice.content}`)
            }
        }
    }

}
const rpcClientRtnHandler = RpcClientRtnHandler.getInstance()

export { rpcClientRtnHandler };