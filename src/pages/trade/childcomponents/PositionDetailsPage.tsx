import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { withRouter } from 'react-router';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { DetailsList, DetailsListLayoutMode, ConstrainMode, IDetailsHeaderProps, IDetailsFooterProps, SelectionMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { IRenderFunction } from 'office-ui-fabric-react/lib/Utilities';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { numberFormat, deepCopy } from '../../../utils';
import { TooltipHost, TooltipDelay, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import * as uuidv4 from 'uuid/v4'
import { isNumber } from 'util';
import { xyz } from "../../../node/pb/pb";

const { DirectionEnum, ExchangeEnum, ProductTypeEnum, CurrencyEnum, GatewayAdapterTypeEnum, GatewayTypeEnum } = xyz.redtorch.pb


const tableLabelStyls: React.CSSProperties = { display: 'inline-block', width: 27, textAlign: "right", color: '#999', paddingRight: 3 }

@inject('authenticationStore', "tradeAccountStore", "tradePositionStore", "tradeActionStore")
@observer
export class PositionDetailsPage extends React.Component<any> {

    public state = { showMerged: false, showEmpty: true };

    public render() {

        const { componentHeight, tradePositionStore, tradeAccountStore, tradeActionStore } = this.props;

        const { accountMap } = tradeAccountStore;
        const { selectedContract } = tradeActionStore;

        let positionList: any[] = []
        const tradePositionStorePositionList = tradePositionStore.positionList
        const tradePositionStorePositionListLength = tradePositionStorePositionList.length

        for (let i = 0; i < tradePositionStorePositionListLength; i++) {
            const position = tradePositionStorePositionList[i]
            if (tradeAccountStore.selectedAccountIdSet.has(position.accountId)) {
                if (position.position !== 0 || this.state.showEmpty) {
                    positionList.push(position)
                }
            }
        }

        if (this.state.showMerged) {
            const mergedPositionMap = new Map();

            const positionListLength = positionList.length
            for (let i = 0; i < positionListLength; i++) {
                const position = positionList[i]
                try {
                    const tmpKey = `${position.contract.unifiedSymbol}@${position.direction}`
                    let tmpPosition;
                    if (mergedPositionMap.has(tmpKey)) {
                        tmpPosition = mergedPositionMap.get(tmpKey)
                        tmpPosition.contractValue += position.contractValue
                        tmpPosition.exchangeMargin += position.exchangeMargin
                        tmpPosition.frozen += position.frozen
                        tmpPosition.openPositionProfit += position.openPositionProfit
                        tmpPosition.position += position.position
                        tmpPosition.positionProfit += position.positionProfit
                        tmpPosition.tdFrozen += position.tdFrozen
                        tmpPosition.tdPosition += position.tdPosition
                        tmpPosition.useMargin += position.useMargin
                        tmpPosition.ydFrozen += position.ydFrozen
                        tmpPosition.ydPosition += position.ydPosition
                    } else {
                        const tmpGateway = {
                            description: "",
                            gatewayAdapterType: "",
                            gatewayId: "",
                            gatewayType: "",
                            name: "",
                            status: "",
                        }

                        tmpPosition = {
                            accountId: "",
                            contract: deepCopy(position.contract),
                            contractValue: position.contractValue,
                            direction: position.direction,
                            exchangeMargin: position.exchangeMargin,
                            frozen: position.frozen,
                            gateway: tmpGateway,
                            lastPrice: position.lastPrice,
                            openPositionProfit: position.openPositionProfit,
                            openPositionProfitRatio: 0,
                            openPrice: 0,
                            openPriceDiff: 0,
                            position: position.position,
                            positionId: uuidv4().replace("-", ""),
                            positionProfit: position.positionProfit,
                            positionProfitRatio: 0,
                            price: 0,
                            priceDiff: 0,
                            tdFrozen: position.tdFrozen,
                            tdPosition: position.tdPosition,
                            useMargin: position.useMargin,
                            ydFrozen: position.ydFrozen,
                            ydPosition: position.ydPosition,
                        }


                        tmpPosition.contract.gateway = tmpGateway;
                        // tmpPosition.contract.contractId = ""

                    }

                    if (isNumber(position.useMargin) && position.useMargin !== 0) {
                        tmpPosition.positionProfitRatio = position.positionProfit / position.useMargin;
                        tmpPosition.openPositionProfitRatio = position.openPositionProfit / position.useMargin;
                    }

                    mergedPositionMap.set(tmpKey, tmpPosition)
                } catch (error) {
                    console.error("合并计算仓位错误", error)
                }

            }
            // positionList = Array.from(mergedPositionMap.values())
            positionList = [...mergedPositionMap.values()]
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
                } else if (item.direction === "NET") {
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
            key: "position",
            name: "持仓",
            minWidth: 75,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                if (item.direction === DirectionEnum.LONG) {
                    return (
                        <div>
                            <div><span style={tableLabelStyls}>持仓:</span><span className="trade-long-color">{item.position}</span></div>
                            <div><span style={tableLabelStyls}>冻结:</span><span>{item.frozen}</span></div>
                        </div>
                    );
                } else if (item.direction === DirectionEnum.SHORT) {
                    return (
                        <div>
                            <div><span style={tableLabelStyls}>持仓:</span><span className="trade-short-color">{item.position}</span></div>
                            <div><span style={tableLabelStyls}>冻结:</span><span>{item.frozen}</span></div>
                        </div>
                    );
                } else if (item.direction === DirectionEnum.NET) {
                    if (item.position > 0) {
                        return (
                            <div>
                                <div><span style={tableLabelStyls}>持仓:</span><span className="trade-long-color">{item.position}</span></div>
                                <div><span style={tableLabelStyls}>冻结:</span><span>{item.frozen}</span></div>
                            </div>
                        );
                    } else if (item.position < 0) {
                        return (
                            <div>
                                <div><span style={tableLabelStyls}>持仓:</span><span className="trade-short-color">{item.position}</span></div>
                                <div><span style={tableLabelStyls}>冻结:</span><span>{item.frozen}</span></div>
                            </div>
                        );
                    }
                }
                return (
                    <div>
                        <div><span style={tableLabelStyls}>持仓:</span><span>{item.position}</span></div>
                        <div><span style={tableLabelStyls}>冻结:</span><span>{item.frozen}</span></div>
                    </div>
                );
            }
        },
        {
            key: "tdPosition",
            name: "今仓",
            minWidth: 75,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <div>
                        <div><span style={tableLabelStyls}>持仓:</span><span>{item.tdPosition}</span></div>
                        <div><span style={tableLabelStyls}>冻结:</span><span>{item.tdFrozen}</span></div>
                    </div>
                );
            }
        }, {
            key: "action",
            name: "操作",
            minWidth: 30,
            isResizable: true,
            isCollapsible: true,
            onRender: (item) => {
                if (this.state.showMerged) {
                    return <span />
                }
                return (
                    <IconButton
                        menuIconProps={{ iconName: 'MoreVertical' }}
                        role="button"
                        aria-haspopup={true}
                        aria-label="Show actions"
                        styles={{ root: { float: 'right', height: 'inherit' } }}
                        menuProps={{
                            items: [
                                {
                                    key: 'CLOSE',
                                    text: '对价平仓(开发中)',
                                    disabled: true,
                                    iconProps: {
                                        iconName: "Blocked2"
                                    },
                                    onClick: () => { console.log("close") }
                                },
                                {
                                    key: 'CLOSE_TODAY',
                                    text: '对价平今仓(开发中)',
                                    disabled: true,
                                    iconProps: {
                                        iconName: "Blocked2"
                                    },
                                    onClick: () => { console.log("closeToday") }
                                },
                                {
                                    key: 'CLOSE_YESTERDAY',
                                    text: '对价平昨仓(开发中)',
                                    disabled: true,
                                    iconProps: {
                                        iconName: "Blocked2"
                                    },
                                    onClick: () => { console.log("closeYesterday") }
                                }, {
                                    key: 'LOCK',
                                    text: '对价锁仓(开发中)',
                                    disabled: true,
                                    iconProps: {
                                        iconName: "Lock"
                                    },
                                    onClick: () => { console.log("lock") }
                                },

                            ]
                        }}
                    />
                );
            }
        }, {
            key: "price",
            name: "均价",
            minWidth: 90,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                let decimalsLen = 4;
                try {
                    const prictTickStringArray = item.contract.priceTick.toString().split(".")
                    if (prictTickStringArray.length === 1) {
                        decimalsLen = 0
                    } else {
                        decimalsLen = [1].length
                    }
                } catch (error) {
                    console.log("均价获取合约小数点位数错误", error)
                }
                return (
                    <div>
                        <div><span style={tableLabelStyls}>持仓:</span><span>{numberFormat(item.price, decimalsLen)}</span></div>
                        <div><span style={tableLabelStyls}>开仓:</span><span>{numberFormat(item.openPrice, decimalsLen)}</span></div>
                    </div>
                );
            }
        }, {
            key: "priceDiff",
            name: "盈利价差",
            minWidth: 70,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <div>
                        <div><span style={tableLabelStyls}>持仓:</span><span>{numberFormat(item.priceDiff, 4)}</span></div>
                        <div><span style={tableLabelStyls}>开仓:</span><span>{numberFormat(item.openPriceDiff, 4)}</span></div>
                    </div>
                );
            }
        }, {
            key: "openPositionProfit",
            name: "逐笔浮盈",
            minWidth: 80,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                if (item.openPositionProfit > 0) {
                    return (
                        <div className="trade-long-color">
                            <div><span>{numberFormat(item.openPositionProfit, 2, true)}</span></div>
                            <div><span>{numberFormat(item.openPositionProfitRatio * 100, 2, true)}%</span></div>
                        </div>
                    )
                } else if (item.openPositionProfit < 0) {
                    return (
                        <div className="trade-short-color">
                            <div><span>{numberFormat(item.openPositionProfit, 2, true)}</span></div>
                            <div><span>{numberFormat(item.openPositionProfitRatio * 100, 2, true)}%</span></div>
                        </div>
                    )
                }
                return (
                    <div>
                        <div><span>{numberFormat(item.openPositionProfit, 2, true)}</span></div>
                        <div><span>{numberFormat(item.openPositionProfitRatio * 100, 2, true)}%</span></div>
                    </div>
                );
            }
        }, {
            key: "positionProfit",
            name: "盯市浮盈",
            minWidth: 80,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                if (item.positionProfit > 0) {
                    return (
                        <div className="trade-long-color">
                            <div><span>{numberFormat(item.positionProfit, 2, true)}</span></div>
                            <div><span>{numberFormat(item.positionProfitRatio * 100, 2, true)}%</span></div>
                        </div>
                    )
                } else if (item.positionProfit < 0) {
                    return (
                        <div className="trade-short-color">
                            <div><span>{numberFormat(item.positionProfit, 2, true)}</span></div>
                            <div><span>{numberFormat(item.positionProfitRatio * 100, 2, true)}%</span></div>
                        </div>
                    )
                }
                return (
                    <div>
                        <div><span>{numberFormat(item.positionProfit, 2, true)}</span></div>
                        <div><span>{numberFormat(item.positionProfitRatio * 100, 2, true)}%</span></div>
                    </div>
                );
            }
        }, {
            key: "marginRatio",
            name: "资金占比",
            minWidth: 60,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                let marginRatio = "无效值"

                try {
                    if (this.state.showMerged) {
                        const {
                            allBalance
                        } = tradeAccountStore.summaryMap.get("CNY")

                        marginRatio = numberFormat(item.useMargin / allBalance * 100, 2, true) + "%"
                    } else {
                        const account = accountMap.get(item.accountId)
                        if (account) {
                            marginRatio = numberFormat(item.useMargin / account.balance * 100, 2, true) + "%"
                        } else {
                            console.info("账户不存在,无法计算资金占比")
                        }
                    }

                } catch (error) {
                    console.log("计算保证金占比错误", error)
                }


                return (
                    <div>
                        {marginRatio}
                    </div>
                );
            }
        }, {
            key: "margin",
            name: "保证金",
            minWidth: 100,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <div>
                        <div><span style={{ ...tableLabelStyls, width: 40 }}>经纪商:</span><span>{numberFormat(item.useMargin, 2, true)}</span></div>
                        <div><span style={{ ...tableLabelStyls, width: 40 }}>交易所:</span><span>{numberFormat(item.exchangeMargin, 2, true)}</span></div>
                    </div>
                );
            }
        }, {
            key: "contractValue",
            name: "合约价值",
            minWidth: 100,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{numberFormat(item.contractValue, 2, true)}</span>
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
        },

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
                                        items={positionList}
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
                                    // onItemInvoked={
                                    //     (item: any, index: number | undefined): void => {
                                    //         alert(`Item ${item.positionId} at index ${index} has been invoked.`);
                                    //       }
                                    // }

                                    />
                                </ScrollablePane>
                            </div>
                        </Stack>
                    </Stack>
                </Stack.Item>
                <Stack.Item>
                    <Stack horizontal={true} tokens={{ childrenGap: 5 }} styles={{ root: { width: '100%' } }}>
                        <Stack styles={{ root: { height: 30 } }}>
                            <Checkbox label="合并显示" styles={{ root: { marginTop: 3 } }} onChange={(event: any) => {
                                this.setState({ "showMerged": event.currentTarget.checked })
                            }} />
                        </Stack>
                        <Stack styles={{ root: { height: 30 } }}>
                            <Checkbox label="显示空仓" styles={{ root: { marginTop: 3 } }} checked={this.state.showEmpty} onChange={(event: any) => {
                                this.setState({ "showEmpty": event.currentTarget.checked })
                            }} />
                        </Stack>
                    </Stack>
                </Stack.Item>

            </Stack>

        );
    }



}

export default withRouter(PositionDetailsPage)

