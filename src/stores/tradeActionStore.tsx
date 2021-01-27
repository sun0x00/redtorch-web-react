import { observable, action, makeObservable } from 'mobx';
import { tradeContractStore } from './tradeContractStore'
import { tradeAccountStore } from './tradeAccountStore'
import { tradeTickStore } from './tradeTickStore'
import { toast } from 'react-toastify';
import { isDevEnv } from '../utils';
import { rpcClientApi } from '../node/client/service/rpcClientApi';
import { xyz } from '../node/pb/pb';

const { SubmitOrderReqField,
    ContractField,
    OrderPriceTypeEnum,
    DirectionEnum,
    OffsetFlagEnum,
    TimeConditionEnum,
    VolumeConditionEnum,
    HedgeFlagEnum,
    AccountField,
    ContingentConditionEnum,
    ForceCloseReasonEnum,
} = xyz.redtorch.pb
class TradeActionStore {
    selectedContract: any;
    orderPriceType: number = OrderPriceTypeEnum.OPT_LimitPrice;
    autoFillOrderPriceType: string = "LAST";
    price: number | string = "";
    stopPrice: number | string = "";
    volume: number = 0;
    timeCondition: number = TimeConditionEnum.TC_GFD;
    volumeCondition: number = VolumeConditionEnum.VC_AV;
    minVolume: number = 1;
    hedgeFlag: number = HedgeFlagEnum.HF_Speculation;
    contingentCondition: number = ContingentConditionEnum.CC_Immediately;

    constructor() {
        makeObservable(this, {
            selectedContract: observable,
            orderPriceType: observable,
            autoFillOrderPriceType: observable,
            price: observable,
            stopPrice: observable,
            volume: observable,
            timeCondition: observable,
            volumeCondition: observable,
            minVolume: observable,
            hedgeFlag: observable,
            contingentCondition: observable,
            setSelectedContract: action,
            fillPrice: action,
            setVolume: action,
            setMinVolume: action,
            setHedgeFlag: action,
            setPrice: action,
            setStopPrice: action,
            setTimeCondition: action,
            setContingentCondition: action,
            setVolumeCondition: action,
            setOrderPriceType: action,
            setAutoFillOrderPriceType: action,
            submitOrder: action,
            cancelOrder: action,
            reset: action
        });
    }

    setSelectedContract(selectedContract: any) {

        if (isDevEnv) {
            console.debug(selectedContract)
        }
        if (selectedContract) {
            if (tradeContractStore.mxiContractMap.has(selectedContract.uniformSymbol)) {
                this.selectedContract = tradeContractStore.mxiContractMap.get(selectedContract.uniformSymbol)
                rpcClientApi.asyncSubscribe(selectedContract)
                this.fillPrice()
            } else {
                toast.warn(`本地缓存未找到所选合约,${selectedContract.uniformSymbol},${selectedContract.fullName}`);
            }
        } else {
            console.warn("参数为空")
        }
    }

    fillPrice() {
        if (this.selectedContract) {
            if (this.autoFillOrderPriceType !== "MANUAL") {
                if (tradeTickStore.mixTickMap.has(this.selectedContract.uniformSymbol)) {
                    const tick = tradeTickStore.mixTickMap.get(this.selectedContract.uniformSymbol);
                    try {
                        let tmpPrice;
                        if (this.autoFillOrderPriceType === "LAST") {
                            tmpPrice = tick.lastPrice
                        } else if (this.autoFillOrderPriceType === "UPPER_LIMIT") {
                            tmpPrice = tick.upperLimit
                        } else if (this.autoFillOrderPriceType === "LOWER_LIMIT") {
                            tmpPrice = tick.lowerLimit
                        } else if (this.autoFillOrderPriceType === "BID1") {
                            if (tick.bidPrice && tick.bidPrice.length > 0) {
                                tmpPrice = tick.bidPrice[0]
                            }
                        } else if (this.autoFillOrderPriceType === "ASK1") {
                            if (tick.askPrice && tick.askPrice.length > 0) {
                                tmpPrice = tick.askPrice[0]
                            }
                        }

                        if (tmpPrice && tmpPrice !== Number.MAX_VALUE) {
                            this.price = tmpPrice
                        } else {
                            this.price = ""
                        }

                    } catch (error) {
                        console.error(error)
                        this.price = ""
                    }

                } else {
                    this.price = ""
                }
            }
        }

    }

