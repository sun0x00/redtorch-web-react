import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { withRouter } from 'react-router';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { DetailsList, DetailsListLayoutMode, ConstrainMode, IDetailsHeaderProps, IDetailsFooterProps, SelectionMode, IColumn, DetailsHeader } from 'office-ui-fabric-react/lib/DetailsList';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { IRenderFunction } from 'office-ui-fabric-react/lib/Utilities';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { TooltipHost, TooltipDelay, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { xyz } from "../../../node/pb/pb";

const { OrderStatusEnum, DirectionEnum, OffsetFlagEnum, TimeConditionEnum, ProductClassEnum, ExchangeEnum, CurrencyEnum, OrderPriceTypeEnum, HedgeFlagEnum, VolumeConditionEnum, ContingentConditionEnum} = xyz.redtorch.pb


const tableLabelStyls: React.CSSProperties = { display: 'inline-block', width: 27, textAlign: "right", color: '#999', paddingRight: 3 }

@inject('authenticationStore', "tradeOrderStore", "tradeAccountStore", "tradeActionStore")
@observer
export class OrderDetailsPage extends React.Component<any> {

    public state = { statusChoice: 'ALL', showRejected: false };

    public render() {

        const { componentHeight, tradeOrderStore, tradeAccountStore, tradeActionStore } = this.props;

        const { accountMap } = tradeAccountStore;
        const { selectedContract } = tradeActionStore;

        const orderList: any[] = []
        const tradeAccountStoreOrderList = tradeOrderStore.orderList
        const tradeAccountStoreOrderListLength = tradeAccountStoreOrderList.length

        for (let i = 0; i < tradeAccountStoreOrderListLength; i++) {
            const order = tradeAccountStoreOrderList[i]

            if (tradeAccountStore.selectedAccountIdSet.has(order.accountId)) {
                if (this.state.statusChoice === "ALL"
                    || (order.orderStatus !== OrderStatusEnum.OS_AllTraded && order.orderStatus !== OrderStatusEnum.OS_Canceled && order.orderStatus !== OrderStatusEnum.OS_Rejected && this.state.statusChoice === "CANCELABLE")
                    || (order.orderStatus === OrderStatusEnum.OS_Canceled && this.state.statusChoice === "CANCELLED")
                ) {
                    if ((order.orderStatus === OrderStatusEnum.OS_Rejected && this.state.showRejected)
                        || order.orderStatus !== OrderStatusEnum.OS_Rejected
                    ) {
                        orderList.push(order)
                    }
                }
            }
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
                                                <li><span style={tooltipLabelStyls}>简称:</span><span>{item.contract.name}</span></li>
                                                <li><span style={tooltipLabelStyls}>完整名称:</span><span>{item.contract.fullName}</span></li>
                                                <li><span style={tooltipLabelStyls}>交易所:</span><span>{ExchangeEnum[item.contract.exchange]}</span></li>
                                                <li><span style={tooltipLabelStyls}>产品类型:</span><span>{ProductClassEnum[item.contract.productClass]}</span></li>
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
                                <div>{item.contract.name}</div>
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
                if (item.direction === DirectionEnum.D_Buy) {
                    return (
                        <span className="trade-long-color">多</span>
                    );
                } else if (item.direction === DirectionEnum.D_Sell) {
                    return (
                        <span className="trade-short-color">空</span>
                    );
                } else {
                    return (
                        <span>{item.direction}</span>
                    );
                }
            }
        }, {
            key: "offsetFlag",
            name: "开平",
            minWidth: 30,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                if (item.offsetFlag === OffsetFlagEnum.OF_Open) {
                    return (
                        <span>开仓</span>
                    );
                } else if (item.offsetFlag === OffsetFlagEnum.OF_Close) {
                    return (
                        <span>平仓</span>
                    );
                } else if (item.offsetFlag === OffsetFlagEnum.OF_CloseYesterday) {
                    return (
                        <span>平昨</span>
                    );
                } else if (item.offsetFlag === OffsetFlagEnum.OF_CloseToday) {
                    return (
                        <span>平今</span>
                    );
                } else if (item.offsetFlag === OffsetFlagEnum.OF_Unkonwn) {
                    return (
                        <span>未知</span>
                    );
                } else {
                    return (
                        <span>{item.offsetFlag} </span>
                    );
                }
            }
        }, {
            key: "hedgeFlag",
            name: "投机套保",
            minWidth: 50,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                if (item.hedgeFlag === HedgeFlagEnum.HF_Speculation) {
                    return (
                        <span>投机</span>
                    );
                } else if (item.hedgeFlag === HedgeFlagEnum.HF_Arbitrage) {
                    return (
                        <span>套利</span>
                    );
                } else if (item.hedgeFlag === HedgeFlagEnum.HF_Hedge) {
                    return (
                        <span>套保</span>
                    );
                }  else if (item.hedgeFlag === HedgeFlagEnum.HF_MarketMaker) {
                    return (
                        <span>做市商</span>
                    );
                } else if (item.hedgeFlag === HedgeFlagEnum.HF_HedgeSpec) {
                    return (
                        <span>第一条腿套保第二条腿投机 大商所专用</span>
                    );
                } else if (item.hedgeFlag === HedgeFlagEnum.HF_SpecHedge) {
                    return (
                        <span>第一条腿投机第二条腿套保 大商所专用</span>
                    );
                } else if (item.hedgeFlag === HedgeFlagEnum.HF_Unknown) {
                    return (
                        <span>未知</span>
                    );
                } else {
                    return (
                        <span>{item.hedgeFlag}</span>
                    );
                }
            }
        }, {
            key: "orderPriceType",
            name: "价格类型",
            minWidth: 50,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                if (item.orderPriceType === OrderPriceTypeEnum.OPT_LimitPrice) {
                    return (
                        <span>限价</span>
                    );
                } else if (item.orderPriceType === OrderPriceTypeEnum.OPT_AnyPrice) {
                    return (
                        <span>市价</span>
                    );
                } else if (item.orderPriceType === OrderPriceTypeEnum.OPT_BestPrice) {
                    return (
                        <span>最优价</span>
                    );
                }  else if (item.orderPriceType === OrderPriceTypeEnum.OPT_LastPrice) {
                    return (
                        <span>最新价</span>
                    );
                } else if (item.orderPriceType === OrderPriceTypeEnum.OPT_LastPricePlusOneTicks) {
                    return (
                        <span>新价浮动上浮1个ticks</span>
                    );
                } else if (item.orderPriceType === OrderPriceTypeEnum.OPT_LastPricePlusThreeTicks) {
                    return (
                        <span>新价浮动上浮3个ticks</span>
                    );
                } else if (item.orderPriceType === OrderPriceTypeEnum.OPT_Unknown) {
                    return (
                        <span>未知</span>
                    );
                } else {
                    return (
                        <span>{item.orderPriceType}</span>
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
            minWidth: 75,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <div>
                        <div><span style={tableLabelStyls}>总量:</span><span className="trade-info-color">{item.totalVolume}</span></div>
                        <div><span style={tableLabelStyls}>成交:</span><span className="trade-info-color">{item.tradedVolume}</span></div>
                    </div>
                );
            }
        },
        {
            key: "action",
            name: "操作",
            minWidth: 30,
            isResizable: true,
            isCollapsible: true,
            onRender: (item) => {
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
                                    key: 'cancel',
                                    text: '撤销',
                                    iconProps: {
                                        iconName: "RevToggleKey"
                                    },
                                    onClick: () => {
                                        tradeActionStore.cancelOrder(item.orderId)
                                    }
                                },

                                {
                                    key: 'followUpWithActivePrice',
                                    text: '对价追(开发中)',
                                    disabled: true,
                                    iconProps: {
                                        iconName: "DoubleChevronRight8"
                                    },
                                    onClick: () => {
                                        console.error("对价追")
                                    }
                                }
                            ]
                        }}
                    />
                );
            }
        }, {
            key: "status",
            name: "状态",
            minWidth: 60,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                if (item.orderStatus === OrderStatusEnum.OS_AllTraded) {
                    return (
                        <span>全部成交</span>
                    );
                } else if (item.orderStatus === OrderStatusEnum.OS_Canceled) {
                    return (
                        <span>已撤销</span>
                    );
                } else if (item.orderStatus === OrderStatusEnum.OS_Rejected) {
                    return (
                        <span>已拒绝</span>
                    );
                } else if (item.orderStatus === OrderStatusEnum.OS_PartTradedQueueing) {
                    return (
                        <span className="trade-remind-color">部分成交还在队列中</span>
                    );
                } else if (item.orderStatus === OrderStatusEnum.OS_PartTradedNotQueueing) {
                    return (
                        <span className="trade-remind-color">部分成交不在队列中</span>
                    );
                } else if (item.orderStatus === OrderStatusEnum.OS_NoTradeQueueing) {
                    return (
                        <span className="trade-remind-color">未成交还在队列中</span>
                    );
                } else if (item.orderStatus === OrderStatusEnum.OS_NoTradeNotQueueing) {
                    return (
                        <span className="trade-remind-color">未成交不在队列中</span>
                    );
                } else if (item.orderStatus === OrderStatusEnum.OS_Touched) {
                    return (
                        <span>已触发</span>
                    );
                } else if (item.orderStatus === OrderStatusEnum.OS_NotTouched) {
                    return (
                        <span className="trade-remind-color">尚未触发</span>
                    );
                } else if (item.orderStatus === OrderStatusEnum.OS_Unknown) {
                    return (
                        <span>未知</span>
                    );
                } else {
                    return (
                        <span className="trade-remind-color">{item.orderStatus}</span>
                    );
                }
            }
        }, {
            key: "statusMsg",
            name: "状态信息",
            minWidth: 80,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                return (
                    <span>{item.statusMsg}</span>
                );
            }
        },
        {
            key: "time",
            name: "时间",
            minWidth: 70,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                return (
                    <div>
                        <div>{item.orderDate}</div>
                        <div>{item.orderTime}</div>
                    </div>
                );
            }
        },
        {
            key: "timeCondition",
            name: "时效",
            minWidth: 60,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {

                if (item.timeCondition === TimeConditionEnum.TC_GTC) {
                    return (
                        <div>
                            <div>撤销前有效(GTC)</div>
                        </div>
                    );
                }

                if (item.timeCondition === TimeConditionEnum.TC_GFD) {
                    return (
                        <div>
                            <div>当日有效(GFD)</div>
                        </div>
                    );
                }

                if (item.timeCondition === TimeConditionEnum.TC_GFA) {
                    return (
                        <div>
                            <div>集合竞价有效(GFA)</div>
                        </div>
                    );
                }

                
                if (item.timeCondition === TimeConditionEnum.TC_GFS) {
                    return (
                        <div>
                            <div>本节有效(GFS)</div>
                        </div>
                    );
                }

                
                if (item.timeCondition === TimeConditionEnum.TC_GTD) {
                    return (
                        <div>
                            <div>指定日期前有效(GTD)</div>
                        </div>
                    );
                }

                if (item.timeCondition === TimeConditionEnum.TC_IOC) {
                    return (
                        <div>
                            <div>立即完成，否则撤销(IOC)</div>
                        </div>
                    );
                }

                if (item.timeCondition === TimeConditionEnum.TC_Unkonwn) {
                    return (
                        <div>
                            <div>未知</div>
                        </div>
                    );
                }

                return (
                    <div>
                        <div>{item.timeCondition}</div>
                    </div>
                );
            }
        }, {
            key: "volumeCondition",
            name: "成交量类型",
            minWidth: 60,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                if (item.volumeCondition === VolumeConditionEnum.VC_AV) {
                    return (
                        <span>任何数量</span>
                    );
                } else if (item.volumeCondition === VolumeConditionEnum.VC_MV) {
                    return (
                        <span>最小数量</span>
                    );
                } else if (item.volumeCondition === VolumeConditionEnum.VC_CV) {
                    return (
                        <span>全部数量</span>
                    );
                } else if (item.volumeCondition === VolumeConditionEnum.VC_Unkonwn) {
                    return (
                        <span>未知</span>
                    );
                }  else {
                    return (
                        <span>{item.volumeCondition}</span>
                    );
                }
            }
        }, {
            key: "minVolume",
            name: "最小数量",
            minWidth: 50,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{item.minVolume}</span>
                );
            }
        }, {
            key: "contingentCondition",
            name: "触发条件",
            minWidth: 100,
            isResizable: true,
            isCollapsible: true,
            data: 'string',
            onRender: (item) => {
                if (item.contingentCondition === ContingentConditionEnum.CC_Immediately) {
                    return (
                        <span>立即</span>
                    );
                } else if (item.contingentCondition === ContingentConditionEnum.CC_LastPriceGreaterEqualStopPrice) {
                    return (
                        <span>最新价大于等于条件价</span>
                    );
                } else if (item.contingentCondition === ContingentConditionEnum.CC_LastPriceLesserEqualStopPrice) {
                    return (
                        <span>最新价小于等于条件价</span>
                    );
                } else if (item.contingentCondition === ContingentConditionEnum.CC_LocalLastPriceGreaterEqualStopPrice) {
                    return (
                        <span>(本地)最新价大于等于条件价</span>
                    );
                } else if (item.contingentCondition === ContingentConditionEnum.CC_LocalLastPriceLesserEqualStopPrice) {
                    return (
                        <span>(本地)最新价小于等于条件价</span>
                    );
                } else if (item.contingentCondition === ContingentConditionEnum.CC_Unkonwn) {
                    return (
                        <span>未知</span>
                    );
                }else {
                    return (
                        <span>{item.contingentCondition}</span>
                    );
                }
            }
        }
        , {
            key: "stopPrice",
            name: "条件价格",
            minWidth: 50,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{item.stopPrice}</span>
                );
            }
        },
        {
            key: "adapterOrderId",
            name: "适配器定单编号",
            minWidth: 120,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onRender: (item) => {
                return (
                    <span>{item.adapterOrderId}</span>
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
                                    return (
                                        <div>
                                            <ul style={{ margin: 0, padding: 0 }}>
                                                <li><span style={labelStyls}>网关ID:</span><span>{account.gatewayId}</span></li>
                                            </ul>
                                        </div>
                                    );
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
                                        items={orderList}
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
                                                    <DetailsHeader
                                                        {...detailsHeaderProps}
                                                        styles={{root:{paddingTop:0,height:24,lineHeight:24},check:{height:"24px !important"},cellIsCheck:{height:24}}}
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
                                        onItemInvoked={
                                            (item: any, index: number | undefined): void => {
                                                tradeActionStore.cancelOrder(item.orderId)
                                            }
                                        }
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
                                                marginTop: 0,
                                            }
                                        }
                                    },
                                    {
                                        key: 'CANCELABLE',
                                        text: '可撤销',
                                        styles: {
                                            root: {
                                                width: 100,
                                                float: "left",
                                                marginTop: 0
                                            }
                                        }
                                    },
                                    {
                                        key: 'CANCELLED',
                                        text: '已撤销',
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
                                        this.setState({ "statusChoice": option.key })
                                    }
                                }}
                            // label="显示方式"
                            // required={true}
                            />
                        </Stack>
                        <Stack styles={{ root: { height: 30 } }}>
                            <Checkbox
                                label="显示拒单"
                                styles={{ root: { marginTop: 3 } }}
                                onChange={(event: any) => {
                                    this.setState({ "showRejected": event.currentTarget.checked })
                                }} />
                        </Stack>
                    </Stack>
                </Stack.Item>

            </Stack>

        );
    }


}

export default withRouter(OrderDetailsPage)
