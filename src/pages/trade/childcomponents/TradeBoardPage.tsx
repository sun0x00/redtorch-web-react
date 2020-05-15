import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { TooltipHost, TooltipDelay, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { isDevEnv } from '../../../utils';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { xyz } from "../../../node/pb/pb";
import { FontSizes } from 'office-ui-fabric-react/lib/Styling';

const { 
    ExchangeEnum,
    ProductClassEnum, 
    CurrencyEnum,
    OrderPriceTypeEnum,
    DirectionEnum,
    OffsetFlagEnum,
    TimeConditionEnum,
    VolumeConditionEnum,
    ContingentConditionEnum,
    HedgeFlagEnum,
 } = xyz.redtorch.pb


@inject('authenticationStore', 'tradeActionStore', 'tradeAccountStore')
@observer
export class TradeBoardPage extends React.Component<any> {

    public state = { showSubmitOrderModal: false, confirmPrice: null, actionType: '' };


    public render() {

        const { tradeActionStore, tradeAccountStore } = this.props;

        let priceTick = 0.0001
        let unifiedSymbol = ""
        let shortName = ""
        if (tradeActionStore.selectedContract) {
            if (tradeActionStore.selectedContract.priceTick) {
                priceTick = tradeActionStore.selectedContract.priceTick
            }

            if (tradeActionStore.selectedContract.unifiedSymbol) {
                unifiedSymbol = tradeActionStore.selectedContract.unifiedSymbol
            }

            if (tradeActionStore.selectedContract.name) {
                shortName = tradeActionStore.selectedContract.name
            }
        }

        const generateAccountVolumeDom = (isFinal: any) => {

            const tmpAccountVolumeDomList: any[] = []

            let key = 0;
            tradeAccountStore.selectedAccountIdSet.forEach((element: any) => {
                key++
                if (tradeAccountStore.accountMap.has(element)) {
                    const account = tradeAccountStore.accountMap.get(element)
                    const finalVolume = this.state[`CONFIRM_VOLUME_KEY_${account.accountId}`] ? this.state[`CONFIRM_VOLUME_KEY_${account.accountId}`] : tradeActionStore.volume
                    if (!isFinal || (finalVolume && finalVolume > 0)) {
                        tmpAccountVolumeDomList.push(
                            <Stack.Item styles={{ root: { width: "100%" } }} key={key}>
                                <Stack horizontal={true} tokens={{ childrenGap: 5 }} styles={{ root: { width: '100%' } }}>
                                    <Stack styles={{ root: { width: "calc(33% - 5px)" } }}>
                                        <TextField style={{ width: "100%" }} defaultValue={account.holder} disabled={true} />
                                    </Stack>
                                    <Stack styles={{ root: { width: "calc(33% - 5px)" } }}>
                                        <TextField style={{ width: "100%" }} defaultValue={account.accountId} disabled={true} />
                                    </Stack>
                                    <Stack styles={{ root: { width: "calc(33%)" } }}>
                                        <TextField
                                            style={{ color: "rgb(80, 255, 255)", width: "100%" }}
                                            className="trade-info-color"
                                            defaultValue={`${finalVolume}`}
                                            type="number"
                                            step={1}
                                            min={0}
                                            onChange={(event: any, newValue?: any) => {
                                                if (isDevEnv) {
                                                    console.log(`账户${account.accountId}变更数量${newValue}`)
                                                }
                                                const newState = {}
                                                newState[`CONFIRM_VOLUME_KEY_${account.accountId}`] = newValue
                                                this.setState(newState)
                                            }}
                                        />

                                    </Stack>
                                </Stack>
                            </Stack.Item>
                        )
                    }
                }
            });

            if (tmpAccountVolumeDomList.length === 0) {
                if (isFinal) {

                    tmpAccountVolumeDomList.push(
                        <Stack.Item styles={{ root: { width: "100%" } }} key={key}>
                            <Stack horizontal={true} tokens={{ childrenGap: 5 }} styles={{ root: { width: '100%' } }}>
                                <Stack styles={{ root: { width: "calc(33% - 5px)" } }}>
                                    <TextField style={{ width: "100%" }} defaultValue={"请选择至少为一个账户输入数量"} disabled={true} />
                                </Stack>
                                <Stack styles={{ root: { width: "calc(33% - 5px)" } }}>
                                    <TextField style={{ width: "100%" }} defaultValue={"请选择至少为一个账户输入数量"} disabled={true} />
                                </Stack>
                                <Stack styles={{ root: { width: "calc(33%)" } }}>
                                    <TextField
                                        style={{ color: "rgb(80, 255, 255)", width: "100%" }}
                                        className="trade-info-color"
                                        defaultValue={"0"}
                                        type="number"
                                        step={1}
                                        min={0}
                                        disabled={true}
                                    />
                                </Stack>
                            </Stack>
                        </Stack.Item>
                    )
                } else {
                    tmpAccountVolumeDomList.push(
                        <Stack.Item styles={{ root: { width: "100%" } }} key={key}>
                            <Stack horizontal={true} tokens={{ childrenGap: 5 }} styles={{ root: { width: '100%' } }}>
                                <Stack styles={{ root: { width: "calc(33% - 5px)" } }}>
                                    <TextField style={{ width: "100%" }} defaultValue={"请选择"} disabled={true} />
                                </Stack>
                                <Stack styles={{ root: { width: "calc(33% - 5px)" } }}>
                                    <TextField style={{ width: "100%" }} defaultValue={"至少一个账户"} disabled={true} />
                                </Stack>
                                <Stack styles={{ root: { width: "calc(33%)" } }}>
                                    <TextField
                                        style={{ color: "rgb(80, 255, 255)", width: "100%" }}
                                        className="trade-info-color"
                                        defaultValue={"0"}
                                        type="number"
                                        step={1}
                                        min={0}
                                        disabled={true}
                                    />
                                </Stack>
                            </Stack>
                        </Stack.Item>
                    )

                }
            }
            return tmpAccountVolumeDomList;
        }

        const accountVolumeDomList = generateAccountVolumeDom(false)

        const execOrders = (direction: number, offsetFlag: number) => {
            if (tradeActionStore.orderPriceType !== "ANY" && !this.state.confirmPrice) {
                toast.error(`发单错误,请确定价格`)
                return;
            }

            let submitFlag = false;
            tradeAccountStore.selectedAccountIdSet.forEach((accountId: any) => {
                const finalVolume = this.state[`CONFIRM_VOLUME_KEY_${accountId}`] ? this.state[`CONFIRM_VOLUME_KEY_${accountId}`] : tradeActionStore.volume

                if (!finalVolume || finalVolume <= 0) {
                    console.warn(`发单警告,数量异常，账户ID:${accountId},数量:${finalVolume}`)
                } else {
                    submitFlag = true;
                    tradeActionStore.submitOrder(
                        tradeActionStore.selectedContract,
                        direction, 
                        offsetFlag,
                        this.state.confirmPrice,
                        tradeActionStore.orderPriceType,
                        finalVolume, 
                        tradeActionStore.timeCondition,
                        tradeActionStore.volumeCondition,
                        tradeActionStore.hedgeFlag,
                        tradeActionStore.minVolume,
                        accountId, 
                        tradeActionStore.stopPrice,
                        tradeActionStore.contingentCondition,
                        uuidv4())
                }
            });
            if (submitFlag) {
                toast("本地信息:提交定单操作已执行", { autoClose: 5000, type: "info" })
            }
            this.closeSubmitOrderModal()

        }

        const buyButtonForModal =
            <Stack.Item align="center" key={"buyButtonForModal"}>
                <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%', overflowX: 'auto' } }}>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60, background: "#a4373a" } }}
                            allowDisabledFocus={true}
                            text="多"
                            onClick={
                                () => execOrders(DirectionEnum.D_Buy, OffsetFlagEnum.OF_Open)
                            }
                        />
                    </Stack>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60 } }}
                            allowDisabledFocus={true}
                            text="取消并关闭"
                            onClick={
                                () => {
                                    this.closeSubmitOrderModal()
                                }
                            }
                        />

                    </Stack>
                </Stack>
            </Stack.Item>

        const coverButtonForModal = [
            <Stack.Item align="center" key={"coverButtonForModal0"}>
                <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%', overflowX: 'auto' } }}>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60, background: "#a4373a" } }}
                            allowDisabledFocus={true}
                            text="平昨空"
                            onClick={
                                () => execOrders(DirectionEnum.D_Buy, OffsetFlagEnum.OF_CloseYesterday)
                            }
                        />
                    </Stack>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60, background: "#a4373a" } }}
                            allowDisabledFocus={true}
                            text="平今空"
                            onClick={
                                () => execOrders(DirectionEnum.D_Buy, OffsetFlagEnum.OF_CloseToday)
                            }
                        />
                    </Stack>
                </Stack>
            </Stack.Item>,
            <Stack.Item align="center" key={"coverButtonForModal1"}>
                <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%', overflowX: 'auto' } }}>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60, background: "#a4373a" } }}
                            allowDisabledFocus={true}
                            text="平空"
                            onClick={
                                () => execOrders(DirectionEnum.D_Buy, OffsetFlagEnum.OF_Close)
                            }
                        />
                    </Stack>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60 } }}
                            allowDisabledFocus={true}
                            text="取消并关闭"
                            onClick={
                                () => {
                                    this.closeSubmitOrderModal()
                                }
                            }
                        />
                    </Stack>
                </Stack>
            </Stack.Item>
        ]

        const shortButtonForModal =
            <Stack.Item align="center" key={"shortButtonForModal"}>
                <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%', overflowX: 'auto' } }}>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60, background: "#217346" } }}
                            allowDisabledFocus={true}
                            text="空"
                            onClick={
                                () => execOrders(DirectionEnum.D_Sell, OffsetFlagEnum.OF_Open)
                            }
                        />
                    </Stack>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60 } }}
                            allowDisabledFocus={true}
                            text="取消并关闭"
                            onClick={
                                () => {
                                    this.closeSubmitOrderModal()
                                }
                            }
                        />
                    </Stack>
                </Stack>
            </Stack.Item>


        const sellButtonForModal = [

            <Stack.Item align="center" key={'sellButtonForModal0'}>
                <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%', overflowX: 'auto' } }}>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60, background: "#217346" } }}
                            allowDisabledFocus={true}
                            text="平昨多"
                            onClick={
                                () => execOrders(DirectionEnum.D_Sell, OffsetFlagEnum.OF_CloseYesterday)
                            }
                        />
                    </Stack>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60, background: "#217346" } }}
                            allowDisabledFocus={true}
                            text="平今多"
                            onClick={
                                () => execOrders(DirectionEnum.D_Sell, OffsetFlagEnum.OF_CloseToday)
                            }
                        />
                    </Stack>
                </Stack>
            </Stack.Item>,
            <Stack.Item align="center" key={"sellButtonForModal1"}>
                <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%', overflowX: 'auto' } }}>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60, background: "#217346" } }}
                            allowDisabledFocus={true}
                            text="平多"
                            onClick={
                                () => execOrders(DirectionEnum.D_Sell, OffsetFlagEnum.OF_Close)
                            }
                        />
                    </Stack>
                    <Stack styles={{ root: { width: 300 } }}>
                        <DefaultButton
                            styles={{ root: { height: 60 } }}
                            allowDisabledFocus={true}
                            text="取消并关闭"
                            onClick={
                                () => {
                                    this.closeSubmitOrderModal()
                                }
                            }
                        />
                    </Stack>
                </Stack>
            </Stack.Item>
        ]

        const tooltipLabelStyls: React.CSSProperties = { display: 'inline-block', width: 75, textAlign: "right", color: '#999', paddingRight: 3 }

        return (
            <Stack styles={{ root: { width: "100%", paddingLeft: 5 } }}>
                <Stack.Item styles={{ root: { width: "100%" } }}>
                    <Stack horizontal={true} styles={{ root: { width: '100%' } }}>
                        <Stack tokens={{ childrenGap: 0 }} styles={{ root: { width: "calc(33% - 2px)", borderRight: "solid 2px rgb(25,25,25)" } }}>
                            <Stack.Item align="center" styles={{ root: { width: '100%', background: "rgb(25,25,25)" } }} >
                                <Stack tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%', paddingTop: 5, paddingBottom: 5 } }}>
                                    选项
                                </Stack>
                            </Stack.Item>
                            <Stack.Item align="center" styles={{ root: { width: '100%' } }} >
                                <Stack tokens={{ childrenGap: 0 }} styles={{ root: { height: 425, width: '100%', paddingRight: 5, overflowY: 'auto' } }}>
                                    <Dropdown label="价格类型"
                                        defaultSelectedKey={tradeActionStore.orderPriceType}
                                        options={
                                            [
                                                { key: OrderPriceTypeEnum.OPT_LimitPrice, text: '限价' },
                                                { key: OrderPriceTypeEnum.OPT_AnyPrice, text: '市价' },
                                                { key: OrderPriceTypeEnum.OPT_FiveLevelPrice, text: '五档' },
                                                { key: OrderPriceTypeEnum.OPT_BestPrice, text: '最优价' },
                                                { key: OrderPriceTypeEnum.OPT_LastPrice, text: '最新价' },
                                                { key: OrderPriceTypeEnum.OPT_LastPricePlusOneTicks, text: '最新价浮动上浮1个ticks' },
                                                { key: OrderPriceTypeEnum.OPT_LastPricePlusThreeTicks, text: '最新价浮动上浮3个ticks' }
                                            ]
                                        }
                                        onChange={(event: any, option?: IDropdownOption, index?: number, value?: number) => {
                                            if (option) {
                                                tradeActionStore.setOrderPriceType(option.key)
                                            }
                                        }}
                                    />
                                    <Dropdown label="自动填价"
                                        defaultSelectedKey={tradeActionStore.autoFillOrderPriceType}
                                        options={
                                            [
                                                { key: 'LAST', text: '最新' },
                                                { key: 'UPPER_LIMIT', text: '涨停' },
                                                { key: 'ASK1', text: '卖一' },
                                                { key: 'BID1', text: '买一' },
                                                { key: 'LOWER_LIMIT', text: '跌停' },
                                                { key: 'MANUAL', text: '手动' },
                                            ]
                                        }
                                        onChange={(event: any, option?: IDropdownOption, index?: number, value?: string) => {
                                            if (option) {
                                                tradeActionStore.setAutoFillOrderPriceType(option.key)
                                            }
                                        }}
                                    />
                                    <TextField
                                        style={{ color: "rgb(80, 255, 255)" }}
                                        label="价格"
                                        type="number"
                                        step={priceTick}
                                        value={tradeActionStore.price}
                                        onChange={(event: any, newValue?: any) => tradeActionStore.setPrice(newValue)} />

                                    <TextField
                                        style={{ color: "rgb(80, 255, 255)" }}
                                        className="trade-info-color"
                                        defaultValue={`${tradeActionStore.volume}`}
                                        label="数量"
                                        type="number"
                                        step={1}
                                        min={0}
                                        onChange={(event: any, newValue?: any) => tradeActionStore.setVolume(newValue)}
                                    />
                                    <Dropdown label="投机套保标志"
                                        styles={{ root: { marginTop: 133 } }}
                                        defaultSelectedKey={tradeActionStore.hedgeFlag}
                                        options={
                                            [
                                                { key: HedgeFlagEnum.HF_Speculation, text: '投机' },
                                                { key: HedgeFlagEnum.HF_Arbitrage, text: '套利' },
                                                { key: HedgeFlagEnum.HF_Hedge, text: '套保' },
                                                { key: HedgeFlagEnum.HF_MarketMaker, text: '做市商' },
                                                { key: HedgeFlagEnum.HF_SpecHedge, text: '第一腿投机第二腿套保 大商所专用' },
                                                { key: HedgeFlagEnum.HF_HedgeSpec, text: '第一腿套保第二腿投机 大商所专用' }
                                                
                                            ]
                                        }
                                        onChange={(event: any, option?: IDropdownOption, index?: number, value?: number) => {
                                            if (option) {
                                                tradeActionStore.setHedgeFlag(option.key)
                                            }
                                        }}
                                    />
                                    <Dropdown label="时效类型"
                                        styles={{ root: { marginTop: 133 } }}
                                        defaultSelectedKey={tradeActionStore.timeCondition}
                                        options={
                                            [
                                                { key: TimeConditionEnum.TC_GFD, text: 'GFD(当日有效)' },
                                                { key: TimeConditionEnum.TC_GTC, text: 'GTC(撤销前有效)' },
                                                { key: TimeConditionEnum.TC_IOC, text: 'IOC(立即成交,否则撤销)' }
                                            ]
                                        }
                                        onChange={(event: any, option?: IDropdownOption, index?: number, value?: number) => {
                                            if (option) {
                                                tradeActionStore.setTimeCondition(option.key)
                                            }
                                        }}
                                    />

                                    <Dropdown label="成交量类型"
                                        styles={{ root: { marginTop: 133 } }}
                                        defaultSelectedKey={tradeActionStore.volumeCondition}
                                        options={
                                            [
                                                { key: VolumeConditionEnum.VC_AV, text: 'AV(任何数量)' },
                                                { key: VolumeConditionEnum.VC_MV, text: 'MV(最小数量)' },
                                                { key: VolumeConditionEnum.VC_AV, text: 'CV(全部数量)' }
                                            ]
                                        }
                                        onChange={(event: any, option?: IDropdownOption, index?: number, value?: number) => {
                                            if (option) {
                                                tradeActionStore.setVolumeCondition(option.key)
                                            }
                                        }}
                                    />

                                    <TextField
                                        style={{ color: "rgb(80, 255, 255)" }}
                                        className="trade-info-color"
                                        defaultValue={`${tradeActionStore.minVolume}`}
                                        label="最小成交量"
                                        type="number"
                                        step={1}
                                        min={0}
                                        onChange={(event: any, newValue?: any) => tradeActionStore.setMinVolume(newValue)}
                                    />
                                    <Dropdown label="触发条件"
                                        styles={{ root: { marginTop: 133 } }}
                                        defaultSelectedKey={tradeActionStore.contingentCondition}
                                        options={
                                            [
                                                { key: ContingentConditionEnum.CC_Immediately, text: '立即' },
                                                { key: ContingentConditionEnum.CC_LastPriceGreaterEqualStopPrice, text: '最新价大于等于条件价' },
                                                { key: ContingentConditionEnum.CC_LastPriceLesserEqualStopPrice, text: '最新价小于等于条件价' },
                                                { key: ContingentConditionEnum.CC_LocalLastPriceGreaterEqualStopPrice, text: '(本地)最新价大于等于条件价' },
                                                { key: ContingentConditionEnum.CC_LocalLastPriceLesserEqualStopPrice, text: '(本地)最新价小于等于条件价' },
                                            ]
                                        }
                                        onChange={(event: any, option?: IDropdownOption, index?: number, value?: number) => {
                                            if (option) {
                                                tradeActionStore.setContingentCondition(option.key)
                                            }
                                        }}
                                    />

                                    <TextField
                                        style={{ color: "rgb(80, 255, 255)" }}
                                        label="条件价格"
                                        type="number"
                                        step={priceTick}
                                        defaultValue={tradeActionStore.stopPrice}
                                        onChange={(event: any, newValue?: any) => tradeActionStore.setStopPrice(newValue)} />

                                    
                                </Stack>
                            </Stack.Item>
                        </Stack>

                        <Stack tokens={{ childrenGap: 5 }} styles={{ root: { width: '67%' } }}>
                            <Stack.Item align="center" styles={{ root: { width: '100%', background: "rgb(25,25,25)" } }} >
                                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%', paddingTop: 5, paddingBottom: 5, paddingLeft: 5 } }}>
                                    <Stack styles={{ root: { width: "33%" } }}>
                                        名称
                                    </Stack>
                                    <Stack styles={{ root: { width: "33%" } }}>
                                        账户ID
                                    </Stack>
                                    <Stack>
                                        交易数量
                                    </Stack>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item styles={{ root: { width: '100%', height: 340, paddingLeft: 5 } }} >
                                <Stack tokens={{ childrenGap: 0 }} styles={{ root: { height: '100%', width: '100%', overflowY: 'auto' } }}>
                                    {accountVolumeDomList}
                                </Stack>
                            </Stack.Item>
                            <Stack.Item align="center" styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 3 }} styles={{ root: { width: '100%' } }}>
                                    <Stack horizontal={true} styles={{ root: { width: 'calc(50% - 3px)' } }} >
                                        <Stack styles={{ root: { width: '50%' } }} >
                                            <DefaultButton
                                                styles={{ root: { paddingLeft: 0, paddingRight: 0, minWidth: 60 } }}
                                                allowDisabledFocus={true}
                                                text="重用数量"
                                                onClick={
                                                    () => {
                                                        this.reuseVolume();
                                                    }
                                                }
                                            />
                                        </Stack>
                                        <Stack styles={{ root: { width: '50%' } }} >
                                            &nbsp;
                                        </Stack>

                                    </Stack>

                                    <Stack horizontal={true} styles={{ root: { width: 'calc(50% - 3px)' } }} >
                                        <Stack styles={{ root: { width: '50%', paddingRight: 2 } }} >
                                            <DefaultButton
                                                styles={{ root: { background: "#a4373a", paddingLeft: 0, paddingRight: 0, minWidth: 60 } }}
                                                allowDisabledFocus={true}
                                                text="多"
                                                onClick={
                                                    () => {
                                                        this.openSubmitOrderModal("ACTION_TYPE_BUY", tradeActionStore.price);
                                                    }
                                                }
                                            />
                                        </Stack>

                                        <Stack styles={{ root: { width: '50%', paddingLeft: 2 } }} >
                                            <DefaultButton
                                                styles={{ root: { background: "#217346", paddingLeft: 0, paddingRight: 0, minWidth: 60 } }}
                                                allowDisabledFocus={true}
                                                text="空"
                                                onClick={
                                                    () => {
                                                        this.openSubmitOrderModal("ACTION_TYPE_SHORT", tradeActionStore.price);
                                                    }
                                                }
                                            />
                                        </Stack>

                                    </Stack>


                                </Stack>
                            </Stack.Item>
                            <Stack.Item align="center" styles={{ root: { width: "100%" } }}>
                                <Stack horizontal={true} tokens={{ childrenGap: 3 }} styles={{ root: { width: '100%' } }}>

                                    <Stack horizontal={true} styles={{ root: { width: 'calc(50% - 3px)' } }} >
                                        <Stack styles={{ root: { width: '50%' } }} >
                                            <DefaultButton
                                                styles={{ root: { paddingLeft: 0, paddingRight: 0, minWidth: 60 } }}
                                                allowDisabledFocus={true}
                                                text="重置数量"
                                                onClick={
                                                    () => {
                                                        this.resetVolume();
                                                    }
                                                }
                                            />
                                        </Stack>
                                        <Stack styles={{ root: { width: '50%' } }} >
                                            &nbsp;
                                        </Stack>

                                    </Stack>

                                    <Stack horizontal={true} styles={{ root: { width: 'calc(50% - 3px)' } }} >
                                        <Stack styles={{ root: { width: '50%', paddingRight: 2 } }} >
                                            <DefaultButton
                                                styles={{ root: { background: "#a4373a", paddingLeft: 0, paddingRight: 0, minWidth: 60 } }}
                                                allowDisabledFocus={true}
                                                text="平空"
                                                onClick={
                                                    () => {
                                                        this.openSubmitOrderModal("ACTION_TYPE_COVER", tradeActionStore.price);
                                                    }
                                                }
                                            />
                                        </Stack>
                                        <Stack styles={{ root: { width: '50%', paddingLeft: 2 } }} >
                                            <DefaultButton
                                                styles={{ root: { background: "#217346", paddingLeft: 0, paddingRight: 0, minWidth: 60 } }}
                                                allowDisabledFocus={true}
                                                text="平多"
                                                onClick={
                                                    () => {
                                                        this.openSubmitOrderModal("ACTION_TYPE_SELL", tradeActionStore.price);
                                                    }
                                                }
                                            />
                                        </Stack>

                                    </Stack>

                                </Stack>
                            </Stack.Item>
                        </Stack>
                    </Stack>

                </Stack.Item>

                <Modal
                    isOpen={this.state.showSubmitOrderModal}
                    isBlocking={true}
                    onDismiss={() => this.closeSubmitOrderModal()}
                    dragOptions={
                        {
                            moveMenuItemText: 'Move',
                            closeMenuItemText: 'Close',
                            menu: ContextualMenu
                        }
                    }
                >
                    <Stack gap={5} padding={20}>
                        <Stack.Item align="center" styles={{ root: { width: '100%' } }}>
                            <Stack styles={{ root: { textAlign: "center", fontSize: FontSizes.large } }}>
                                定单确认
                            </Stack>
                            <Stack horizontal={true} tokens={{ childrenGap: 5 }} styles={{ root: { width: '100%' } }}>
                                <Stack tokens={{ childrenGap: 0 }} styles={{ root: { width: "calc(50% - 5px)" } }}>
                                    {
                                        tradeActionStore.selectedContract ?
                                            <TooltipHost
                                                calloutProps={{ gapSpace: 20 }}
                                                tooltipProps={{
                                                    onRenderContent: () => {
                                                        return (
                                                            <div>
                                                                <ul style={{ margin: 0, padding: 0 }}>
                                                                    <li><span style={tooltipLabelStyls}>合约代码:</span><span>{tradeActionStore.selectedContract.symbol}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>简称:</span><span>{tradeActionStore.selectedContract.name}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>完整名称:</span><span>{tradeActionStore.selectedContract.fullName}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>交易所:</span><span>{ExchangeEnum[tradeActionStore.selectedContract.exchange]}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>产品类型:</span><span>{ProductClassEnum[tradeActionStore.selectedContract.productClass]}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>第三方ID:</span><span>{tradeActionStore.selectedContract.thirdPartyId}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>货币:</span><span>{CurrencyEnum[tradeActionStore.selectedContract.currency]}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>合约乘数:</span><span>{tradeActionStore.selectedContract.multiplier}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>最小变动价位:</span><span>{tradeActionStore.selectedContract.priceTick}</span></li>
                                                                    <li><span style={tooltipLabelStyls}>最后交易日或合约月:</span><span>{tradeActionStore.selectedContract.lastTradeDateOrContractMonth}</span></li>
                                                                </ul>
                                                            </div>
                                                        );
                                                    }
                                                }}
                                                delay={TooltipDelay.long}
                                                directionalHint={DirectionalHint.bottomCenter}
                                            >
                                                <TextField style={{ color: "rgb(220, 220, 10)" }} className="trade-remind-color-important" label="合约代码" defaultValue={unifiedSymbol} disabled={true} />
                                            </TooltipHost> : null
                                    }
                                    {
                                        tradeActionStore.selectedContract ? null :
                                            <TextField label="合约代码" defaultValue={unifiedSymbol} disabled={true} />
                                    }
                                    <Dropdown label="价格类型"
                                        defaultSelectedKey={tradeActionStore.orderPriceType}
                                        options={
                                            [
                                                { key: OrderPriceTypeEnum.OPT_LimitPrice, text: '限价' },
                                                { key: OrderPriceTypeEnum.OPT_AnyPrice, text: '市价' },
                                                { key: OrderPriceTypeEnum.OPT_FiveLevelPrice, text: '五档' }
                                            ]
                                        }

                                        onChange={(event: any, option?: IDropdownOption, index?: number, value?: string) => {
                                            if (option) {
                                                tradeActionStore.setOrderPriceType(option.key)
                                            }
                                        }}
                                    />
                                    <TextField
                                        style={{ color: "rgb(80, 255, 255)" }}
                                        label="确认价格"
                                        type="number"
                                        step={priceTick}
                                        min={0}
                                        defaultValue={`${this.state.confirmPrice}`}
                                        onChange={(event: any, newValue?: any) => newValue ? this.setState({ confirmPrice: newValue }) : null} />
                                </Stack>
                                <Stack styles={{ root: { width: "calc(50% - 5px)" } }}>
                                    <TextField style={{ color: "rgb(220, 220, 10)" }} className="trade-remind-color-important" label="合约名称" defaultValue={shortName} disabled={true} />
                                    <Dropdown label="时效类型"
                                        styles={{ root: { marginTop: 133 } }}
                                        defaultSelectedKey={tradeActionStore.timeCondition}
                                        options={
                                            [
                                                { key: TimeConditionEnum.TC_GFD, text: 'GFD(当日有效)' },
                                                { key: TimeConditionEnum.TC_GTC, text: 'GTC(撤销前有效)' },
                                                { key: TimeConditionEnum.TC_IOC, text: 'IOC(立即成交,否则撤销)' }
                                            ]
                                        }
                                        onChange={(event: any, option?: IDropdownOption, index?: number, value?: string) => {
                                            if (option) {
                                                tradeActionStore.setTimeCondition(option.key)
                                            }
                                        }}
                                    />
                                    <Dropdown label="成交量类型"
                                        styles={{ root: { marginTop: 133 } }}
                                        defaultSelectedKey={tradeActionStore.volumeCondition}
                                        options={
                                            [
                                                { key: VolumeConditionEnum.VC_AV, text: 'AV(任何数量)' },
                                                { key: VolumeConditionEnum.VC_MV, text: 'MV(最小数量)' },
                                                { key: VolumeConditionEnum.VC_AV, text: 'CV(全部数量)' }
                                            ]
                                        }
                                        onChange={(event: any, option?: IDropdownOption, index?: number, value?: string) => {
                                            if (option) {
                                                tradeActionStore.setVolumeCondition(option.key)
                                            }
                                        }}
                                    />

                                </Stack>
                            </Stack>
                        </Stack.Item>
                        {generateAccountVolumeDom(true)}
                        {this.state.actionType === "ACTION_TYPE_BUY" ? buyButtonForModal : null}
                        {this.state.actionType === "ACTION_TYPE_SELL" ? sellButtonForModal : null}
                        {this.state.actionType === "ACTION_TYPE_SHORT" ? shortButtonForModal : null}
                        {this.state.actionType === "ACTION_TYPE_COVER" ? coverButtonForModal : null}
                    </Stack>
                </Modal>
            </Stack>
        );
    }

    closeSubmitOrderModal = () => {
        const newState = {}
        Object.keys(this.state).forEach(
            (element: any) => {
                if (`${element}`.startsWith("CONFIRM_VOLUME_KEY_")) {
                    newState[`PRE_${element}`] = this.state[element]
                    newState[element] = undefined
                }
            }
        )
        this.setState({ showSubmitOrderModal: false, confirmPrice: null, actionType: '', ...newState })
    }

    openSubmitOrderModal = (actionType: string, price: number|string) => {

        const { tradeActionStore, tradeAccountStore } = this.props;
        if (!tradeActionStore.selectedContract) {
            toast.error("请选择合约");
            return;
        }
        if (!tradeAccountStore.selectedAccountIdSet || tradeAccountStore.selectedAccountIdSet.size <= 0) {
            toast.error("请选择至少一个账户");
            return;
        }

        if(!price||price === ""){
            toast.error("请确定价格");
            return;
        }

        const newState = {}
        let counter = 0;
        tradeAccountStore.selectedAccountIdSet.forEach((accountId: any) => {
            if (this.state[`CONFIRM_VOLUME_KEY_${accountId}`] && this.state[`CONFIRM_VOLUME_KEY_${accountId}`] !== 0) {
                newState[`CONFIRM_VOLUME_KEY_${accountId}`] = this.state[`CONFIRM_VOLUME_KEY_${accountId}`]
                counter += 1
            } else if (tradeActionStore.volume && tradeActionStore.volume !== 0) {
                newState[`CONFIRM_VOLUME_KEY_${accountId}`] = tradeActionStore.volume
                counter += 1
            }
        });
        if (counter > 0) {
            tradeActionStore.setVolume(0)
            this.setState({ showSubmitOrderModal: true, confirmPrice: price, "actionType": actionType, ...newState })
        } else {
            toast.error("请至少为一个账户输入数量")
        }
    }

    reuseVolume = () => {

        const { tradeAccountStore } = this.props;

        const newState = {}

        if (!tradeAccountStore.selectedAccountIdSet || tradeAccountStore.selectedAccountIdSet.size <= 0) {
            toast.error("请选择至少一个账户");
            return;
        }

        let counter = 0;
        tradeAccountStore.selectedAccountIdSet.forEach((accountId: any) => {
            if (this.state[`PRE_CONFIRM_VOLUME_KEY_${accountId}`]) {
                newState[`CONFIRM_VOLUME_KEY_${accountId}`] = this.state[`PRE_CONFIRM_VOLUME_KEY_${accountId}`]
            } else {
                newState[`CONFIRM_VOLUME_KEY_${accountId}`] = 0
                counter += 1
            }
        });

        if (counter > 0) {
            toast.warn("部分账户数量输入为0")
        }

        this.setState(newState)


    }

    resetVolume = () => {

        const { tradeActionStore } = this.props
        const newState = {}

        Object.keys(this.state).forEach(
            (element: any) => {
                if (`${element}`.startsWith("CONFIRM_VOLUME_KEY_")) {
                    newState[element] = undefined
                }
            }
        )
        tradeActionStore.setVolume(0)

        this.setState(newState)

    }

}

export default withRouter(TradeBoardPage)
