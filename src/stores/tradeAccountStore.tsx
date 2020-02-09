import { observable, action } from 'mobx'
import { rpcClientApi } from '../node/client/service/rpcClientApi';
import { isDevEnv } from '../utils';
import { tradePositionStore } from './tradePositionStore'
import { xyz } from "../node/pb/pb";

const { CurrencyEnum } = xyz.redtorch.pb

class TradeAccountStore {
    @observable accountList: any[] = []
    public accountMap: Map<string, any> = new Map();
    @observable selectedAccountIdSet: Set<any> = new Set();

    @observable summaryMap: Map<string, any> = new Map();

    private hasBeenChanged = false;

    public constructor() {
        const cnySummary = {
            "allBalance": 0,
            "allPreBalance": 0,
            "allCloseProfit": 0,
            "allTodayProfit": 0,
            "allPositionProfit": 0,
            "allMargin": 0,
            "allCommission": 0,
            "allDepositAndWithdraw": 0,
        }
        this.summaryMap.set("CNY", cnySummary);
        setTimeout(this.startIntervalCheckChange, 10)
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

    @action getAccountList() {
        rpcClientApi.asyncGetAccountList()
    }

    @action setSelectedAccountIdSet(selectedAccountIdSet: Set<any>) {
        this.selectedAccountIdSet = selectedAccountIdSet;
        this.calcSummary()
        tradePositionStore.calcSummary()
    }

    @action
    public storeAccount(account: any) {
        if (isDevEnv) {
            console.debug(account)
        }
        this.accountMap.set(account.accountId, account);
        this.hasBeenChanged = true
    }

    @action
    public clearAndStoreAccountList(accountList: any[]) {
        if (isDevEnv) {
            console.debug(accountList)
        }
        const newAccountMap: Map<string, any> = new Map();
        const accountListLength = accountList.length
        for (let i = 0; i < accountListLength; i++) {
            const account = accountList[i]
            newAccountMap.set(account.accountId, account)
        }
        this.accountMap = newAccountMap
        this.hasBeenChanged = true
    }

    @action
    public storeAccountList(accountList: any[]) {
        if (isDevEnv) {
            console.debug(accountList)
        }
        const accountListLength = accountList.length
        for (let i = 0; i < accountListLength; i++) {
            const account = accountList[i]
            this.accountMap.set(account.accountId, account);
        }
        this.hasBeenChanged = true
    }

    @action coverMapToList() {
        const tempAccountList = [...this.accountMap.values()]
        this.accountList = this.sortAccountListByAccountId(tempAccountList);
        this.calcSummary()
    }

    @action calcSummary() {

        let allBalance = 0;
        let allPreBalance = 0;
        let allCloseProfit = 0;
        let allTodayProfit = 0;
        let allPositionProfit = 0;
        let allMargin = 0;
        let allCommission = 0;
        let allDepositAndWithdraw = 0;


        //  暂时只做人民币汇总
        const accountListLength = this.accountList.length
        for (let i = 0; i < accountListLength; i++) {
            const account = this.accountList[i]
            if (tradeAccountStore.selectedAccountIdSet.has(account.accountId)) {
                try {
                    if (account.currency === CurrencyEnum.CNY) {
                        allBalance += account.balance
                        allTodayProfit += (account.balance - account.preBalance + account.withdraw - account.deposit)
                        allPreBalance += account.preBalance
                        allCloseProfit += account.closeProfit
                        allPositionProfit += account.positionProfit
                        allMargin += account.margin
                        allCommission += account.commission
                        allDepositAndWithdraw += (account.deposit - account.withdraw)
                    }
                } catch (error) {
                    console.error("计算账户总资金情况错误", error)
                }
            }
        }


        //  暂时只做人民币汇总
        const cnySummary = {
            "allBalance": allBalance,
            "allPreBalance": allPreBalance,
            "allCloseProfit": allCloseProfit,
            "allTodayProfit": allTodayProfit,
            "allPositionProfit": allPositionProfit,
            "allMargin": allMargin,
            "allCommission": allCommission,
            "allDepositAndWithdraw": allDepositAndWithdraw,
        }
        this.summaryMap.set("CNY", cnySummary);
    }

    private sortAccountListByAccountId(accountList: any[]) {
        try {
            return accountList.sort((accountA: any, accountB: any) => {
                return accountA.accountId.localeCompare(accountB.accountId)
            });
        } catch (error) {
            console.error("排序发生错误", error)
            return accountList
        }

    }

}
export const tradeAccountStore = new TradeAccountStore()