import { observable, action } from 'mobx'
import { rpcClientApi } from '../node/client/service/rpcClientApi';
import { isDevEnv } from '../utils';

class TradeContractStore {
    @observable mixContractList: any[] = []
    public mxiContractMap: Map<string, any> = new Map();

    private hasBeenChanged = false;

    public constructor() {
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

    @action getMixContractList() {
        rpcClientApi.asyncGetMixContractList()
    }

    @action
    public storeContract(contract: any) {
        if (isDevEnv) {
            console.debug(contract)
        }
        this.mxiContractMap.set(contract.unifiedSymbol, contract);
        this.hasBeenChanged = true
    }

    @action
    public clearAndStoreContractList(mixContractList: any[]) {
        if (isDevEnv) {
            console.debug(mixContractList)
        }
        const newMixContractMap: Map<string, any> = new Map();
        const mixContractListLength = mixContractList.length
        for (let i = 0; i < mixContractListLength; i++) {
            const contract = mixContractList[i]
            newMixContractMap.set(contract.unifiedSymbol, contract)
        }
        this.mxiContractMap = newMixContractMap
        this.hasBeenChanged = true
    }

    @action
    public storeContractList(mixContractList: any[]) {
        if (isDevEnv) {
            console.debug(mixContractList)
        }
        const mixContractListLength = mixContractList.length
        for (let i = 0; i < mixContractListLength; i++) {
            const contract = mixContractList[i]
            this.mxiContractMap.set(contract.unifiedSymbol, contract);
        }
        this.hasBeenChanged = true
    }

    @action coverMapToList() {
        this.mixContractList = [...this.mxiContractMap.values()]
    }



}
export const tradeContractStore = new TradeContractStore()