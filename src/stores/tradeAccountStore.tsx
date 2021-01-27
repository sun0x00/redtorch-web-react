import { observable, action, makeObservable } from 'mobx';
import { rpcClientApi } from '../node/client/service/rpcClientApi';
import { isDevEnv } from '../utils';
import { tradePositionStore } from './tradePositionStore'
import { xyz } from "../node/pb/pb";

const { CurrencyEnum } = xyz.redtorch.pb

class TradeAccountStore {
    accountList: any[] = [];
    accountMap: Map<string, any> = new Map();
    selectedAccountIdSet: Set<any> = new Set();

    summaryMap: Map<string, any> = new Map();

    private hasBeenChanged = false;

    constructor() {
        makeObservable(this, {
            accountList: observable,
            selectedAccountIdSet: observable,
            summaryMap: observable,
            getAccountList: action,
            setSelectedAccountIdSet: action,
            storeAccount: action,
            clearAndStoreAccountList: action,
            storeAccountList: action,
            coverMapToList: action,
            calcSummary: action
        });

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

    getAccountList() {
        rpcClientApi.asyncGetAccountList()
    }

    setSelectedAccountIdSet(selectedAccountIdSet: Set<any>) {
        this.selectedAccountIdSet = selectedAccountIdSet;
        this.calcSummary()
        tradePositionStore.calcSummary()
    }

    storeAccount(account: any) {
        if (isDevEnv) {
            console.debug(account)
        }
        this.accountMap.set(account.accountId, account);
        this.hasBeenChanged = true
    }

    clearAndStoreAccountList(accountList: any[]) {
        if (isDevEnv) {
            console.debug(accountList)
        }
        const newAccountMap: Map<string, any> = new Map();
        for (let i = 0; i <  accountList.length; i++) {
            const account = accountList[i]
            newAccountMap.set(account.accountId, account)
        }
        this.accountMap = newAccountMap
        this.hasBeenChanged = true
    }

    storeAccountList(accountList: any[]) {
        if (isDevEnv) {
            console.debug(accountList)
        }
        for (let i = 0; i < accountList.length; i++) {
            const account = accountList[i]
            this.accountMap.set(account.accountId, account);
        }
        this.hasBeenChanged = true
    }

    coverMapToList() {
        const tempAccountList = [...this.accountMap.values()]
        this.accountList = this.sortAccountListByAccountId(tempAccountList);
        this.calcSummary()
    }

    calcSummary() {

        let allBalance = 0;
        let allPreBalance = 0;
        let allCloseProfit = 0;
        let allTodayProfit = 0;
        let allPositionProfit = 0;
        let allMargin = 0;
        let allCommission = 0;
        let allDepositAndWithdraw = 0;


        //  暂时只做人民币汇总
        for (let i = 0; i < this.accountList.length; i++) {
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