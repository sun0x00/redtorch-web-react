import { observable, action } from 'mobx'
import { rpcClientApi } from '../node/client/service/rpcClientApi';
import { leftZeroPad, isDevEnv } from '../utils';
import { tradeAccountStore } from './tradeAccountStore'
import { tradeContractStore } from './tradeContractStore';
import { xyz } from "../node/pb/pb";

const { CurrencyEnum } = xyz.redtorch.pb

class TradePositionStore {

    @observable positionList: any[] = []
    public positionMap: Map<string, any> = new Map();
    @observable summaryMap: Map<string, any> = new Map();

    private hasBeenChanged = false;

    public constructor() {
        const cnySummary = {
            "allContractValue": 0,
            "allOpenPositionProfit": 0,
        }
        this.summaryMap.set("CNY", cnySummary);
        setTimeout(this.startIntervalCheckChange, 40)
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
        setTimeout(this.startIntervalCheckChange, 300)
    }

    @action getPositionList() {
        rpcClientApi.asyncGetPositionList()
    }

    @action
    public storePosition(position: any) {
        if (isDevEnv) {
            console.debug(position)
        }
        if (position.contract) {
            tradeContractStore.storeContract(position.contract)
        }
        this.positionMap.set(position.positionId, position);
        this.hasBeenChanged = true
    }

    @action
    public clearAndStorePositionList(positionList: any[]) {
        if (isDevEnv) {
            console.debug(positionList)
        }
        const newPositionMap: Map<string, any> = new Map();
        const positionListLength = positionList.length
        for (let i = 0; i < positionListLength; i++) {
            const position = positionList[i]
            if (position.contract) {
                tradeContractStore.storeContract(position.contract)
            }
            newPositionMap.set(position.positionId, position)
        }
        this.positionMap = newPositionMap;
        this.hasBeenChanged = true
    }

    @action
    public storePositionList(positionList: any[]) {
        if (isDevEnv) {
            console.debug(positionList)
        }
        const positionListLength = positionList.length
        for (let i = 0; i < positionListLength; i++) {
            const position = positionList[i]
            if (position.contract) {
                tradeContractStore.storeContract(position.contract)
            }
            this.positionMap.set(position.positionId, position);
        }
        this.hasBeenChanged = true
    }
    
    @action coverMapToList() {
        const tempPositionList = [...this.positionMap.values()]
        this.positionList = this.sortPositionListByAccountIdAndPositionId(tempPositionList);
        this.calcSummary()
    }

    @action calcSummary() {

        let allContractValue = 0;
        let allOpenPositionProfit = 0;

        const positionList = this.positionList
        const positionListLength = positionList.length
        for (let i = 0; i < positionListLength; i++) {
            const position = positionList[i]

            if (tradeAccountStore.selectedAccountIdSet.has(position.accountId)) {
                try {
                    if (position.contract.currency === CurrencyEnum.CNY) {
                        allOpenPositionProfit += (position.openPositionProfit)
                        allContractValue += position.contractValue
                    }
                } catch (error) {
                    console.error("计算持仓总资金情况错误", error)
                }
            }
        }


        //  暂时只做人民币汇总
        const cnySummary = {
            "allContractValue": allContractValue,
            "allOpenPositionProfit": allOpenPositionProfit,
        }
        this.summaryMap.set("CNY", cnySummary);
    }


    private sortPositionListByAccountIdAndPositionId(positionList: any[]) {
        try {
            return positionList.sort((positionA: any, positionB: any) => {
                let positionAKey = positionA.accountId;
                positionAKey += leftZeroPad(positionA.contract.unifiedSymbol, 50)

                let positionBKey = positionB.accountId;
                positionBKey += leftZeroPad(positionB.contract.unifiedSymbol, 50)
                return positionBKey.localeCompare(positionAKey)
            });
        } catch (error) {
            console.error("排序发生错误", error)
            return positionList;
        }
    }

}
export const tradePositionStore = new TradePositionStore()