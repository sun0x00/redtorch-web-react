import { observable, action } from 'mobx'
import { rpcClientApi } from '../node/client/service/rpcClientApi';
import { leftZeroPad, isDevEnv } from '../utils'
import { tradeContractStore } from './tradeContractStore'
class TradeOrderStore {

    @observable orderList: any[] = []
    public orderMap: Map<string, any> = new Map();

    private hasBeenChanged = false;

    public constructor() {
        setTimeout(this.startIntervalCheckChange, 30)
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

    @action getOrderList() {
        rpcClientApi.asyncGetOrderList()
    }

    @action
    public storeOrder(order: any) {
        if (isDevEnv) {
            console.debug(order)
        }
        if (order.contract) {
            tradeContractStore.storeContract(order.contract)
        }
        this.orderMap.set(order.orderId, order);
        this.hasBeenChanged = true
    }

    @action
    public clearAndStoreOrderList(orderList: any[]) {
        if (isDevEnv) {
            console.debug(orderList)
        }
        const newOrderMap: Map<string, any> = new Map();
        const orderListLength = orderList.length
        for (let i = 0; i < orderListLength; i++) {
            const order = orderList[i]
            if (order.contract) {
                tradeContractStore.storeContract(order.contract)
            }
            newOrderMap.set(order.orderId, order)
        }
        this.orderMap = newOrderMap;
        this.hasBeenChanged = true
    }

    @action
    public storeOrderList(orderList: any[]) {
        if (isDevEnv) {
            console.debug(orderList)
        }
        const orderListLength = orderList.length
        for (let i = 0; i < orderListLength; i++) {
            const order = orderList[i]
            if (order.contract) {
                tradeContractStore.storeContract(order.contract)
            }
            this.orderMap.set(order.orderId, order);
        }
        this.hasBeenChanged = true
    }

    @action coverMapToList() {
        const tempOrderList = [...this.orderMap.values()]
        this.orderList = this.sortOrderListByDatetimeAndOrderId(tempOrderList);
    }

    private sortOrderListByDatetimeAndOrderId(orderList: any[]) {
        try {
            return orderList.sort((orderA: any, orderB: any) => {
                let orderAKey = "";
                if (!orderA.orderDate || orderA.orderDate === "") {
                    orderAKey = "00000000";
                } else {
                    orderAKey = orderA.orderDate
                }

                if (!orderA.orderTime || orderA.orderTime === "") {
                    orderAKey += "00:00:00";
                } else {
                    orderAKey += orderA.orderTime
                }
                orderAKey += leftZeroPad(orderA.adapterOrderId, 30)

                let orderBKey = "";
                if (!orderB.orderDate || orderB.orderDate === "") {
                    orderBKey = "00000000";
                } else {
                    orderBKey = orderB.orderDate
                }

                if (!orderB.orderTime || orderB.orderTime === "") {
                    orderBKey += "00:00:00";
                } else {
                    orderBKey += orderB.orderTime
                }
                orderBKey += leftZeroPad(orderB.adapterOrderId, 30)
                return orderBKey.localeCompare(orderAKey)
            });
        } catch (error) {
            console.error("排序发生错误", error)
            return orderList;
        }

    }

}
export const tradeOrderStore = new TradeOrderStore()