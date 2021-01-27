import { observable, action, makeObservable } from 'mobx';
import { rpcClientApi } from '../node/client/service/rpcClientApi';
import { isDevEnv } from '../utils';

class TradeContractStore {
    mixContractList: any[] = [];
    mxiContractMap: Map<string, any> = new Map();

    hasBeenChanged = false;

    constructor() {
        makeObservable(this, {
            mixContractList: observable,
            getContractList: action,
            storeContract: action,
            clearAndStoreContractList: action,
            storeContractList: action,
            coverMapToList: action
        });

        setTimeout(this.startIntervalCheckChange, 20)
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

    getContractList() {
        rpcClientApi.asyncGetContractList()
    }

    storeContract(contract: any) {
        if (isDevEnv) {
            console.debug(contract)
        }
        this.mxiContractMap.set(contract.uniformSymbol, contract);
        this.hasBeenChanged = true
    }

    clearAndStoreContractList(mixContractList: any[]) {
        if (isDevEnv) {
            console.debug(mixContractList)
        }
        const newMixContractMap: Map<string, any> = new Map();
        for (let i = 0; i <  mixContractList.length; i++) {
            const contract = mixContractList[i]
            newMixContractMap.set(contract.uniformSymbol, contract)
        }
        this.mxiContractMap = newMixContractMap
        this.hasBeenChanged = true
    }

    storeContractList(mixContractList: any[]) {
        if (isDevEnv) {
            console.debug(mixContractList)
        }
        for (let i = 0; i < mixContractList.length; i++) {
            const contract = mixContractList[i]
            this.mxiContractMap.set(contract.uniformSymbol, contract);
        }
        this.hasBeenChanged = true
    }

    coverMapToList() {
        this.mixContractList = [...this.mxiContractMap.values()]
    }



}
export const tradeContractStore = new TradeContractStore()