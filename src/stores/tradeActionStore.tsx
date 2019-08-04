import { observable, action } from 'mobx'
import { tradeContractStore } from './tradeContractStore'
import { tradeAccountStore } from './tradeAccountStore'
import { tradeTickStore } from './tradeTickStore'
import { toast } from 'react-toastify';
import { isDevEnv } from '../utils';
import { rpcClientApi } from '../node/client/service/rpcClientApi';
import { xyz } from '../node/pb/pb';

const { SubmitOrderReqField,
    ContractField,
    PriceTypeEnum,
    DirectionEnum,
    OffsetEnum,
    TimeConditionTypeEnum,
    AccountField
} = xyz.redtorch.pb
class TradeActionStore {
    @observable selectedContract: any;
    @observable priceType: string = "LIMIT";
    @observable autoFillPriceType: string = "LAST"
    @observable price: number = -1
    @observable volume: number = 0;
    @observable timeConditionType: string = "GTC"

    @action setSelectedContract(selectedContract: any) {
        if (isDevEnv) {
            console.debug(selectedContract)
        }
        if (selectedContract) {
            if (tradeContractStore.mxiContractMap.has(selectedContract.unifiedSymbol)) {
                this.selectedContract = tradeContractStore.mxiContractMap.get(selectedContract.unifiedSymbol)
                rpcClientApi.asyncSubscribe(selectedContract)
                this.fillPrice()
            } else {
                toast.warn(`本地缓存未找到所选合约,${selectedContract.unifiedSymbol},${selectedContract.fullName}`);
            }
        } else {
            console.warn("参数为空")
        }
    }

    @action fillPrice() {
        if (this.selectedContract) {
            if (this.autoFillPriceType !== "MANUAL") {
                if (tradeTickStore.mixTickMap.has(this.selectedContract.unifiedSymbol)) {
                    const tick = tradeTickStore.mixTickMap.get(this.selectedContract.unifiedSymbol);
                    try {
                        let tmpPrice;
                        if (this.autoFillPriceType === "LAST") {
                            tmpPrice = tick.lastPrice
                        } else if (this.autoFillPriceType === "UPPER_LIMIT") {
                            tmpPrice = tick.upperLimit
                        } else if (this.autoFillPriceType === "LOWER_LIMIT") {
                            tmpPrice = tick.lowerLimit
                        } else if (this.autoFillPriceType === "BID1") {
                            if (tick.bidPrice && tick.bidPrice.length > 0) {
                                tmpPrice = tick.bidPrice[0]
                            }
                        } else if (this.autoFillPriceType === "ASK1") {
                            if (tick.askPrice && tick.askPrice.length > 0) {
                                tmpPrice = tick.askPrice[0]
                            }
                        }

                        if (tmpPrice && tmpPrice !== Number.MAX_VALUE) {
                            this.price = tmpPrice
                        } else {
                            this.price = -1
                        }

                    } catch (error) {
                        console.error("自动填价错误", error)
                        this.price = -1
                    }

                } else {
                    this.price = -1
                }
            }
        }

    }

    @action setVolume(volume: number) {
        this.volume = volume
    }

    @action setPrice(price: number) {
        this.autoFillPriceType = "MANUAL"
        this.price = price
    }

    @action setTimeConditionType(timeConditionType: string) {
        this.timeConditionType = timeConditionType
    }

    @action setPriceType(priceType: string) {
        this.priceType = priceType
    }

    @action setAutoFillPriceType(autoFillPriceType: string) {
        this.autoFillPriceType = autoFillPriceType
        this.fillPrice()
    }

