import { observable, action, makeObservable } from 'mobx';
import { isDevEnv } from '../utils';
import { tradeActionStore } from './tradeActionStore'
// import { rpcClientApi } from '../node/client/service/rpcClientApi';

class TradeTickStore {

    tickList: any[] = [];
    mixTickMap: Map<string, any> = new Map();

    selectedTick: any;
    hasBeenChanged = false;

    constructor() {
        makeObservable(this, {
            tickList: observable,
            selectedTick: observable,
            storeTick: action,
            clearAndStoreTickList: action,
            storeTickList: action,
            coverMapToList: action,
            setSelectedTick: action
        });

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
                    this.setSelectedTick( this.mixTickMap.get(tradeActionStore.selectedContract.unifiedSymbol))
                } else {
                    this.setSelectedTick(null)
                }
            } else {
                this.setSelectedTick(null)
            }

            tradeActionStore.fillPrice()

        } catch (error) {
            console.error(error)
        }
        setTimeout(this.startIntervalUpdateSelectedTick, 80)
    }

    setSelectedTick(selectedTick:any){
        this.selectedTick = selectedTick
    }

    storeTick(tick: any) {
        if (isDevEnv) {
            console.debug(tick)
        }

        if (tick.unifiedSymbol) {
             this.mixTickMap.set(tick.unifiedSymbol, tick);
            this.hasBeenChanged = true
        }
    }

    clearAndStoreTickList(tickList: any[]) {
        if (isDevEnv) {
            console.debug(tickList)
        }
        const newMixTickMap: Map<string, any> = new Map();
        for (let i = 0; i < tickList.length; i++) {
            const tick = tickList[i]
            newMixTickMap.set(tick.unifiedSymbol, tick)
        }
        this.mixTickMap = newMixTickMap
        this.hasBeenChanged = true
    }

    storeTickList(tickList: any[]) {
        if (isDevEnv) {
            console.debug(tickList)
        }
        for (let i = 0; i < tickList.length; i++) {
            const tick = tickList[i]
    
            if (tick.unifiedSymbol) {
                this.mixTickMap.set(tick.unifiedSymbol, tick);
                this.hasBeenChanged = true
            }
        }
        this.hasBeenChanged = true
    }

    coverMapToList() {
        this.tickList = [...this.mixTickMap.values()];
    }

}
export const tradeTickStore = new TradeTickStore()