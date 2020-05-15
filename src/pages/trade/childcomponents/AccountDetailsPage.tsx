import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { withRouter } from 'react-router';
import { mergeStyleSets, FontSizes } from 'office-ui-fabric-react/lib/Styling';
import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { DetailsList, DetailsListLayoutMode, Selection, IDetailsHeaderProps, IColumn, IDetailsFooterProps, ConstrainMode, DetailsHeader } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { IRenderFunction, SelectionMode } from 'office-ui-fabric-react/lib/Utilities';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { numberFormat } from '../../../utils';
import { TooltipHost, TooltipDelay, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { xyz } from "../../../node/pb/pb";

const { CurrencyEnum } = xyz.redtorch.pb

@inject('authenticationStore', 'tradeAccountStore', 'tradePositionStore')
@observer
export class AccountDetailsPage extends React.Component<any> {

    public componentDidMount = () => {
        const { tradeAccountStore } = this.props;
        tradeAccountStore.setSelectedAccountIdSet(new Set());
    }

    public render() {

        const { tradeAccountStore, tradePositionStore } = this.props;

        const {
            allBalance,
            allPreBalance,
            allCloseProfit,
            allTodayProfit,
            allPositionProfit,
            allMargin,
            allCommission,
            allDepositAndWithdraw
        } = tradeAccountStore.summaryMap.get("CNY")

        const {
            allContractValue,
            allOpenPositionProfit
        } = tradePositionStore.summaryMap.get("CNY")

        let accountList: any[] = []
        if (tradeAccountStore.accountList) {
            accountList = tradeAccountStore.accountList
        }

        const handleAccountSelectionChange = (pAccountSelection: Selection) => {
            const selectedAccountIdSet = new Set();

            const selectionList: any[] = pAccountSelection.getSelection();
            const selectionListLength = selectionList.length
            for (let i = 0; i < selectionListLength; i++) {
                selectedAccountIdSet.add(selectionList[i].accountId);
            }

            tradeAccountStore.setSelectedAccountIdSet(selectedAccountIdSet);
        }

        const accountSelection: Selection = new Selection({
            onSelectionChanged: () => {
                handleAccountSelectionChange(accountSelection)
            }
        });


        const { componentHeight } = this.props;
        const classNames = mergeStyleSets({
            wrapper: {
                height: `${componentHeight - 71}px`,
                position: 'relative',
                maxHeight: 'inherit',
                borderBottom: "1px solid #666666",
            }
        });

        const columns: IColumn[] = [{
            key: "code",
            name: "账户代码",
            minWidth: 70,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                const labelStyls: React.CSSProperties = { display: 'inline-block', width: 55, textAlign: "right", color: '#999', paddingRight: 3 }
                return (
                    <TooltipHost
                        calloutProps={{ gapSpace: 20 }}
                        tooltipProps={{
                            onRenderContent: () => {                                                  
                                return (
                                    <div>
                                        <ul style={{ margin: 0, padding: 0 }}>
                                            <li><span style={labelStyls}>网关ID:</span><span>{item.gatewayId}</span></li>
                                        </ul>
                                    </div>
                                );
                            }
                        }}
                        delay={TooltipDelay.long}
                        directionalHint={DirectionalHint.bottomCenter}
                    >
                        <span>{item.code}</span>
                    </TooltipHost>
                );
            }
        }, {
            key: "holder",
            name: "持有人",
            minWidth: 60,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                return (
                    <span>{item.holder}</span>
                );
            }
        },
        {
            key: "currency",
            name: "币种",
            minWidth: 40,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                return (
                    <span>{CurrencyEnum[item.currency]}</span>
                );
            }
        }, {
            key: "balance",
            name: "权益",
            minWidth: 90,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                let styleClasses = ""
                const todayProfit = item.balance - item.preBalance + item.withdraw - item.deposit;
                if (todayProfit !== 0) {
                    if (todayProfit > 0) {
                        styleClasses = "trade-long-color"
                    } else {
                        styleClasses = "trade-short-color"
                    }
                }
                return (
                    <span className={styleClasses}>{numberFormat(item.balance, 2, true)}</span>
                );
            }
        }, {
            key: "available",
            name: "可用",
            minWidth: 90,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{numberFormat(item.available, 2, true)}</span>
                );
            }
        }, {
            key: "marginRate",
            name: "使用率",
            minWidth: 50,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                let marginRate = "0.00";
                if (item.margin && item.balance && item.balance !== 0) {
                    marginRate = numberFormat(item.margin / item.balance * 100, 2, true)
                }

                return (
                    <span>{marginRate}%</span>
                );
            }
        }, {
            key: "todayProfit",
            name: "今日盈亏",
            minWidth: 95,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                const todayProfit = (item.balance - item.preBalance + item.withdraw - item.deposit);
                let styleClasses = "";
                if (todayProfit && todayProfit !== 0) {
                    if (todayProfit > 0) {
                        styleClasses = "trade-long-color"
                    } else {
                        styleClasses = "trade-short-color"
                    }
                }

                return (
                    <div><span className={styleClasses} >{numberFormat(todayProfit, 2, true)}</span>  ({numberFormat(todayProfit / item.preBalance * 100, 2, true)}%)</div>
                );
            }
        }, {
            key: "closeProfit",
            name: "平仓盈亏",
            minWidth: 90,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                let styleClasses = ""
                if (item.closeProfit !== 0) {
                    if (item.closeProfit > 0) {
                        styleClasses = "trade-long-color"
                    } else {
                        styleClasses = "trade-short-color"
                    }
                }

                return (
                    <span className={styleClasses} >{numberFormat(item.closeProfit, 2, true)}</span>
                );
            }
        }, {
            key: "positionProfit",
            name: "持仓盈亏",
            minWidth: 90,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                let styleClasses = ""
                if (item.positionProfit !== 0) {
                    if (item.positionProfit > 0) {
                        styleClasses = "trade-long-color"
                    } else {
                        styleClasses = "trade-short-color"
                    }
                }
                return (
                    <span className={styleClasses}>{numberFormat(item.positionProfit, 2, true)}</span>
                );
            }
        }, {
            key: "margin",
            name: "保证金",
            minWidth: 90,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{numberFormat(item.margin, 2, true)}</span>
                );
            }
        }, {
            key: "preBalance",
            name: "昨日权益",
            minWidth: 90,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{numberFormat(item.preBalance, 2, true)}</span>
                );
            }
        }, {
            key: "commission",
            name: "佣金",
            minWidth: 60,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{numberFormat(item.commission, 2, true)}</span>
                );
            }
        }, {
            key: "deposit",
            name: "入金",
            minWidth: 90,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{numberFormat(item.deposit, 2, true)}</span>
                );
            }
        }, {
            key: "withdraw",
            name: "出金",
            minWidth: 90,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{numberFormat(item.withdraw, 2, true)}</span>
                );
            }
        }

        ]

        return (
            <Stack styles={{ root: { width: "100%" } }}>
                <Stack.Item>
                    <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                        <Stack tokens={{ childrenGap: 2 }} styles={{ root: { width: "100%", height: 69, borderBottom: "1px solid #666666", paddingTop: 2, fontSize: FontSizes.xSmall } }}>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap", textAlign: "right" } }}>
                                        今日盈亏(率)：
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap" } }}>
                                        {
                                            allTodayProfit > 0 ?
                                                <span className="trade-long-color">{numberFormat(allTodayProfit, 2, true)} ({numberFormat(allTodayProfit / allPreBalance * 100, 2, true)}%)</span> : null
                                        }
                                        {
                                            allTodayProfit < 0 ?
                                                <span className="trade-short-color">{numberFormat(allTodayProfit, 2, true)} ({numberFormat(allTodayProfit / allPreBalance * 100, 2, true)}%)</span> : null
                                        }
                                        {
                                            allTodayProfit === 0 ?
                                                <span>{numberFormat(allTodayProfit, 2, true)} ({numberFormat(allTodayProfit / allPreBalance * 100, 2, true)}%)</span> : null
                                        }
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap", textAlign: "right", borderLeft: "1px solid #666666" } }}>
                                        盯市持仓盈亏：
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap" } }}>
                                        {
                                            allPositionProfit > 0 ?
                                                <span className="trade-long-color">{numberFormat(allPositionProfit, 2, true)}</span> : null
                                        }
                                        {
                                            allPositionProfit < 0 ?
                                                <span className="trade-short-color">{numberFormat(allPositionProfit, 2, true)}</span> : null
                                        }
                                        {
                                            allPositionProfit === 0 ?
                                                <span>{numberFormat(allPositionProfit, 2, true)}</span> : null
                                        }
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap", textAlign: "right", borderLeft: "1px solid #666666" } }}>
                                        盯市平仓盈亏：
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap" } }}>
                                        {
                                            allCloseProfit > 0 ?
                                                <span className="trade-long-color">{numberFormat(allCloseProfit, 2, true)}</span> : null
                                        }
                                        {
                                            allCloseProfit < 0 ?
                                                <span className="trade-short-color">{numberFormat(allCloseProfit, 2, true)}</span> : null
                                        }
                                        {
                                            allCloseProfit === 0 ?
                                                <span>{numberFormat(allCloseProfit, 2, true)}</span> : null
                                        }
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>

                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap", textAlign: "right" } }}>
                                        资金：
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap" } }}>
                                        {
                                            allTodayProfit > 0 ?
                                                <span className="trade-long-color">{numberFormat(allBalance, 2, true)}</span> : null
                                        }
                                        {
                                            allTodayProfit < 0 ?
                                                <span className="trade-short-color">{numberFormat(allBalance, 2, true)}</span> : null
                                        }
                                        {
                                            allTodayProfit === 0 ?
                                                <span>{numberFormat(allBalance, 2, true)}</span> : null
                                        }
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap", textAlign: "right", borderLeft: "1px solid #666666" } }}>
                                        保证金(率)：
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap" } }}>
                                        {numberFormat(allMargin, 2, true)} ({numberFormat(allMargin / allBalance * 100, 2, true)}%)
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap", textAlign: "right", borderLeft: "1px solid #666666" } }}>
                                        合约价值：
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap" } }}>
                                        {numberFormat(allContractValue, 2, true)}
                                    </Stack>
                                </Stack>
                            </Stack.Item>

                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap", textAlign: "right" } }}>
                                        持仓盈亏：
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap" } }}>
                                        {
                                            allOpenPositionProfit > 0 ?
                                                <span className="trade-long-color">{numberFormat(allOpenPositionProfit, 2, true)}</span> : null
                                        }
                                        {
                                            allOpenPositionProfit < 0 ?
                                                <span className="trade-short-color">{numberFormat(allOpenPositionProfit, 2, true)}</span> : null
                                        }
                                        {
                                            allOpenPositionProfit === 0 ?
                                                <span>{numberFormat(allOpenPositionProfit, 2, true)}</span> : null
                                        }
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap", textAlign: "right", borderLeft: "1px solid #666666" } }}>
                                        佣金：
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap" } }}>
                                        {numberFormat(allCommission, 2, true)}
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap", textAlign: "right", borderLeft: "1px solid #666666" } }}>
                                        出入金：
                                    </Stack>
                                    <Stack styles={{ root: { width: "16%", whiteSpace: "nowrap" } }}>
                                        {numberFormat(allDepositAndWithdraw, 2, true)}
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                        </Stack>
                    </Stack>
                </Stack.Item>
                <Stack.Item>
                    <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                        <Stack styles={{ root: { width: "100%" } }}>
                            <div className={classNames.wrapper}>
                                <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                                    <MarqueeSelection selection={accountSelection}>
                                        <DetailsList
                                            items={accountList}
                                            compact={true}
                                            columns={columns}
                                            selectionMode={SelectionMode.multiple}
                                            setKey="accountId"
                                            layoutMode={DetailsListLayoutMode.fixedColumns}
                                            constrainMode={ConstrainMode.unconstrained}
                                            selection={accountSelection}
                                            selectionPreservedOnEmptyClick={true}
                               

                                            // data-is-scrollable={true}
                                            onRenderDetailsHeader={
                                                // tslint:disable-next-line:jsx-no-lambda
                                                (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                                                    <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
                                                        <DetailsHeader
                                                            {...detailsHeaderProps}
                                                            styles={{root:{paddingTop:0,height:24,lineHeight:24},check:{height:"24px !important"},cellIsCheck:{height:24}}}
                                                            // onRenderDetailsCheckbox={
                                                            //     ()=> {
                                                            //         const styles = {
                                                            //             checkbox: {
                                                            //                 width: "16px",
                                                            //                 height: "16px"
                                                            //             }
                                                            //         }
                                                            //         return <Checkbox styles={styles}/>
                                                            //     }
                                                            // }
                                                        />
                                                        {/* {defaultRender(detailsHeaderProps)} */}
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
                                    </MarqueeSelection>
                                </ScrollablePane>
                            </div>
                        </Stack>
                    </Stack>
                </Stack.Item>

            </Stack>

        );
    }



}

export default withRouter(AccountDetailsPage)
