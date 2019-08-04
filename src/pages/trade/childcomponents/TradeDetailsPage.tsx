import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { withRouter } from 'react-router';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { DetailsList, DetailsListLayoutMode, ConstrainMode, IDetailsHeaderProps, IDetailsFooterProps, SelectionMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { IRenderFunction } from 'office-ui-fabric-react/lib/Utilities';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { TooltipHost, TooltipDelay, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import * as uuidv4 from 'uuid/v4'
import { deepCopy } from '../../../utils';
import { xyz } from "../../../node/pb/pb";

const { DirectionEnum, OffsetEnum, ProductTypeEnum, ExchangeEnum, CurrencyEnum, GatewayTypeEnum, GatewayAdapterTypeEnum } = xyz.redtorch.pb

// const tableLabelStyls: React.CSSProperties = { display: 'inline-block', width: 27, textAlign: "right", color: '#999',paddingRight:3 }

@inject('authenticationStore', "tradeTradeStore", "tradeAccountStore", "tradeActionStore")
@observer
export class TradeDetailsPage extends React.Component<any> {
    public state = { directionChoice: 'ALL', showMerged: false };
    public render() {


        const { componentHeight, tradeTradeStore, tradeAccountStore, tradeActionStore } = this.props;

        const { accountMap } = tradeAccountStore;
        const { selectedContract } = tradeActionStore;

        let tradeList: any[] = []
        const tradeTradeStoreTradeList = tradeTradeStore.tradeList
        const tradeTradeStoreTradeListLength = tradeTradeStoreTradeList.length
        for (let i = 0; i < tradeTradeStoreTradeListLength; i++) {
            const trade = tradeTradeStoreTradeList[i]
            if (tradeAccountStore.selectedAccountIdSet.has(trade.accountId)) {
                if (this.state.directionChoice === "ALL"
                    || (this.state.directionChoice === 'LONG' && trade.direction === DirectionEnum.LONG)
                    || (this.state.directionChoice === 'SHORT' && trade.direction === DirectionEnum.SHORT)
                ) {
                    tradeList.push(trade)
                }
            }
        }

        if (this.state.showMerged) {

            const mergedTradeMap = new Map();

            const tradeListLength = tradeList.length
            for (let i = 0; i < tradeListLength; i++) {
                const trade = tradeList[i]
                try {
                    const tmpKey = `${trade.contract.unifiedSymbol}@${trade.direction}@${trade.offset}`
                    let tmpTrade;
                    if (mergedTradeMap.has(tmpKey)) {
                        tmpTrade = mergedTradeMap.get(tmpKey)
                        tmpTrade.volume += trade.volume
                    } else {
                        const tmpGateway = {
                            description: "",
                            gatewayAdapterType: "",
                            gatewayId: "",
                            gatewayType: "",
                            name: "",
                            status: "",
                        }
                        tmpTrade = {
                            accountId: "",
                            adapterOrderId: "",
                            adapterTradeId: "",
                            contract: deepCopy(trade.contract),
                            direction: trade.direction,
                            gateway: tmpGateway,
                            offset: trade.offset,
                            orderId: "",
                            originOrderId: "",
                            price: 0,
                            tradeDate: "",
                            tradeId: uuidv4().replace("-", ""),
                            tradeTime: "",
                            tradeTimestamp: "",
                            tradingDay: "",
                            volume: trade.volume
                        }
                        tmpTrade.contract.gateway = tmpGateway;

                    }
                    mergedTradeMap.set(tmpKey, tmpTrade)
                } catch (error) {
                    console.error("合并计算成交错误", error)
                }
            }

            tradeList = [...mergedTradeMap.values()]

        }


        const columns: IColumn[] = [{
            key: "contract",
            name: "合约",
            minWidth: 150,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                if (item.contract) {
                    const tooltipLabelStyls: React.CSSProperties = { display: 'inline-block', width: 75, textAlign: "right", color: '#999', paddingRight: 3 }
                    let clazzNames = ""
                    if (selectedContract && item.contract.unifiedSymbol === selectedContract.unifiedSymbol) {
                        clazzNames = "trade-remind-color"
                    }
                    return (
                        <TooltipHost
                            calloutProps={{ gapSpace: 20 }}
                            tooltipProps={{
                                onRenderContent: () => {
                                    return (
                                        <div>
                                            <ul style={{ margin: 0, padding: 0 }}>
                                                <li><span style={tooltipLabelStyls}>合约代码:</span><span>{item.contract.symbol}</span></li>
                                                <li><span style={tooltipLabelStyls}>简称:</span><span>{item.contract.shortName}</span></li>
                                                <li><span style={tooltipLabelStyls}>完整名称:</span><span>{item.contract.fullName}</span></li>
                                                <li><span style={tooltipLabelStyls}>交易所:</span><span>{ExchangeEnum[item.contract.exchange]}</span></li>
                                                <li><span style={tooltipLabelStyls}>产品类型:</span><span>{ProductTypeEnum[item.contract.productType]}</span></li>
                                                <li><span style={tooltipLabelStyls}>第三方ID:</span><span>{item.contract.thirdPartyId}</span></li>
                                                <li><span style={tooltipLabelStyls}>货币:</span><span>{CurrencyEnum[item.contract.currency]}</span></li>
                                                <li><span style={tooltipLabelStyls}>合约乘数:</span><span>{item.contract.multiplier}</span></li>
                                                <li><span style={tooltipLabelStyls}>最小变动价位:</span><span>{item.contract.priceTick}</span></li>
                                                <li><span style={tooltipLabelStyls}>最后交易日或合约月:</span><span>{item.contract.lastTradeDateOrContractMonth}</span></li>
                                            </ul>
                                        </div>
                                    );
                                }
                            }}
                            delay={TooltipDelay.long}
                            directionalHint={DirectionalHint.bottomCenter}
                        >
                            <div style={{ cursor: "pointer" }} className={clazzNames} onClick={
                                () => {
                                    tradeActionStore.setSelectedContract(item.contract)
                                }
                            }>
                                <div>{item.contract.unifiedSymbol}</div>
                                <div>{item.contract.shortName}</div>
                            </div>
                        </TooltipHost>
                    );
                } else {
                    return (
                        <span>无有效合约信息</span>
                    )
                }

            }
        }, {
            key: "direction",
            name: "方向",
            minWidth: 30,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                if (item.direction === DirectionEnum.LONG) {
                    return (
                        <span className="trade-long-color">多</span>
                    );
                } else if (item.direction === DirectionEnum.SHORT) {
                    return (
                        <span className="trade-short-color">空</span>
                    );
                } else if (item.direction === DirectionEnum.NET) {
                    return (
                        <span>净</span>
                    );
                } else {
                    return (
                        <span>未知</span>
                    );
                }
            }
        }, {
            key: "offset",
            name: "开平",
            minWidth: 30,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                if (item.offset === OffsetEnum.OPEN) {
                    return (
                        <span>开仓</span>
                    );
                } else if (item.offset === OffsetEnum.CLOSE) {
                    return (
                        <span>平仓</span>
                    );
                } else if (item.offset === OffsetEnum.CLOSE_YESTERDAY) {
                    return (
                        <span>平昨</span>
                    );
                } else if (item.offset === OffsetEnum.CLOSE_TODAY) {
                    return (
                        <span>平今</span>
                    );
                } else if (item.offset === OffsetEnum.OFFSET_NONE) {
                    return (
                        <span>无</span>
                    );
                } else {
                    return (
                        <span>未知</span>
                    );
                }
            }
        }, {
            key: "price",
            name: "价格",
            minWidth: 50,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span className="trade-info-color">{item.price}</span>
                );
            }
        }, {
            key: "volume",
            name: "量",
            minWidth: 40,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{item.volume}</span>
                );
            }
        },
        {
            key: "time",
            name: "时间",
            minWidth: 70,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <div>
                        <div>{item.tradeDate}</div>
                        <div>{item.tradeTime}</div>
                    </div>
                );
            }
        },
        {
            key: "adapterOrderId",
            name: "定单编号",
            minWidth: 56,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{item.adapterOrderId}</span>
                );
            }
        },
        {
            key: "adapterTradeId",
            name: "成交编号",
            minWidth: 56,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{item.adapterTradeId}</span>
                );
            }
        }, {
            key: "accountCode",
            name: "账户代码",
            minWidth: 70,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                const labelStyls: React.CSSProperties = { display: 'inline-block', width: 55, textAlign: "right", color: '#999', paddingRight: 3 }

                let account: any;

                try {
                    account = accountMap.get(item.accountId)
                } catch (error) {
                    console.log("获取账户代码错误", error)
                }

                if (account && account.code) {
                    return (
                        <TooltipHost
                            calloutProps={{ gapSpace: 20 }}
                            tooltipProps={{
                                onRenderContent: () => {
                                    if (account.gateway) {
                                        return (
                                            <div>
                                                <ul style={{ margin: 0, padding: 0 }}>
                                                    <li><span style={labelStyls}>网关ID:</span><span>{account.gateway.gatewayId}</span></li>
                                                    <li><span style={labelStyls}>网关名称:</span><span>{account.gateway.name}</span></li>
                                                    <li><span style={labelStyls}>网关类型:</span><span>{GatewayTypeEnum[account.gateway.gatewayType]}</span></li>
                                                    <li><span style={labelStyls}>适配类型:</span><span>{GatewayAdapterTypeEnum[account.gateway.gatewayAdapterType]}</span></li>
                                                    <li><span style={labelStyls}>网关描述:</span><span>{account.gateway.description ? account.gateway.description : ""}</span></li>
                                                </ul>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div>无网关信息</div>
                                        )
                                    }
                                }
                            }}
                            delay={TooltipDelay.long}
                            directionalHint={DirectionalHint.bottomCenter}
                        >
                            <span>{account.code}</span>
                        </TooltipHost>
                    );
                }

                return (
                    <span>无账户信息</span>
                )



            }
        }

        ]

        const classNames = mergeStyleSets({
            wrapper: {
                height: `${componentHeight - 30}px`,
                position: 'relative',
                maxHeight: 'inherit'
            }
        });

        return (
            <Stack styles={{ root: { width: "100%" } }}>
                <Stack.Item>
                    <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                        <Stack styles={{ root: { width: "100%" } }}>
                            <div className={classNames.wrapper}>
                                <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                                    <DetailsList
                                        // styles={{ root: { height: `${this.state.windowInnerHeight-81}px`} }}
                                        items={tradeList}
                                        compact={true}
                                        columns={columns}
                                        selectionMode={SelectionMode.none}
                                        setKey="id"
                                        layoutMode={DetailsListLayoutMode.fixedColumns}
                                        constrainMode={ConstrainMode.unconstrained}
                                        // data-is-scrollable={true}
                                        onRenderDetailsHeader={
                                            // tslint:disable-next-line:jsx-no-lambda
                                            (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                                                <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
                                                    {defaultRender(detailsHeaderProps)}
                                                </Sticky>
                                            )}
                                        onRenderDetailsFooter={
                                            // tslint:disable-next-line:jsx-no-lambda
                                            (detailsFooterProps: IDetailsFooterProps, defaultRender: IRenderFunction<IDetailsFooterProps>) => (
                                                <Sticky stickyPosition={StickyPositionType.Footer} isScrollSynced={true}>
                                                    {defaultRender(detailsFooterProps)}
                                                </Sticky>
                                            )}
                                    />
                                </ScrollablePane>
                            </div>
                        </Stack>
                    </Stack>
                </Stack.Item>
                <Stack.Item>
                    <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                        <Stack styles={{ root: { height: 30 } }}>
                            <ChoiceGroup
                                defaultSelectedKey="ALL"
                                options={[
                                    {
                                        key: 'ALL',
                                        text: '全部',
                                        styles: {
                                            root: {
                                                width: 100,
                                                float: "left",
                                                marginTop: 0
                                            }
                                        }
                                    },
                                    {
                                        key: 'LONG',
                                        text: '做多记录',
                                        styles: {
                                            root: {
                                                width: 100,
                                                float: "left",
                                                marginTop: 0
                                            }
                                        }
                                    },
                                    {
                                        key: 'SHORT',
                                        text: '做空记录',
                                        styles: {
                                            root: {
                                                width: 100,
                                                float: "left",
                                                marginTop: 0
                                            }
                                        }
                                    }
                                ]}

                                onChange={(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
                                    if (option) {
                                        this.setState({ "directionChoice": option.key })
                                    }
                                }}
                            />
                        </Stack>
                        <Stack styles={{ root: { height: 30 } }}>
                            <Checkbox label="合并显示" styles={{ root: { marginTop: 3 } }} onChange={(event: any) => {
                                this.setState({ "showMerged": event.currentTarget.checked })
                            }} />
                        </Stack>
                    </Stack>
                </Stack.Item>

            </Stack>

        );
    }



}

export default withRouter(TradeDetailsPage)
