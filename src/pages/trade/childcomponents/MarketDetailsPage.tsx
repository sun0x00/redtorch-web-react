import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { withRouter } from 'react-router';
import { FontSizes } from 'office-ui-fabric-react/lib/Styling';
import { getNumberOfDecimalDigits, numberFormat, checkEffectiveNumber, timestampFormat } from '../../../utils';
import { TooltipHost, TooltipDelay, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { isNumber } from 'util';



@inject('authenticationStore', 'tradeActionStore', 'tradeTickStore')
@observer
export class MarketDetailsPage extends React.Component<any> {

    public state = { password: '', newPassword: '' };


    public render() {

        const { tradeActionStore, tradeTickStore } = this.props

        const { selectedTick } = tradeTickStore

        let askPrice1: number | string = "--";
        let askPrice1ClassName = "";
        let askVolume1 = "--";
        let askPrice2: number | string = "--";
        let askPrice2ClassName = "";
        let askVolume2 = "--";
        let askPrice3: number | string = "--";
        let askPrice3ClassName = "";
        let askVolume3 = "--";
        let askPrice4: number | string = "--";
        let askPrice4ClassName = "";
        let askVolume4 = "--";
        let askPrice5: number | string = "--";
        let askPrice5ClassName = "";
        let askVolume5 = "--";

        let bidPrice1: number | string = "--";
        let bidPrice1ClassName = "";
        let bidVolume1 = "--";
        let bidPrice2: number | string = "--";
        let bidPrice2ClassName = "";
        let bidVolume2 = "--";
        let bidPrice3: number | string = "--";
        let bidPrice3ClassName = "";
        let bidVolume3 = "--";
        let bidPrice4: number | string = "--";
        let bidPrice4ClassName = "";
        let bidVolume4 = "--";
        let bidPrice5: number | string = "--";
        let bidPrice5ClassName = "";
        let bidVolume5 = "--"

        // ------------------------

        let lastPrice: number | string = "--";
        let lastPriceClassName = "";
        let priceDiff: number | string = "--";
        let pctChange: number | string = "--";
        let openPrice: number | string = "--";
        let openPriceClassName = "";
        let highPrice: number | string = "--";
        let highPriceClassName = "";
        let lowPrice: number | string = "--";
        let lowPriceClassName = "";
        let upperLimit: number | string = "--";
        let lowerLimit: number | string = "--";
        let preClosePrice: number | string = "--";
        let preSettlePrice: number | string = "--";
        let settlePrice: number | string = "--";
        let settlePriceClassName = "";
        let volume = "--"
        let volumeChange = "--"
        let openInterest = "--"
        let dayOpenInterestChange = "--"
        let time = "--"

        if (selectedTick) {
            try {
                let numberOfDecimalDigits = 6
                if (tradeActionStore.selectedContract && tradeActionStore.selectedContract.priceTick && tradeActionStore.selectedContract.priceTick > 0) {
                    const tmpNumberOfDecimalDigits = getNumberOfDecimalDigits(tradeActionStore.selectedContract.priceTick)
                    if (tmpNumberOfDecimalDigits || tmpNumberOfDecimalDigits === 0) {
                        numberOfDecimalDigits = tmpNumberOfDecimalDigits
                    }
                }

                let preReferencePrice;
                if (selectedTick.preSettlePrice && selectedTick.preSettlePrice !== 0 && selectedTick.preSettlePrice !== Number.MAX_VALUE) {
                    preReferencePrice = selectedTick.preSettlePrice
                } else if (selectedTick.preClosePrice && selectedTick.preClosePrice !== 0 && selectedTick.preClosePrice !== Number.MAX_VALUE) {
                    preReferencePrice = selectedTick.preClosePrice
                }

                if (selectedTick && selectedTick.askPrice && selectedTick.askPrice.length >= 1 && selectedTick.askPrice[0] !== Number.MAX_VALUE) {
                    askPrice1 = selectedTick.askPrice[0]
                    if (preReferencePrice) {
                        if (askPrice1 > preReferencePrice) {
                            askPrice1ClassName = "trade-long-color"
                        } else if (askPrice1 < preReferencePrice) {
                            askPrice1ClassName = "trade-short-color"
                        }
                    }
                    askPrice1 = numberFormat(Number(askPrice1), numberOfDecimalDigits)
                }
                if (selectedTick && selectedTick.askVolume && selectedTick.askVolume.length >= 1 && selectedTick.askVolume[0] !== Number.MAX_VALUE) {
                    askVolume1 = selectedTick.askVolume[0]
                }
                //
                if (selectedTick && selectedTick.askPrice && selectedTick.askPrice.length >= 2 && selectedTick.askPrice[1] !== Number.MAX_VALUE) {
                    askPrice2 = selectedTick.askPrice[1]
                    if (preReferencePrice) {
                        if (askPrice2 > preReferencePrice) {
                            askPrice2ClassName = "trade-long-color"
                        } else if (askPrice2 < preReferencePrice) {
                            askPrice2ClassName = "trade-short-color"
                        }
                    }
                    askPrice2 = numberFormat(Number(askPrice2), numberOfDecimalDigits)
                }
                if (selectedTick && selectedTick.askVolume && selectedTick.askVolume.length >= 2 && selectedTick.askVolume[1] !== Number.MAX_VALUE) {
                    askVolume2 = selectedTick.askVolume[1]
                }
                //
                if (selectedTick && selectedTick.askPrice && selectedTick.askPrice.length >= 3 && selectedTick.askPrice[2] !== Number.MAX_VALUE) {
                    askPrice3 = selectedTick.askPrice[2]
                    if (preReferencePrice) {
                        if (askPrice3 > preReferencePrice) {
                            askPrice3ClassName = "trade-long-color"
                        } else if (askPrice3 < preReferencePrice) {
                            askPrice3ClassName = "trade-short-color"
                        }
                    }
                    askPrice3 = numberFormat(Number(askPrice3), numberOfDecimalDigits)
                }
                if (selectedTick && selectedTick.askVolume && selectedTick.askVolume.length >= 3 && selectedTick.askVolume[2] !== Number.MAX_VALUE) {
                    askVolume3 = selectedTick.askVolume[2]
                }
                //
                if (selectedTick && selectedTick.askPrice && selectedTick.askPrice.length >= 4 && selectedTick.askPrice[3] !== Number.MAX_VALUE) {
                    askPrice4 = selectedTick.askPrice[3]
                    if (preReferencePrice) {
                        if (askPrice4 > preReferencePrice) {
                            askPrice4ClassName = "trade-long-color"
                        } else if (askPrice4 < preReferencePrice) {
                            askPrice4ClassName = "trade-short-color"
                        }
                    }
                    askPrice4 = numberFormat(Number(askPrice4), numberOfDecimalDigits)
                }
                if (selectedTick && selectedTick.askVolume && selectedTick.askVolume.length >= 4 && selectedTick.askVolume[3] !== Number.MAX_VALUE) {
                    askVolume4 = selectedTick.askVolume[3]
                }
                //
                if (selectedTick && selectedTick.askPrice && selectedTick.askPrice.length >= 5 && selectedTick.askPrice[4] !== Number.MAX_VALUE) {
                    askPrice5 = selectedTick.askPrice[4]
                    if (preReferencePrice) {
                        if (askPrice5 > preReferencePrice) {
                            askPrice5ClassName = "trade-long-color"
                        } else if (askPrice5 < preReferencePrice) {
                            askPrice5ClassName = "trade-short-color"
                        }
                    }
                    askPrice5 = numberFormat(Number(askPrice5), numberOfDecimalDigits)
                }
                if (selectedTick && selectedTick.askVolume && selectedTick.askVolume.length >= 5 && selectedTick.askVolume[4] !== Number.MAX_VALUE) {
                    askVolume5 = selectedTick.askVolume[4]
                }
                //
                if (selectedTick && selectedTick.bidPrice && selectedTick.bidPrice.length >= 1 && selectedTick.bidPrice[0] !== Number.MAX_VALUE) {
                    bidPrice1 = selectedTick.bidPrice[0]
                    if (preReferencePrice) {
                        if (bidPrice1 > preReferencePrice) {
                            bidPrice1ClassName = "trade-long-color"
                        } else if (bidPrice1 < preReferencePrice) {
                            bidPrice1ClassName = "trade-short-color"
                        }
                    }
                    bidPrice1 = numberFormat(Number(bidPrice1), numberOfDecimalDigits)
                }
                if (selectedTick && selectedTick.bidVolume && selectedTick.bidVolume.length >= 1 && selectedTick.bidVolume[0] !== Number.MAX_VALUE) {
                    bidVolume1 = selectedTick.bidVolume[0]
                }
                //
                if (selectedTick && selectedTick.bidPrice && selectedTick.bidPrice.length >= 2 && selectedTick.bidPrice[1] !== Number.MAX_VALUE) {
                    bidPrice2 = selectedTick.bidPrice[1]
                    if (preReferencePrice) {
                        if (bidPrice2 > preReferencePrice) {
                            bidPrice2ClassName = "trade-long-color"
                        } else if (bidPrice2 < preReferencePrice) {
                            bidPrice2ClassName = "trade-short-color"
                        }
                    }
                    bidPrice2 = numberFormat(Number(bidPrice2), numberOfDecimalDigits)
                }
                if (selectedTick && selectedTick.bidVolume && selectedTick.bidVolume.length >= 2 && selectedTick.bidVolume[1] !== Number.MAX_VALUE) {
                    bidVolume2 = selectedTick.bidVolume[1]
                }
                //
                if (selectedTick && selectedTick.bidPrice && selectedTick.bidPrice.length >= 3 && selectedTick.bidPrice[2] !== Number.MAX_VALUE) {
                    bidPrice3 = selectedTick.bidPrice[2]
                    if (preReferencePrice) {
                        if (bidPrice3 > preReferencePrice) {
                            bidPrice3ClassName = "trade-long-color"
                        } else if (bidPrice3 < preReferencePrice) {
                            bidPrice3ClassName = "trade-short-color"
                        }
                    }
                    bidPrice3 = numberFormat(Number(bidPrice3), numberOfDecimalDigits)
                }
                if (selectedTick && selectedTick.bidVolume && selectedTick.bidVolume.length >= 3 && selectedTick.bidVolume[2] !== Number.MAX_VALUE) {
                    bidVolume3 = selectedTick.bidVolume[2]
                }
                //
                if (selectedTick && selectedTick.bidPrice && selectedTick.bidPrice.length >= 4 && selectedTick.bidPrice[3] !== Number.MAX_VALUE) {
                    bidPrice4 = selectedTick.bidPrice[3]
                    if (preReferencePrice) {
                        if (bidPrice4 > preReferencePrice) {
                            bidPrice4ClassName = "trade-long-color"
                        } else if (bidPrice4 < preReferencePrice) {
                            bidPrice4ClassName = "trade-short-color"
                        }
                    }
                    bidPrice4 = numberFormat(Number(bidPrice4), numberOfDecimalDigits)
                }
                if (selectedTick && selectedTick.bidVolume && selectedTick.bidVolume.length >= 4 && selectedTick.bidVolume[3] !== Number.MAX_VALUE) {
                    bidVolume4 = selectedTick.bidVolume[3]
                }
                //
                if (selectedTick && selectedTick.bidPrice && selectedTick.bidPrice.length >= 5 && selectedTick.bidPrice[4] !== Number.MAX_VALUE) {
                    bidPrice5 = selectedTick.bidPrice[4]
                    if (preReferencePrice) {
                        if (bidPrice5 > preReferencePrice) {
                            bidPrice5ClassName = "trade-long-color"
                        } else if (bidPrice5 < preReferencePrice) {
                            bidPrice5ClassName = "trade-short-color"
                        }
                    }
                    bidPrice5 = numberFormat(Number(bidPrice5), numberOfDecimalDigits)
                }
                if (selectedTick && selectedTick.bidVolume && selectedTick.bidVolume.length >= 5 && selectedTick.bidVolume[4] !== Number.MAX_VALUE) {
                    bidVolume5 = selectedTick.bidVolume[4]
                }
                // -----------------------------


                if (checkEffectiveNumber(selectedTick.lastPrice)) {
                    lastPrice = selectedTick.lastPrice
                    if (preReferencePrice) {
                        if (lastPrice > preReferencePrice) {
                            lastPriceClassName = "trade-long-color"
                        } else if (lastPrice < preReferencePrice) {
                            lastPriceClassName = "trade-short-color"
                        }
                        priceDiff = Number(lastPrice) - preReferencePrice
                        pctChange = numberFormat(priceDiff / preReferencePrice * 100, 2)
                        priceDiff = numberFormat(Number(priceDiff), numberOfDecimalDigits)
                    }
                    lastPrice = numberFormat(Number(lastPrice), numberOfDecimalDigits)
                }

                if (checkEffectiveNumber(selectedTick.openPrice)) {
                    openPrice = selectedTick.openPrice
                    if (preReferencePrice) {
                        if (openPrice > preReferencePrice) {
                            openPriceClassName = "trade-long-color"
                        } else if (openPrice < preReferencePrice) {
                            openPriceClassName = "trade-short-color"
                        }
                    }
                    openPrice = numberFormat(Number(openPrice), numberOfDecimalDigits)
                }

                if (checkEffectiveNumber(selectedTick.highPrice)) {
                    highPrice = selectedTick.highPrice
                    if (preReferencePrice) {
                        if (highPrice > preReferencePrice) {
                            highPriceClassName = "trade-long-color"
                        } else if (highPrice < preReferencePrice) {
                            highPriceClassName = "trade-short-color"
                        }
                    }
                    highPrice = numberFormat(Number(highPrice), numberOfDecimalDigits)
                }

                if (checkEffectiveNumber(selectedTick.lowPrice)) {
                    lowPrice = selectedTick.lowPrice
                    if (preReferencePrice) {
                        if (lowPrice > preReferencePrice) {
                            lowPriceClassName = "trade-long-color"
                        } else if (lowPrice < preReferencePrice) {
                            lowPriceClassName = "trade-short-color"
                        }
                    }
                    lowPrice = numberFormat(Number(lowPrice), numberOfDecimalDigits)
                }

                if (checkEffectiveNumber(selectedTick.settlePrice)) {
                    settlePrice = selectedTick.settlePrice
                    if (preReferencePrice) {
                        if (settlePrice > preReferencePrice) {
                            settlePriceClassName = "trade-long-color"
                        } else if (settlePrice < preReferencePrice) {
                            settlePriceClassName = "trade-short-color"
                        }
                    }
                    settlePrice = numberFormat(Number(settlePrice), numberOfDecimalDigits)
                }

                if (checkEffectiveNumber(selectedTick.upperLimit)) {
                    upperLimit = selectedTick.upperLimit
                    upperLimit = numberFormat(Number(upperLimit), numberOfDecimalDigits)
                }

                if (checkEffectiveNumber(selectedTick.lowerLimit)) {
                    lowerLimit = selectedTick.lowerLimit
                    lowerLimit = numberFormat(Number(lowerLimit), numberOfDecimalDigits)
                }

                if (checkEffectiveNumber(selectedTick.preClosePrice)) {
                    preClosePrice = selectedTick.preClosePrice
                    preClosePrice = numberFormat(Number(preClosePrice), numberOfDecimalDigits)
                }

                if (checkEffectiveNumber(selectedTick.preSettlePrice)) {
                    preSettlePrice = selectedTick.preSettlePrice
                    preSettlePrice = numberFormat(Number(preSettlePrice), numberOfDecimalDigits)
                }

                if (checkEffectiveNumber(selectedTick.volume)) {
                    volume = selectedTick.volume
                }
                if (checkEffectiveNumber(selectedTick.volumeChange)) {
                    volumeChange = selectedTick.volumeChange
                }


                if (checkEffectiveNumber(selectedTick.openInterest)) {
                    openInterest = selectedTick.openInterest
                }

                if (checkEffectiveNumber(selectedTick.openInterest)
                    && checkEffectiveNumber(selectedTick.preOpenInterest)) {
                    dayOpenInterestChange = `${selectedTick.openInterest - selectedTick.preOpenInterest}`
                }

                if (isNumber(selectedTick.actionTimestamp)) {
                    time = timestampFormat(selectedTick.actionTimestamp, "HH:mm:ss.SSS")
                }

            } catch (error) {
                console.error(error)
            }

        }

        const { selectedContract } = tradeActionStore


        const { componentHeight } = this.props;


        return (
            <Stack styles={{ root: { width: "100%" } }}>
                <Stack.Item>
                    <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                        <Stack tokens={{ childrenGap: 2 }} styles={{ root: { height: componentHeight, background: "rgb(17,17,17)", width: "100%", paddingTop: 2, fontSize: FontSizes.xSmall, overflowY: "auto" } }}>
                            <Stack.Item styles={{ root: { width: "100%", borderBottom: "1px solid #666666" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "100%", textAlign: "center", fontSize: FontSizes.xLarge } }}>
                                        {selectedContract ? selectedContract.shortName : <span>--</span>}
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%", borderBottom: "1px solid #666666" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "100%", textAlign: "center", fontSize: FontSizes.xLarge } }}>
                                        <TooltipHost
                                            calloutProps={{ gapSpace: 20 }}
                                            tooltipProps={{
                                                onRenderContent: () => {
                                                    const tooltipLabelStyls: React.CSSProperties = { display: 'inline-block', width: 75, textAlign: "right", color: '#999', paddingRight: 3 }
                                                    if (selectedContract) {
                                                        return (
                                                            <div>
                                                                <ul style={{ margin: 0, padding: 0 }}>
                                                                    <li><span style={tooltipLabelStyls}>合约代码:</span><span>{selectedContract.symbol}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>简称:</span><span>{selectedContract.shortName}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>完整名称:</span><span>{selectedContract.fullName}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>交易所:</span><span>{selectedContract.exchange}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>产品类型:</span><span>{selectedContract.productType}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>第三方ID:</span><span>{selectedContract.thirdPartyId}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>货币:</span><span>{selectedContract.currency}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>合约乘数:</span><span>{selectedContract.multiplier}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>最小变动价位:</span><span>{selectedContract.priceTick}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>最后交易日或合约月:</span><span>{selectedContract.lastTradeDateOrContractMonth}</span></li>
                                                                </ul>
                                                            </div>
                                                        );
                                                    } else {
                                                        return (
                                                            <div>无合约信息</div>
                                                        )
                                                    }
                                                }
                                            }}
                                            delay={TooltipDelay.zero}
                                            directionalHint={DirectionalHint.bottomCenter}
                                        >
                                            <span style={{ cursor: "help" }}> {selectedContract ? selectedContract.symbol : "--"}</span>
                                        </TooltipHost>
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        卖五
                                            </Stack>
                                    <Stack className={askPrice5ClassName} styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            askPrice5
                                        }
                                    </Stack>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            askVolume5
                                        }
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        卖四
                                            </Stack>
                                    <Stack className={askPrice4ClassName} styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            askPrice4
                                        }
                                    </Stack>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            askVolume4
                                        }
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        卖三
                                            </Stack>
                                    <Stack className={askPrice3ClassName} styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            askPrice3
                                        }
                                    </Stack>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            askVolume3
                                        }
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%", borderBottom: "1px solid #666666" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        卖二
                                            </Stack>
                                    <Stack className={askPrice2ClassName} styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            askPrice2
                                        }
                                    </Stack>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            askVolume2
                                        }
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%", borderBottom: "1px solid #666666" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", textAlign: "left", paddingLeft: 3 } }}>
                                        卖一
                                            </Stack>
                                    <Stack className={askPrice1ClassName} styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3, fontSize: FontSizes.large } }}>
                                        {
                                            askPrice1
                                        }
                                    </Stack>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3, fontSize: FontSizes.large } }}>
                                        {
                                            askVolume1
                                        }
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%", borderBottom: "1px solid #666666" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", textAlign: "left", paddingLeft: 3 } }}>
                                        买一
                                            </Stack>
                                    <Stack className={bidPrice1ClassName} styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3, fontSize: FontSizes.large } }}>
                                        {
                                            bidPrice1
                                        }
                                    </Stack>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3, fontSize: FontSizes.large } }}>
                                        {
                                            bidVolume1
                                        }
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        买二
                                            </Stack>
                                    <Stack className={bidPrice2ClassName} styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            bidPrice2
                                        }
                                    </Stack>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            bidVolume2
                                        }
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        买三
                                            </Stack>
                                    <Stack className={bidPrice3ClassName} styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            bidPrice3
                                        }
                                    </Stack>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            bidVolume3
                                        }
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        买四
                                            </Stack>
                                    <Stack className={bidPrice4ClassName} styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            bidPrice4
                                        }
                                    </Stack>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            bidVolume4
                                        }
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%", borderBottom: "1px solid #666666" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        买五
                                            </Stack>
                                    <Stack className={bidPrice5ClassName} styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            bidPrice5
                                        }
                                    </Stack>
                                    <Stack className="trade-remind-color" styles={{ root: { width: "42%", textAlign: "right", paddingRight: 3 } }}>
                                        {
                                            bidVolume5
                                        }
                                    </Stack>
                                </Stack>
                            </Stack.Item>

                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        最新
                                            </Stack>
                                    <Stack className={lastPriceClassName} styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {lastPrice}
                                    </Stack>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999", borderLeft: "1px solid #666666" } }}>
                                        涨跌
                                            </Stack>
                                    <Stack className={lastPriceClassName} styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {pctChange}%
                                            </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        现手
                                            </Stack>
                                    <Stack className="trade-info-color" styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {volumeChange}
                                    </Stack>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999", borderLeft: "1px solid #666666" } }}>
                                        价差
                                            </Stack>
                                    <Stack styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {priceDiff}
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        总手
                                            </Stack>
                                    <Stack className="trade-info-color" styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {volume}
                                    </Stack>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999", borderLeft: "1px solid #666666" } }}>
                                        开盘
                                            </Stack>
                                    <Stack className={openPriceClassName} styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {openPrice}
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        持仓
                                            </Stack>
                                    <Stack className="trade-info-color" styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {openInterest}
                                    </Stack>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999", borderLeft: "1px solid #666666" } }}>
                                        最高
                                            </Stack>
                                    <Stack className={highPriceClassName} styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {highPrice}
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        日增
                                            </Stack>
                                    <Stack className="trade-info-color" styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {dayOpenInterestChange}
                                    </Stack>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999", borderLeft: "1px solid #666666" } }}>
                                        最低
                                            </Stack>
                                    <Stack className={lowPriceClassName} styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {lowPrice}
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        昨收
                                            </Stack>
                                    <Stack styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {preClosePrice}
                                    </Stack>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999", borderLeft: "1px solid #666666" } }}>
                                        涨停
                                            </Stack>
                                    <Stack className="trade-long-color" styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {upperLimit}
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        昨结
                                            </Stack>
                                    <Stack styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {preSettlePrice}
                                    </Stack>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999", borderLeft: "1px solid #666666" } }}>
                                        跌停
                                            </Stack>
                                    <Stack className="trade-short-color" styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {lowerLimit}
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "20%", textAlign: "left", paddingLeft: 3, color: "#999" } }}>
                                        结算价
                                            </Stack>
                                    <Stack className={settlePriceClassName} styles={{ root: { width: "30%", textAlign: "right", paddingRight: 3 } }}>
                                        {settlePrice}
                                    </Stack>
                                    <Stack styles={{ root: { width: "15%", textAlign: "left", paddingLeft: 3, color: "#999", borderLeft: "1px solid #666666" } }}>
                                        时间
                                            </Stack>
                                    <Stack styles={{ root: { width: "35%", textAlign: "right", paddingRight: 3 } }}>
                                        {time}
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                        </Stack>
                    </Stack>
                </Stack.Item>
            </Stack>
        );
    }



}

export default withRouter(MarketDetailsPage)
