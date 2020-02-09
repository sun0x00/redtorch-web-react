import { observable, action } from 'mobx'
import { isDevEnv } from '../utils';
import { tradeContractStore } from './tradeContractStore';
import { tradeActionStore } from './tradeActionStore'
// import { rpcClientApi } from '../node/client/service/rpcClientApi';

class TradeTickStore {

    @observable tickList: any[] = []
    public mixTickMap: Map<string, any> = new Map();

    @observable selectedTick: any;
    private hasBeenChanged = false;

    public constructor() {
        setTimeout(this.startIntervalCheckChange, 60)
        setTimeout(this.startIntervalUpdateSelectedTick, 80)
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
        setTimeout(this.startIntervalCheckChange, 200)
    }

    startIntervalUpdateSelectedTick = () => {
        try {
            if (tradeActionStore.selectedContract) {
                if (this.mixTickMap.has(tradeActionStore.selectedContract.unifiedSymbol)) {
                    this.selectedTick = this.mixTickMap.get(tradeActionStore.selectedContract.unifiedSymbol)
                } else {
                    this.selectedTick = null
                }
            } else {
                this.selectedTick = null
            }

            tradeActionStore.fillPrice()

        } catch (error) {
            console.error(error)
        }
        setTimeout(this.startIntervalUpdateSelectedTick, 80)
    }

    @action
    public storeTick(tick: any) {
        if (isDevEnv) {
            console.debug(tick)
        }
        if (tick.contract) {
            tradeContractStore.storeContract(tick.contract)

            if (tick.unifiedSymbol) {
                this.mixTickMap.set(tick.unifiedSymbol, tick);
                this.hasBeenChanged = true
            }
        }
    }

    @action
    public clearAndStoreTickList(tickList: any[]) {
        if (isDevEnv) {
            console.debug(tickList)
        }
        const newMixTickMap: Map<string, any> = new Map();
        const tickListLength = tickList.length
        for (let i = 0; i < tickListLength; i++) {
            const tick = tickList[i]
            if (tick.contract) {
                tradeContractStore.storeContract(tick.contract)
            }
            newMixTickMap.set(tick.unifiedSymbol, tick)
        }
        this.mixTickMap = newMixTickMap
        this.hasBeenChanged = true
    }

    @action
    public storeTickList(tickList: any[]) {
        if (isDevEnv) {
            console.debug(tickList)
        }
        const tickListLength = tickList.length
        for (let i = 0; i < tickListLength; i++) {
            const tick = tickList[i]
            if (tick.contract) {
                tradeContractStore.storeContract(tick.contract)
    
                if (tick.unifiedSymbol) {
                    this.mixTickMap.set(tick.unifiedSymbol, tick);
                    this.hasBeenChanged = true
                }
            }
        }
        this.hasBeenChanged = true
    }

    @action coverMapToList() {
        this.tickList = [...this.mixTickMap.values()];
    }

}
export const tradeTickStore = new TradeTickStore()