    setVolume(volume: number) {
        this.volume = volume
    }

    setMinVolume(minVolume: number | string) {
        if (!minVolume || minVolume === "") {
            this.minVolume = 1
        } else {
            this.minVolume = parseInt(minVolume + "", 10)
        }
    }

    setHedgeFlag(hedgeFlag: number) {
        this.hedgeFlag = hedgeFlag;
    }

    setPrice(price: number | string) {
        this.autoFillOrderPriceType = "MANUAL"
        this.price = price;
    }

    setStopPrice(stopPrice: number | string) {
        this.stopPrice = stopPrice;
    }

    setTimeCondition(timeCondition: number) {
        this.timeCondition = timeCondition
    }

    setContingentCondition(contingentCondition: number) {
        this.contingentCondition = contingentCondition
    }

    setVolumeCondition(volumeCondition: number) {
        this.volumeCondition = volumeCondition
    }

    setOrderPriceType(orderPriceType: number) {
        this.orderPriceType = orderPriceType
    }

    setAutoFillOrderPriceType(autoFillOrderPriceType: string) {
        this.autoFillOrderPriceType = autoFillOrderPriceType
        this.fillPrice()
    }

    submitOrder(
        selectedContract: object,
        direction: number,
        offsetFlag: number,
        price: number,
        orderPriceType: number,
        volume: number,
        timeCondition: number,
        volumeCondition: number,
        hedgeFlag: number,
        minVolume: number,
        accountId: string,
        stopPrice: number,
        contingentCondition: number,
        originOrderId: string
    ) {

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

            if (orderPriceType !== OrderPriceTypeEnum.OPT_AnyPrice && !price) {
                console.error(`本地信息:提交定单错误,错误的价格:${price}`)
                toast.error(`本地信息:提交定单错误,错误的价格:${price}`);
                return;
            }
            submitOrderReqField.price = price

            if (orderPriceType === OrderPriceTypeEnum.OPT_LimitPrice) {
                submitOrderReqField.orderPriceType = OrderPriceTypeEnum.OPT_LimitPrice
            } else if (orderPriceType === OrderPriceTypeEnum.OPT_AnyPrice) {
                submitOrderReqField.orderPriceType = OrderPriceTypeEnum.OPT_AnyPrice
            } else if (orderPriceType === OrderPriceTypeEnum.OPT_FiveLevelPrice) {
                submitOrderReqField.orderPriceType = OrderPriceTypeEnum.OPT_FiveLevelPrice
            } else if (orderPriceType === OrderPriceTypeEnum.OPT_BestPrice) {
                submitOrderReqField.orderPriceType = OrderPriceTypeEnum.OPT_BestPrice
            } else if (orderPriceType === OrderPriceTypeEnum.OPT_LastPrice) {
                submitOrderReqField.orderPriceType = OrderPriceTypeEnum.OPT_LastPrice
            } else if (orderPriceType === OrderPriceTypeEnum.OPT_LastPricePlusOneTicks) {
                submitOrderReqField.orderPriceType = OrderPriceTypeEnum.OPT_LastPricePlusOneTicks
            } else if (orderPriceType === OrderPriceTypeEnum.OPT_LastPricePlusThreeTicks) {
                submitOrderReqField.orderPriceType = OrderPriceTypeEnum.OPT_LastPricePlusThreeTicks
            } else {
                console.error(`本地信息:提交定单错误,未知的价格类型:${orderPriceType}`)
                toast.error(`本地信息:提交定单错误,未知的价格类型:${orderPriceType}`);
                return;
            }

            if (!volume || volume <= 0) {
                console.error(`本地信息:提交定单错误,错误的数量:${volume}`)
                toast.error(`本地信息:提交定单错误,错误的数量:${volume}`);
                return;
            }
            submitOrderReqField.volume = volume;

            if (direction === DirectionEnum.D_Buy) {
                submitOrderReqField.direction = DirectionEnum.D_Buy
            } else if (direction === DirectionEnum.D_Sell) {
                submitOrderReqField.direction = DirectionEnum.D_Sell
            } else {
                console.error(`本地信息:提交定单错误,未知的方向类型:${direction}`)
                toast.error(`本地信息:提交定单错误,未知的方向类型:${direction}`);
                return;
            }

            if (offsetFlag === OffsetFlagEnum.OF_Open) {
                submitOrderReqField.offsetFlag = OffsetFlagEnum.OF_Open
            } else if (offsetFlag === OffsetFlagEnum.OF_Close) {
                submitOrderReqField.offsetFlag = OffsetFlagEnum.OF_Close
            } else if (offsetFlag === OffsetFlagEnum.OF_CloseToday) {
                submitOrderReqField.offsetFlag = OffsetFlagEnum.OF_CloseToday
            } else if (offsetFlag === OffsetFlagEnum.OF_CloseYesterday) {
                submitOrderReqField.offsetFlag = OffsetFlagEnum.OF_CloseYesterday
            } else {
                console.error(`本地信息:提交定单错误,未知的开平类型:${offsetFlag}`)
                toast.error(`本地信息:提交定单错误,未知的开平类型:${offsetFlag}`);
                return;
            }

            if (timeCondition === TimeConditionEnum.TC_GFD) {
                submitOrderReqField.timeCondition = TimeConditionEnum.TC_GFD
            } else if (timeCondition === TimeConditionEnum.TC_GTC) {
                submitOrderReqField.timeCondition = TimeConditionEnum.TC_GTC
            } else if (timeCondition === TimeConditionEnum.TC_IOC) {
                submitOrderReqField.timeCondition = TimeConditionEnum.TC_IOC
            } else {
                console.error(`本地信息:提交定单错误,未知的时效类型:${timeCondition}`)
                toast.error(`本地信息:提交定单错误,未知的时效类型:${timeCondition}`);
                return;
            }

            if (volumeCondition === VolumeConditionEnum.VC_AV) {
                submitOrderReqField.volumeCondition = VolumeConditionEnum.VC_AV
            } else if (volumeCondition === VolumeConditionEnum.VC_MV) {
                submitOrderReqField.volumeCondition = VolumeConditionEnum.VC_MV
            } else if (volumeCondition === VolumeConditionEnum.VC_CV) {
                submitOrderReqField.volumeCondition = VolumeConditionEnum.VC_CV
            } else {
                console.error(`本地信息:提交定单错误,未知的成交量类型:${volumeCondition}`)
                toast.error(`本地信息:提交定单错误,未知的成交量类型:${volumeCondition}`);
                return;
            }

            if (!minVolume || minVolume <= 0) {
                console.error(`本地信息:提交定单错误,错误的最小成交数量:${minVolume}`)
                toast.error(`本地信息:提交定单错误,错误的最小成交数量:${minVolume}`);
                return;
            }
            submitOrderReqField.minVolume = minVolume;


            if (hedgeFlag === HedgeFlagEnum.HF_Speculation) {
                submitOrderReqField.hedgeFlag = HedgeFlagEnum.HF_Speculation
            } else if (hedgeFlag === HedgeFlagEnum.HF_Hedge) {
                submitOrderReqField.hedgeFlag = HedgeFlagEnum.HF_Hedge
            } else if (hedgeFlag === HedgeFlagEnum.HF_MarketMaker) {
                submitOrderReqField.hedgeFlag = HedgeFlagEnum.HF_MarketMaker
            } else if (hedgeFlag === HedgeFlagEnum.HF_Arbitrage) {
                submitOrderReqField.hedgeFlag = HedgeFlagEnum.HF_Arbitrage
            } else if (hedgeFlag === HedgeFlagEnum.HF_SpecHedge) {
                submitOrderReqField.hedgeFlag = HedgeFlagEnum.HF_SpecHedge
            } else if (hedgeFlag === HedgeFlagEnum.HF_HedgeSpec) {
                submitOrderReqField.hedgeFlag = HedgeFlagEnum.HF_HedgeSpec
            } else {
                console.error(`本地信息:提交定单错误,未知的投机套保类型:${hedgeFlag}`)
                toast.error(`本地信息:提交定单错误,未知的投机套保类型:${hedgeFlag}`);
                return;
            }


            if (contingentCondition === ContingentConditionEnum.CC_Immediately) {
                submitOrderReqField.contingentCondition = ContingentConditionEnum.CC_Immediately
            } else if (contingentCondition === ContingentConditionEnum.CC_LastPriceGreaterEqualStopPrice) {
                submitOrderReqField.contingentCondition = ContingentConditionEnum.CC_LastPriceGreaterEqualStopPrice
            } else if (contingentCondition === ContingentConditionEnum.CC_LastPriceLesserEqualStopPrice) {
                submitOrderReqField.contingentCondition = ContingentConditionEnum.CC_LastPriceLesserEqualStopPrice
            } else if (contingentCondition === ContingentConditionEnum.CC_LocalLastPriceGreaterEqualStopPrice) {
                submitOrderReqField.contingentCondition = ContingentConditionEnum.CC_LocalLastPriceGreaterEqualStopPrice
            } else if (contingentCondition === ContingentConditionEnum.CC_LocalLastPriceLesserEqualStopPrice) {
                submitOrderReqField.contingentCondition = ContingentConditionEnum.CC_LocalLastPriceLesserEqualStopPrice
            } else {
                console.error(`本地信息:提交定单错误,未知的触发类型:${contingentCondition}`)
                toast.error(`本地信息:提交定单错误,未知的触发类型:${contingentCondition}`);
                return;
            }

            if (contingentCondition !== ContingentConditionEnum.CC_Immediately) {
                if (!stopPrice) {
                    console.error(`本地信息:提交定单错误,错误的条件价格:${stopPrice}`)
                    toast.error(`本地信息:提交定单错误,错误的条件价格:${stopPrice}`);
                    return;
                } else {
                    submitOrderReqField.stopPrice = stopPrice
                }
            }
            submitOrderReqField.stopPrice = stopPrice

            submitOrderReqField.gatewayId = account.gatewayId
            const accountField = AccountField.fromObject(account)
            submitOrderReqField.accountCode = accountField.code
            submitOrderReqField.currency = accountField.currency

            submitOrderReqField.forceCloseReason = ForceCloseReasonEnum.FCR_NotForceClose
            submitOrderReqField.originOrderId = originOrderId

            console.error(submitOrderReqField)
            rpcClientApi.asyncSubmitOrder(submitOrderReqField)
        } catch (error) {
            console.error("本地信息:提交定单发生未知错误", error)
            toast.error("本地信息:提交定单发生未知错误");
        }
    }

    cancelOrder(orderId: string) {
        rpcClientApi.asyncCancelOrder(orderId)
    }

    reset() {
        this.selectedContract = null;
        this.volume = 0;
        this.orderPriceType = OrderPriceTypeEnum.OPT_LimitPrice;
        this.autoFillOrderPriceType = "LAST";
        this.price = "";
        this.timeCondition = TimeConditionEnum.TC_GFD;
        this.volumeCondition = VolumeConditionEnum.VC_AV;
        this.minVolume = 1;
        this.hedgeFlag = HedgeFlagEnum.HF_Speculation;
    }
}
export const tradeActionStore = new TradeActionStore()