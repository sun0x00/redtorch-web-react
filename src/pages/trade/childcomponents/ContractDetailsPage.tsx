import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { withRouter } from 'react-router';
import { mergeStyleSets, FontSizes } from 'office-ui-fabric-react/lib/Styling';
import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { DetailsList, DetailsListLayoutMode, IDetailsHeaderProps, IColumn, IDetailsFooterProps, ConstrainMode } from 'office-ui-fabric-react/lib/DetailsList';
import { IRenderFunction, SelectionMode } from 'office-ui-fabric-react/lib/Utilities';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { TooltipHost, TooltipDelay, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { xyz } from "../../../node/pb/pb";
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/components/Dropdown';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton, DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';

import { exchangeOptions, currencyOptions, productTypeOptions } from '../../../utils'

const { CurrencyEnum, ExchangeEnum, ProductClassEnum, OptionsTypeEnum } = xyz.redtorch.pb



@inject('authenticationStore', 'tradeContractStore', 'tradeActionStore', 'customizeStore', 'marketDataRecordingStore')
@observer
export class ContractDetailsPage extends React.Component<any> {

    state = {
        filterExchange: 9999,
        filterProductType: 9999,
        filterCurrency: 9999,
        filterSymbol: "",
        filterUnderlyingSymbol: "",
        filterThirdPartyId: "",
        filterName: "",
        filterLastTradeDateOrContractMonth: ""
    }

    public componentWillMount = () => {
        this.getMixContractList()
    }

    public getMixContractList = () => {
        const { tradeContractStore } = this.props
        tradeContractStore.getMixContractList()
    }

    public render() {

        const { tradeContractStore, tradeActionStore, customizeStore, marketDataRecordingStore } = this.props;

        const { selectedContract } = tradeActionStore;

        let mixContractList = []
        if ((this.state.filterCurrency === 9999 || (!this.state.filterCurrency && this.state.filterCurrency !== 0))
            && (this.state.filterExchange === 9999 || (!this.state.filterExchange && this.state.filterExchange !== 0))
            && (this.state.filterProductType === 9999 || (!this.state.filterProductType && this.state.filterProductType !== 0))
            && (this.state.filterSymbol === "" || !this.state.filterSymbol)
            && (this.state.filterLastTradeDateOrContractMonth === "" || !this.state.filterLastTradeDateOrContractMonth)
            && (this.state.filterThirdPartyId === "" || !this.state.filterThirdPartyId)
            && (this.state.filterName === "" || !this.state.filterName)
            && (this.state.filterUnderlyingSymbol === "" || !this.state.filterUnderlyingSymbol)) {
            mixContractList = tradeContractStore.mixContractList
        } else {

            const mixContractListLength = tradeContractStore.mixContractList.length
            for (let i = 0; i < mixContractListLength; i++) {
                const contract = tradeContractStore.mixContractList[i]

                let flag = false;
                flag = this.state.filterCurrency === 9999 || (!this.state.filterCurrency && this.state.filterCurrency !== 0) || contract.currency === this.state.filterCurrency

                flag = flag && (this.state.filterExchange === 9999 || (!this.state.filterExchange && this.state.filterExchange !== 0) || contract.exchange === this.state.filterExchange)

                flag = flag && (this.state.filterProductType === 9999 || (!this.state.filterProductType && this.state.filterProductType !== 0) || contract.productType === this.state.filterProductType)

                flag = flag && (this.state.filterSymbol === "" || !this.state.filterSymbol || (contract.symbol && `${contract.symbol}`.indexOf(this.state.filterSymbol) !== -1))

                flag = flag && (this.state.filterLastTradeDateOrContractMonth === "" || !this.state.filterLastTradeDateOrContractMonth || (contract.lastTradeDateOrContractMonth && `${contract.lastTradeDateOrContractMonth}`.indexOf(this.state.filterLastTradeDateOrContractMonth) !== -1))

                flag = flag && (this.state.filterUnderlyingSymbol === "" || !this.state.filterUnderlyingSymbol || (contract.underlyingSymbol && `${contract.underlyingSymbol}`.indexOf(this.state.filterUnderlyingSymbol) !== -1))

                flag = flag && (this.state.filterThirdPartyId === "" || !this.state.filterThirdPartyId || (contract.thirdPartyId && `${contract.thirdPartyId}`.indexOf(this.state.filterThirdPartyId) !== -1))

                flag = flag && (this.state.filterName === "" || !this.state.filterName || (contract.name && `${contract.name}`.indexOf(this.state.filterName) !== -1) || (contract.fullName && `${contract.fullName}`.indexOf(this.state.filterName) !== -1))


                if (flag) {
                    mixContractList.push(contract)
                }
            }
        }


        const { componentHeight } = this.props;
        const classNames = mergeStyleSets({
            wrapper: {
                height: `${componentHeight - 209}px`,
                position: 'relative',
                maxHeight: 'inherit',
                borderBottom: "1px solid #666666",
            }
        });

        const columns: IColumn[] = [
            {
                key: "unifiedSymbol",
                name: "统一标识",
                minWidth: 150,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onRender: (item) => {
                    const labelStyls: React.CSSProperties = { display: 'inline-block', width: 55, textAlign: "right", color: '#999', paddingRight: 3 }

                    let clazzNames = ""
                    if (selectedContract && item.unifiedSymbol === selectedContract.unifiedSymbol) {
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
                                                <li><span style={labelStyls}>网关ID:</span><span>{item.gatewayId}</span></li>
                                            </ul>
                                        </div>
                                    );
                                }
                            }}
                            delay={TooltipDelay.long}
                            directionalHint={DirectionalHint.bottomCenter}
                        >
                            <div className={clazzNames} onClick={
                                () => {
                                    tradeActionStore.setSelectedContract(item)
                                }
                            }>
                                <span style={{ cursor: "pointer" }}>{item.unifiedSymbol}</span>
                            </div>
                        </TooltipHost>
                    );
                }
            },
            {
                key: "shortName",
                name: "简称",
                minWidth: 100,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onRender: (item) => {
                    return (
                        <span>{item.name}</span>
                    );
                }
            }, {
                key: "fullName",
                name: "完整名称",
                minWidth: 60,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onRender: (item) => {
                    return (
                        <span>{item.fullName}</span>
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
                                        key: 'addTofavorite',
                                        text: '加入常用',
                                        iconProps: {
                                            iconName: "CircleAddition"
                                        },
                                        onClick: () => {
                                            customizeStore.addFavoriteContractByUnifiedSymbol(item.unifiedSymbol)
                                        }
                                    },

                                    {
                                        key: 'addToMarketDataRecording',
                                        // disabled: true,
                                        text: '加入行情记录',
                                        iconProps: {
                                            iconName: "CircleAddition"
                                        },
                                        onClick: () => {
                                            marketDataRecordingStore.addContractByUnifiedSymbol(item.unifiedSymbol)
                                        }
                                    }
                                ]
                            }}
                        />
                    );
                }
            }, {
                key: "symbol",
                name: "代码",
                minWidth: 60,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onRender: (item) => {
                    return (
                        <span>{item.symbol}</span>
                    );
                }
            }, {
                key: "exchange",
                name: "交易所",
                minWidth: 60,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onRender: (item) => {
                    return (
                        <span>{ExchangeEnum[item.exchange]}</span>
                    );
                }
            }, {
                key: "productType",
                name: "产品类型",
                minWidth: 60,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onRender: (item) => {
                    return (
                        <span>{ProductClassEnum[item.productType]}</span>
                    );
                }
            },
            {
                key: "lastTradeDateOrContractMonth",
                name: "合约月或最后交易日",
                minWidth: 60,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onRender: (item) => {
                    return (
                        <span>{item.lastTradeDateOrContractMonth}</span>
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
            },
            {
                key: "thirdPartyId",
                name: "第三方ID",
                minWidth: 100,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onRender: (item) => {
                    return (
                        <span>{item.thirdPartyId}</span>
                    );
                }
            },
            {
                key: "multiplier",
                name: "合约乘数",
                minWidth: 60,
                isResizable: true,
                isCollapsible: true,
                data: 'number',
                onRender: (item) => {
                    return (
                        <span>{item.multiplier}</span>
                    );
                }
            },
            {
                key: "priceTick",
                name: "最小变动价位",
                minWidth: 70,
                isResizable: true,
                isCollapsible: true,
                data: 'number',
                onRender: (item) => {
                    return (
                        <span>{item.priceTick}</span>
                    );
                }
            }, {
                key: "optionsType",
                name: "期权类型",
                minWidth: 60,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onRender: (item) => {
                    if (item.optionsType === OptionsTypeEnum.O_CallOptions) {
                        return (
                            <span>看涨</span>
                        );
                    }
                    if (item.optionsType === OptionsTypeEnum.O_PutOptions) {
                        return (
                            <span>看跌</span>
                        );
                    }
                    if (item.optionsType === OptionsTypeEnum.O_Unknown) {
                        return (
                            <span>未知</span>
                        );
                    }
                    return (
                        <span>{item.optionsType}</span>
                    );
                }
            },
            {
                key: "underlyingSymbol",
                name: "基础商品代码",
                minWidth: 80,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onRender: (item) => {
                    return (
                        <span>{item.underlyingSymbol}</span>
                    );
                }
            },
            {
                key: "underlyingMultiplier",
                name: "基础商品乘数",
                minWidth: 80,
                isResizable: true,
                isCollapsible: true,
                data: 'number',
                onRender: (item) => {
                    return (
                        <span>{item.underlyingMultiplier}</span>
                    );
                }
            },
            {
                key: "strikePrice",
                name: "执行价",
                minWidth: 80,
                isResizable: true,
                isCollapsible: true,
                data: 'number',
                onRender: (item) => {
                    return (
                        <span>{item.strikePrice}</span>
                    );
                }
            }

        ]

        return (
            <Stack styles={{ root: { width: "100%" } }}>
                <Stack.Item>
                    <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                        <Stack tokens={{ childrenGap: 2 }} styles={{ root: { width: "100%", height: 207, borderBottom: "1px solid #666666", paddingTop: 2, fontSize: FontSizes.xSmall } }}>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "32%", paddingLeft: 5, paddingRight: 5 } }}>
                                        <Dropdown label="交易所"
                                            // styles={{ root: { width: "90%" } }}
                                            defaultSelectedKey={this.state.filterExchange}
                                            options={
                                                exchangeOptions
                                            }
                                            onChange={(event: any, option?: IDropdownOption, index?: number, value?: string) => {
                                                if (option) {
                                                    this.setState({ filterExchange: option.key })
                                                }
                                            }}
                                        />
                                    </Stack>

                                    <Stack styles={{ root: { width: "32%", paddingLeft: 5, paddingRight: 5 } }}>
                                        <Dropdown label="产品类型"
                                            defaultSelectedKey={this.state.filterProductType}
                                            options={
                                                productTypeOptions
                                            }
                                            onChange={(event: any, option?: IDropdownOption, index?: number, value?: string) => {
                                                if (option) {
                                                    this.setState({ filterProductType: option.key })
                                                }
                                            }}
                                        />
                                    </Stack>

                                    <Stack styles={{ root: { width: "32%", paddingLeft: 5, paddingRight: 5 } }}>
                                        <Dropdown label="币种"
                                            defaultSelectedKey={this.state.filterCurrency}
                                            options={
                                                currencyOptions
                                            }
                                            onChange={(event: any, option?: IDropdownOption, index?: number, value?: string) => {
                                                if (option) {
                                                    this.setState({ filterCurrency: option.key })
                                                }
                                            }}
                                        />
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "32%", paddingLeft: 5, paddingRight: 5 } }}>
                                        <TextField defaultValue={this.state.filterSymbol} label="合约代码" onChange={(event: any, newValue?: string) => {
                                            this.setState({ filterSymbol: newValue })
                                        }} />
                                    </Stack>

                                    <Stack styles={{ root: { width: "32%", paddingLeft: 5, paddingRight: 5 } }}>
                                        <TextField defaultValue={this.state.filterLastTradeDateOrContractMonth} label="最后交易日或合约月" onChange={(event: any, newValue?: string) => {
                                            this.setState({ filterLastTradeDateOrContractMonth: newValue })
                                        }} />
                                    </Stack>

                                    <Stack styles={{ root: { width: "32%", paddingLeft: 5, paddingRight: 5 } }}>
                                        <TextField defaultValue={this.state.filterThirdPartyId} label="第三方ID" onChange={(event: any, newValue?: string) => {
                                            this.setState({ filterThirdPartyId: newValue })
                                        }} />
                                    </Stack>
                                </Stack>
                            </Stack.Item>

                            <Stack.Item styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "32%", paddingLeft: 5, paddingRight: 5 } }}>
                                        <TextField defaultValue={this.state.filterUnderlyingSymbol} label="基础商品代码" onChange={(event: any, newValue?: string) => {
                                            this.setState({ filterUnderlyingSymbol: newValue })
                                        }} />
                                    </Stack>

                                    <Stack styles={{ root: { width: "32%", paddingLeft: 5, paddingRight: 5 } }}>
                                        <TextField defaultValue={this.state.filterName} label="名称" onChange={(event: any, newValue?: string) => {
                                            this.setState({ filterName: newValue })
                                        }} />
                                    </Stack>

                                    <Stack styles={{ root: { width: "32%", paddingLeft: 5, paddingRight: 5 } }}>
                                        <PrimaryButton
                                            text="搜寻(开发中)"
                                            onClick={() => {
                                                console.log(123)
                                            }}
                                            disabled={true}
                                            allowDisabledFocus={true}
                                        />
                                        <DefaultButton
                                            text="刷新"
                                            onClick={() => {
                                                tradeContractStore.getMixContractList()
                                            }}
                                            allowDisabledFocus={true}
                                        />
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
                                    <DetailsList
                                        items={mixContractList}
                                        compact={true}
                                        columns={columns}
                                        selectionMode={SelectionMode.none}
                                        setKey="accountId"
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

            </Stack>

        );
    }



}

export default withRouter(ContractDetailsPage)
