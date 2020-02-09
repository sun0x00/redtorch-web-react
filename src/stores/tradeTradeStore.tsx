import { observable, action } from 'mobx'
import { rpcClientApi } from '../node/client/service/rpcClientApi';
import { leftZeroPad, isDevEnv } from '../utils';
import { tradeContractStore } from './tradeContractStore';

class TradeTradeStore {

    @observable tradeList: any[] = []
    public tradeMap: Map<string, any> = new Map();
    private hasBeenChanged = false;

    public constructor() {
        setTimeout(this.startIntervalCheckChange, 60)
    }

    startIntervalCheckChange = () => {
        try {
            if (this.hasBeenChanged) {
                this.coverMapToList()
                this.hasBeenChanged = false
            }
        } catch (error) {
            console.error(error)
        }
        setTimeout(this.startIntervalCheckChange, 500)
    }

    @action getTradeList() {
        rpcClientApi.asyncGetTradeList()
    }

    @action
    public storeTrade(trade: any) {
        if (isDevEnv) {
            console.debug(trade)
        }
        if (trade.contract) {
            tradeContractStore.storeContract(trade.contract)
        }
        this.tradeMap.set(trade.tradeId, trade);
        this.hasBeenChanged = true
    }
    @action
    public clearAndStoreTradeList(tradeList: any[]) {
        if (isDevEnv) {
            console.debug(tradeList)
        }
        const newTradeMap: Map<string, any> = new Map();
        const tradeListLength = tradeList.length
        for (let i = 0; i < tradeListLength; i++) {
            const trade = tradeList[i]
            if (trade.contract) {
                tradeContractStore.storeContract(trade.contract)
            }
            newTradeMap.set(trade.tradeId, trade)
        }
        this.tradeMap = newTradeMap
        this.hasBeenChanged = true
    }

    @action
    public storeTradeList(tradeList: any[]) {
        if (isDevEnv) {
            console.debug(tradeList)
        }
        const tradeListLength = tradeList.length
        for (let i = 0; i < tradeListLength; i++) {
            const trade = tradeList[i]
            if (trade.contract) {
                tradeContractStore.storeContract(trade.contract)
            }
            this.tradeMap.set(trade.tradeId, trade);
        }
        this.hasBeenChanged = true
    }

    @action coverMapToList() {
        const tempTradeList = [...this.tradeMap.values()]
        this.tradeList = this.sortTradeListByDatetimeAndTradeId(tempTradeList);
    }

    private sortTradeListByDatetimeAndTradeId(tradeList: any[]) {
        try {
            return tradeList.sort((tradeA: any, tradeB: any) => {
                let tradeAKey = "";
                if (!tradeA.tradeDate || tradeA.tradeDate === "") {
                    tradeAKey = "00000000";
                } else {
                    tradeAKey = tradeA.tradeDate
                }

                if (!tradeA.tradeTime || tradeA.tradeTime === "") {
                    tradeAKey += "00:00:00";
                } else {
                    tradeAKey += tradeA.tradeTime
                }
                tradeAKey += leftZeroPad(tradeA.adapterTradeId, 30)

                let tradeBKey = "";
                if (!tradeB.tradeDate || tradeB.tradeDate === "") {
                    tradeBKey = "00000000";
                } else {
                    tradeBKey = tradeB.tradeDate
                }

                if (!tradeB.tradeTime || tradeB.tradeTime === "") {
                    tradeBKey += "00:00:00";
                } else {
                    tradeBKey += tradeB.tradeTime
                }
                tradeBKey += leftZeroPad(tradeB.adapterTradeId, 30)
                return tradeBKey.localeCompare(tradeAKey)
            });
        } catch (error) {
            console.error("排序发生错误", error)
            return tradeList;
        }

    }


}
export const tradeTradeStore = new TradeTradeStore()