    @action submitOrder(selectedContract: object, direction: string, offset: string, price: number, priceType: string, volume: number, timeConditionType: string, accountId: string, originOrderId: string) {

        try {
            if (!accountId || accountId === "") {
                console.error("本地信息:提交定单错误,账户ID为空")
                toast.error("本地信息:提交定单错误,账户ID为空");
                return;
            }

            if (!tradeAccountStore.accountMap.has(accountId)) {
                console.error(`本地信息:提交定单错误,未在本地缓存找到账户信息,账户ID:${accountId}`)
                toast.error(`本地信息:提交定单错误,未在本地缓存找到账户信息,账户ID:${accountId}`);
                return;
            }
            const account = tradeAccountStore.accountMap.get(accountId)

            if (!selectedContract) {
                console.error("本地信息:提交定单错误,未选择合约")
                toast.error("本地信息:提交定单错误,未选择合约");
                return;
            }
            const contractField = ContractField.fromObject(selectedContract)

            const submitOrderReqField = new SubmitOrderReqField();
            submitOrderReqField.contract = contractField

            if (priceType !== "MARKET" && (!price || price === -1)) {
                console.error(`本地信息:提交定单错误,错误的价格:${price}`)
                toast.error(`本地信息:提交定单错误,错误的价格:${price}`);
                return;
            }
            submitOrderReqField.price = price

            if (priceType === "LIMIT") {
                submitOrderReqField.priceType = PriceTypeEnum.LIMIT
            } else if (priceType === "MARKET") {
                submitOrderReqField.priceType = PriceTypeEnum.MARKET
            } else if (priceType === "FAK") {
                submitOrderReqField.priceType = PriceTypeEnum.FAK
            } else if (priceType === "FOK") {
                submitOrderReqField.priceType = PriceTypeEnum.FOK
            } else {
                console.error(`本地信息:提交定单错误,未知的价格类型:${priceType}`)
                toast.error(`本地信息:提交定单错误,未知的价格类型:${priceType}`);
                return;
            }

            if (!volume || volume <= 0) {
                console.error(`本地信息:提交定单错误,错误的数量:${volume}`)
                toast.error(`本地信息:提交定单错误,错误的数量:${volume}`);
                return;
            }
            submitOrderReqField.volume = volume;

            if (direction === "LONG") {
                submitOrderReqField.direction = DirectionEnum.LONG
            } else if (direction === "SHORT") {
                submitOrderReqField.direction = DirectionEnum.SHORT
            } else if (direction === "NET") {
                submitOrderReqField.direction = DirectionEnum.NET
            } else {
                console.error(`本地信息:提交定单错误,未知的方向类型:${direction}`)
                toast.error(`本地信息:提交定单错误,未知的方向类型:${direction}`);
                return;
            }

            if (offset === "OPEN") {
                submitOrderReqField.offset = OffsetEnum.OPEN
            } else if (offset === "CLOSE") {
                submitOrderReqField.offset = OffsetEnum.CLOSE
            } else if (offset === "CLOSE_TODAY") {
                submitOrderReqField.offset = OffsetEnum.CLOSE_TODAY
            } else if (offset === "CLOSE_YESTERDAY") {
                submitOrderReqField.offset = OffsetEnum.CLOSE_YESTERDAY
            } else {
                console.error(`本地信息:提交定单错误,未知的开平类型:${offset}`)
                toast.error(`本地信息:提交定单错误,未知的开平类型:${offset}`);
                return;
            }

            if (timeConditionType === "GFD") {
                submitOrderReqField.timeConditionType = TimeConditionTypeEnum.GFD
            } else if (timeConditionType === "GTC") {
                submitOrderReqField.timeConditionType = TimeConditionTypeEnum.GTC
            } else {
                console.error(`本地信息:提交定单错误,未知的时效类型:${timeConditionType}`)
                toast.error(`本地信息:提交定单错误,未知的时效类型:${timeConditionType}`);
                return;
            }

            submitOrderReqField.gatewayId = account.gateway.gatewayId
            const accountField = AccountField.fromObject(account)
            submitOrderReqField.accountCode = accountField.code
            submitOrderReqField.currency = accountField.currency

            submitOrderReqField.originOrderId = originOrderId

            console.error(submitOrderReqField)
            rpcClientApi.asyncSubmitOrder(submitOrderReqField)
        } catch (error) {
            console.error("本地信息:提交定单发生未知错误", error)
            toast.error("本地信息:提交定单发生未知错误");
        }


    }

    @action cancelOrder(orderId: string) {
        rpcClientApi.asyncCancelOrder(orderId)
    }



    @action reset() {
        this.selectedContract = null;
        this.volume = 0;
        this.priceType = "LIMIT";
        this.autoFillPriceType = "LAST";
        this.price = -1;
        this.timeConditionType = "GTC"
    }

}
export const tradeActionStore = new TradeActionStore()