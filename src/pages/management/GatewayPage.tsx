import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { inject, observer } from 'mobx-react';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { withRouter } from 'react-router';
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn, IDetailsHeaderProps, ConstrainMode, IDetailsFooterProps } from 'office-ui-fabric-react/lib/DetailsList';
import { ActionButton, PrimaryButton, DefaultButton, IButtonStyles, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { Dropdown, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { ComboBox, IComboBoxOption } from 'office-ui-fabric-react/lib/ComboBox';
import { hostNamePattern, ipv4PattenPattern, portPattern, normalIntegerPattern } from '../../utils';
import { toast } from 'react-toastify';
import { createTheme, ITheme, FontSizes } from 'office-ui-fabric-react/lib/Styling';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { IRenderFunction } from 'office-ui-fabric-react/lib/Utilities';
import { xyz } from "../../node/pb/pb";

const { GatewayTypeEnum, GatewayAdapterTypeEnum, ConnectStatusEnum } = xyz.redtorch.pb


const theme: ITheme = createTheme({
  fonts: {
    medium: {
      fontFamily: 'Monaco, Menlo, Consolas',
      fontSize: '30px'
    }
  }
});

const actionButtonStyles: IButtonStyles = {
  root: {
    fontSize: '12px',
    height: 16
  }
}

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 }
};

const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } }
};

const gatewayTypeOptions: IDropdownOption[] = [
  { key: 0, text: '行情和交易' },
  { key: 1, text: '行情' },
  { key: 2, text: '交易' },
];

const gatewayAdapterTypeOptions: IDropdownOption[] = [
  { key: 0, text: 'CTP' },
  { key: 1, text: 'IB' },
];

const gatewayImplementClassNameOptions: IComboBoxOption[] = [
  { key: 'xyz.redtorch.gateway.ctp.x64v6v3v11v.CtpGatewayImpl', text: 'xyz.redtorch.gateway.ctp.x64v6v3v11v.CtpGatewayImpl' },
  { key: 'xyz.redtorch.gateway.ctp.x64v6v3v13v.CtpGatewayImpl', text: 'xyz.redtorch.gateway.ctp.x64v6v3v13v.CtpGatewayImpl' },
  { key: 'xyz.redtorch.gateway.ctp.x64v6v3v15v.CtpGatewayImpl', text: 'xyz.redtorch.gateway.ctp.x64v6v3v15v.CtpGatewayImpl' },
  { key: 'xyz.redtorch.gateway.ctp.x64v6v3v16t1v.CtpGatewayImpl', text: 'xyz.redtorch.gateway.ctp.x64v6v3v16v.CtpGatewayImpl' },
  { key: 'xyz.redtorch.gateway.ctp.x64v6v3v16t1v.CtpGatewayImpl', text: 'xyz.redtorch.gateway.ctp.x64v6v3v16t1v.CtpGatewayImpl' },
  { key: 'xyz.redtorch.gateway.IbGateway', text: 'xyz.redtorch.gateway.IbGateway' },
];


@inject('gatewayStore')
@observer
export class GatewayPage extends React.Component<any> {

  public state = {
    hiddenDisconnectGatewayDialog: true,
    gatewayIdForDisconnect: '',
    // -----------------------------------------
    hiddenDeleteGatewayDialog: true,
    gatewayIdForDelete: null,
    // -----------------------------------------
    hiddenConnectAllGatewaysDialog: true,
    hiddenDisconnectAllGatewaysDialog: true,
    // -----------------------------------------
    showEditGatewayModal: false,
    // -----------------------------------------
    editGatewayId: '',
    editGatewayName: '',
    editGatewayNameErrorMessage: '',
    editGatewayDescription: '',
    editGatewayTargetNodeId: 10000,
    editGatewayTargetNodeIdErrorMessage: '',
    editGatewayImplementClassName: '',
    editGatewayImplementClassNameErrorMessage: '',
    editGatewayType: 0,
    editGatewayAdapterType: 0,
    editAutoConnectTimeRanges: "",
    editGatewayCtpSettingUserId: '',
    editGatewayCtpSettingUserIdErrorMessage: '',
    editGatewayCtpSettingPassword: '',
    editGatewayCtpSettingPasswordErrorMessage: '',
    editGatewayCtpSettingMdHost: '',
    editGatewayCtpSettingMdHostErrorMessage: '',
    editGatewayCtpSettingMdPort: 0,
    editGatewayCtpSettingMdPortErrorMessage: '',
    editGatewayCtpSettingTdHost: '',
    editGatewayCtpSettingTdHostErrorMessage: '',
    editGatewayCtpSettingTdPort: 0,
    editGatewayCtpSettingTdPortErrorMessage: '',
    editGatewayCtpSettingUserProductInfo: '',
    editGatewayCtpSettingAuthCode: '',
    editGatewayCtpSettingBrokerId: '',
    editGatewayCtpSettingBrokerIdErrorMessage: '',
    editGatewayCtpSettingAppId: '',
    editGatewayIbSettingClientId: 0,
    editGatewayIbSettingHost: '127.0.0.1',
    editGatewayIbSettingHostErrorMessage: '',
    editGatewayIbSettingPort: 7496,
    editGatewayIbSettingPortErrorMessage: '',
    windowInnerWidth: window.innerWidth,
    windowInnerHeight: window.innerHeight
  };

  componentDidMount() {
    this.resize()
    window.addEventListener('resize', this.resize);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({ "windowInnerWidth": window.innerWidth, "windowInnerHeight": window.innerHeight })
  }

  componentWillMount() {
    const { gatewayStore } = this.props

    gatewayStore.getGatewayList()

  }

  public render() {

    // const { routes, location } = this.props;

    const columns: IColumn[] = [{
      key: "gatewayId",
      name: "ID",
      minWidth: 250,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.gatewayId}</span>
        );
      }
    },
    {
      key: "status",
      name: "连接状态",
      minWidth: 60,
      isResizable: true,
      isCollapsible: true,
      data: 'boolean',
      onRender: (item) => {
        if (item.status === ConnectStatusEnum.CS_Disconnected) {
          return (
            <span style={{ color: 'red' }}>已经断开</span>
          );
        } else if (item.status === ConnectStatusEnum.CS_Connected) {
          return (
            <span style={{ color: 'green' }}>已经连接</span>
          );
        } else if (item.status === ConnectStatusEnum.CS_Disconnecting) {
          return (
            <span style={{ color: 'orange' }}>正在断开</span>
          );
        } else if (item.status === ConnectStatusEnum.CS_Connecting) {
          return (
            <span style={{ color: 'orange' }}>正在连接</span>
          );
        }
        return (
          <span style={{ color: 'aqua' }}>{item.status}</span>
        );
      }
    },{
      key: "autoConnectTimeRanges",
      name: "自动连接时间段",
      minWidth: 120,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.autoConnectTimeRanges}</span>
        );
      }
    }, {
      key: "gatewayName",
      name: "网关名称",
      minWidth: 100,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.gatewayName}</span>
        );
      }
    }, {
      key: "gatewayDescription",
      name: "网关描述",
      minWidth: 120,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.gatewayDescription}</span>
        );
      }
    }, {
      key: "implementClassName",
      name: "网关实现类",
      minWidth: 120,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.implementClassName}</span>
        );
      }
    }, {
      key: "gatewayType",
      name: "网关类型",
      minWidth: 80,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        if (item.gatewayType === GatewayTypeEnum.GTE_TradeAndMarketData) {
          return (
            <span>行情和交易</span>
          );
        } else if (item.gatewayType === GatewayTypeEnum.GTE_MarketData) {
          return (
            <span>行情</span>
          );
        } else if (item.gatewayType === GatewayTypeEnum.GTE_Trade) {
          return (
            <span>交易</span>
          );
        }
        return (
          <span>{item.gatewayType}</span>
        );

      }
    }, {
      key: "gatewayAdapterType",
      name: "网关适配器类型",
      minWidth: 80,
      isResizable: true,
      isCollapsible: true,
      data: 'number',
      onRender: (item) => {
        if (item.gatewayAdapterType === GatewayAdapterTypeEnum.GAT_CTP) {
          return (
            <span>CTP</span>
          );
        } else if (item.gatewayAdapterType === GatewayAdapterTypeEnum.GAT_IB) {
          return (
            <span>IB</span>
          );
        }
        return (
          <span>{item.gatewayAdapterType}</span>
        );
      }
    }, {
      key: "targetNodeId",
      name: "目标节点ID",
      minWidth: 60,
      isResizable: true,
      isCollapsible: true,
      data: 'number',
      onRender: (item) => {
        return (
          <span>{item.targetNodeId}</span>
        );
      }
    }, {
      key: "action",
      name: "操作",
      minWidth: 110,
      isResizable: true,
      isCollapsible: true,
      onRender: (item) => {
        return (
          <span>
            {
              (item.status === ConnectStatusEnum.CS_Connected || item.status === ConnectStatusEnum.CS_Connecting) ?
                <ActionButton
                  iconProps={{ iconName: 'PlugConnected' }}
                  allowDisabledFocus={true}
                  disabled={false}
                  checked={false}
                  onClick={() => this.openDisconnectGatewayDialog(item.gatewayId)}
                  styles={actionButtonStyles}
                >
                  断开
            </ActionButton> :
                <ActionButton
                  iconProps={{ iconName: 'PlugDisconnected' }}
                  allowDisabledFocus={true}
                  disabled={false}
                  checked={false}
                  onClick={() => this.props.gatewayStore.connectGatewayByGatewayId(item.gatewayId)}
                  styles={actionButtonStyles}
                >
                  连接
              </ActionButton>
            }

            <IconButton
              menuIconProps={{ iconName: 'MoreVertical' }}
              role="button"
              aria-haspopup={true}
              aria-label="Show actions"
              styles={{ root: { float: 'right', height: 'inherit' } }}
              menuProps={{
                items: [
                  {
                    key: 'edit',
                    text: '编辑',
                    iconProps: {
                      iconName: "PageEdit"
                    },
                    onClick: () => this.openEditGatewayModal(item)
                  },
                  {
                    key: 'delete',
                    text: '删除',
                    iconProps: {
                      iconName: "DeleteRows"
                    },
                    onClick: () => this.openDeleteGatewayDialog(item.gatewayId)
                  }
                ]
              }}
            />
          </span>
        );
      }
    }
    ]


    const { gatewayStore } = this.props
    const classNames = mergeStyleSets({
      wrapper: {
        height: `${this.state.windowInnerHeight - 81}px`,
        position: 'relative',
        maxHeight: 'inherit'
      }
    });

    return (
      <Stack>
        <Stack>
          <CommandBar
            items={this.getCommandBarItems()}
          />
          <div className={classNames.wrapper}>
            <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
              <DetailsList
                // styles={{ root: { height: `${this.state.windowInnerHeight-81}px`} }}
                items={gatewayStore.gatewayList}
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
        <Modal
          isOpen={this.state.showEditGatewayModal}
          isBlocking={true}
        >
          <Stack gap={12} padding={20}>

            <Stack.Item align="center">
              <Separator><div style={{ fontSize: FontSizes.xxLarge }} >基本配置</div></Separator>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <TextField label="网关ID" id='editGatewayId' disabled={true} defaultValue={this.state.editGatewayId} />
                  <TextField label="网关名称" id='editGatewayName' defaultValue={this.state.editGatewayName} errorMessage={this.state.editGatewayNameErrorMessage} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />
                  <TextField label="网关描述" id='editGatewayDescription' defaultValue={this.state.editGatewayDescription} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />
                  <TextField label="目标节点" id='editGatewayTargetNodeId' type='number' defaultValue={`${this.state.editGatewayTargetNodeId}`} errorMessage={this.state.editGatewayTargetNodeIdErrorMessage} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />

                </Stack>
                <Stack {...columnProps}>
                  {/* <TextField label="网关实现类"  id={'editGatewayImplementClassName'}   defaultValue={this.state.editGatewayImplementClassName}/> */}
                  <ComboBox
                    label="网关实现类"
                    id="editGatewayImplementClassName"
                    allowFreeform={true}
                    autoComplete={'off'}
                    options={gatewayImplementClassNameOptions}
                    onChange={(event: any, option?: IComboBoxOption, index?: number, value?: string) => {
                      if (option !== undefined) {
                        this.commonHandleFieldChange("editGatewayImplementClassName", option.text)
                      }
                    }}
                    onPendingValueChanged={(option?: IComboBoxOption, index?: number, value?: string) => {
                      if (value !== undefined) {
                        this.commonHandleFieldChange("editGatewayImplementClassName", value)
                      }
                    }}
                    errorMessage={this.state.editGatewayImplementClassNameErrorMessage}
                    text={this.state.editGatewayImplementClassName}
                  />

                  <Dropdown
                    id='editGatewayType'
                    label="网关类型"
                    defaultSelectedKey={this.state.editGatewayType}
                    options={gatewayTypeOptions}
                    styles={dropdownStyles}
                    onChange={(event: any, option?: IDropdownOption, index?: number, value?: string) => this.commonHandleFieldChange(event.target.id, index)}
                  />

                  <Dropdown
                    id='editGatewayAdapterType'
                    label="网关适配器类型"
                    defaultSelectedKey={this.state.editGatewayAdapterType}
                    options={gatewayAdapterTypeOptions}
                    styles={dropdownStyles}
                    onChange={(event: any, option?: IDropdownOption, index?: number, value?: string) => this.commonHandleFieldChange(event.target.id, index)}
                  />

                  <TextField label="自动连接时间段(t1-t2#tm-tn#...)" id='editAutoConnectTimeRanges' type='string' defaultValue={`${this.state.editAutoConnectTimeRanges}`} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />

                </Stack>
              </Stack>
            </Stack.Item>

            {this.state.editGatewayAdapterType === GatewayAdapterTypeEnum.GAT_CTP ?
              <Stack.Item align="center">
                <Separator><div style={{ fontSize: FontSizes.xxLarge }} >CTP配置</div></Separator>
              </Stack.Item> : null
            }
            {this.state.editGatewayAdapterType === GatewayAdapterTypeEnum.GAT_CTP ?
              <Stack.Item align="center">
                <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                  <Stack {...columnProps}>
                    {(this.state.editGatewayType === GatewayTypeEnum.GTE_TradeAndMarketData || this.state.editGatewayType === GatewayTypeEnum.GTE_MarketData) ?
                      <TextField label="行情主机" id={'editGatewayCtpSettingMdHost'} defaultValue={this.state.editGatewayCtpSettingMdHost} errorMessage={this.state.editGatewayCtpSettingMdHostErrorMessage} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} /> : null
                    }
                    {(this.state.editGatewayType === GatewayTypeEnum.GTE_TradeAndMarketData || this.state.editGatewayType === GatewayTypeEnum.GTE_Trade) ?
                      <TextField label="交易主机" id={'editGatewayCtpSettingTdHost'} defaultValue={this.state.editGatewayCtpSettingTdHost} errorMessage={this.state.editGatewayCtpSettingTdHostErrorMessage} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} /> : null
                    }
                    <TextField label="用户名" id={'editGatewayCtpSettingUserId'} defaultValue={this.state.editGatewayCtpSettingUserId} errorMessage={this.state.editGatewayCtpSettingUserIdErrorMessage} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />
                    <TextField label="UserProductInfo" id={'editGatewayCtpSettingUserProductInfo'} defaultValue={this.state.editGatewayCtpSettingUserProductInfo} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />
                    <TextField label="AppID" id='editGatewayCtpSettingAppId' defaultValue={this.state.editGatewayCtpSettingAppId} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />
                  </Stack>
                  <Stack {...columnProps}>

                    {/* 弃用,样式有偏差
                    <SpinButton
                      defaultValue ={`${this.state.editGatewayCtpSettingMdPort}`}
                      label={'行情端口'}
                      labelPosition={Position.top}
                      min={0}
                      max={65535}
                      step={1}
                      incrementButtonAriaLabel={'Increase value by 1'}
                      decrementButtonAriaLabel={'Decrease value by 1'}
                    /> */}

                    {(this.state.editGatewayType === GatewayTypeEnum.GTE_TradeAndMarketData || this.state.editGatewayType === GatewayTypeEnum.GTE_MarketData) ?
                      <TextField label="行情端口" id='editGatewayCtpSettingMdPort' type='number' defaultValue={`${this.state.editGatewayCtpSettingMdPort}`} errorMessage={this.state.editGatewayCtpSettingMdPortErrorMessage} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} /> : null
                    }
                    {(this.state.editGatewayType === GatewayTypeEnum.GTE_TradeAndMarketData || this.state.editGatewayType === GatewayTypeEnum.GTE_Trade) ?
                      <TextField label="交易端口" id='editGatewayCtpSettingTdPort' type='number' defaultValue={`${this.state.editGatewayCtpSettingTdPort}`} errorMessage={this.state.editGatewayCtpSettingTdPortErrorMessage} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} /> : null
                    }
                    <TextField label="密码" id='editGatewayCtpSettingPassword' type='password' defaultValue={this.state.editGatewayCtpSettingPassword} errorMessage={this.state.editGatewayCtpSettingPasswordErrorMessage} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />
                    <TextField label="AuthCode" id='editGatewayCtpSettingAuthCode' defaultValue={this.state.editGatewayCtpSettingAuthCode} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />

                    <TextField label="BrokerID" id='editGatewayCtpSettingBrokerId' defaultValue={this.state.editGatewayCtpSettingBrokerId} errorMessage={this.state.editGatewayCtpSettingBrokerIdErrorMessage} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />

                  </Stack>
                </Stack>
              </Stack.Item> : null
            }
            {this.state.editGatewayAdapterType === GatewayAdapterTypeEnum.GAT_IB ?
              <Stack.Item align="center">
                <Separator theme={theme}>IB配置</Separator>
              </Stack.Item> : null
            }

            {this.state.editGatewayAdapterType === GatewayAdapterTypeEnum.GAT_IB ?
              <Stack.Item align="center">
                <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                  <Stack {...columnProps}>
                    <TextField label="主机" id='editGatewayIbSettingHost' defaultValue={this.state.editGatewayIbSettingHost} errorMessage={this.state.editGatewayIbSettingHostErrorMessage} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />
                    <TextField label="客户端ID" id='editGatewayIbSettingClientId' type='number' defaultValue={`${this.state.editGatewayIbSettingClientId}`} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />
                  </Stack>
                  <Stack {...columnProps}>
                    <TextField label="端口" id='editGatewayIbSettingPort' type='number' defaultValue={`${this.state.editGatewayIbSettingPort}`} errorMessage={this.state.editGatewayIbSettingPortErrorMessage} onChange={(event: any, newValue?: string) => this.commonHandleFieldChange(event.target.id, newValue)} />
                  </Stack>
                </Stack>
              </Stack.Item> : null
            }

            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <PrimaryButton text="保存" onClick={() => this.saveEditGateway()} />
                </Stack>
                <Stack {...columnProps}>
                  <DefaultButton text="取消" onClick={() => this.closeEditGatewayModal()} />
                </Stack>
              </Stack>
            </Stack.Item>
          </Stack>
        </Modal>


        <Dialog
          hidden={this.state.hiddenDisconnectGatewayDialog}
          onDismiss={() => this.closeDisconnectGatewayDialog()}
          dialogContentProps={{
            type: DialogType.normal,
            title: '断开提示',
            subText: `确认断开网关？ID:${this.state.gatewayIdForDisconnect}`
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } },
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={() => this.disconnectGatewayByGatewayId()} text="断开" />
            <DefaultButton onClick={() => this.closeDisconnectGatewayDialog()} text="取消" />
          </DialogFooter>
        </Dialog>


        <Dialog
          hidden={this.state.hiddenDeleteGatewayDialog}
          onDismiss={this.closeDeleteGatewayDialog}
          dialogContentProps={{
            type: DialogType.normal,
            title: '删除提示',
            subText: `确认删除网关？ID:${this.state.gatewayIdForDelete},此操作将同时断开当前网关ID存在的连接`
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } },
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={() => this.deleteGatewayByGatewayId()} text="删除" />
            <DefaultButton onClick={() => this.closeDeleteGatewayDialog()} text="取消" />
          </DialogFooter>
        </Dialog>

        <Dialog
          hidden={this.state.hiddenConnectAllGatewaysDialog}
          onDismiss={this.closeConnectAllGatewaysDialog}
          dialogContentProps={{
            type: DialogType.normal,
            title: '连接提示',
            subText: "确认连接全部网关?"
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } },
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={() => this.connectAllGateways()} text="连接全部" />
            <DefaultButton onClick={() => this.closeConnectAllGatewaysDialog()} text="取消" />
          </DialogFooter>
        </Dialog>

        <Dialog
          hidden={this.state.hiddenDisconnectAllGatewaysDialog}
          onDismiss={this.closeDisconnectAllGatewaysDialog}
          dialogContentProps={{
            type: DialogType.normal,
            title: '断开提示',
            subText: "确认断开全部网关?"
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } },
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={() => this.disconnectAllGateways()} text="断开全部" />
            <DefaultButton onClick={() => this.closeDisconnectAllGatewaysDialog()} text="取消" />
          </DialogFooter>
        </Dialog>

      </Stack>
    );
  }

  private openConnectAllGatewaysDialog = () => {
    this.setState({ hiddenConnectAllGatewaysDialog: false, });
  }

  private closeConnectAllGatewaysDialog = () => {
    this.setState({ hiddenConnectAllGatewaysDialog: true });
  }
  private connectAllGateways = () => {
    const { gatewayStore } = this.props
    gatewayStore.connectAllGateways()
    this.closeConnectAllGatewaysDialog();
  }

  private openDisconnectAllGatewaysDialog = () => {
    this.setState({ hiddenDisconnectAllGatewaysDialog: false, });
  }

  private closeDisconnectAllGatewaysDialog = () => {
    this.setState({ hiddenDisconnectAllGatewaysDialog: true });
  }
  private disconnectAllGateways = () => {
    const { gatewayStore } = this.props
    gatewayStore.disconnectAllGateways()
    this.closeDisconnectAllGatewaysDialog();
  }

  private openDisconnectGatewayDialog = (gatewayId: string) => {
    this.setState({ gatewayIdForDisconnect: gatewayId, hiddenDisconnectGatewayDialog: false, });
  }

  private closeDisconnectGatewayDialog = () => {
    this.setState({ hiddenDisconnectGatewayDialog: true, gatewayIdForDisconnect: '' });
  }
  private disconnectGatewayByGatewayId = () => {
    const { gatewayStore } = this.props
    gatewayStore.disconnectGatewayByGatewayId(this.state.gatewayIdForDisconnect)
    this.closeDisconnectGatewayDialog();
  }

  private openDeleteGatewayDialog = (gatewayId: number) => {
    this.setState({ gatewayIdForDelete: gatewayId, hiddenDeleteGatewayDialog: false });
  }

  private closeDeleteGatewayDialog = () => {
    this.setState({ hiddenDeleteGatewayDialog: true, gatewayIdForDelete: null });
  }

  private deleteGatewayByGatewayId = () => {
    const { gatewayStore } = this.props
    gatewayStore.deleteGatewayByGatewayId(this.state.gatewayIdForDelete)
    this.closeDeleteGatewayDialog();
  }

  private getCommandBarItems = () => {

    const { gatewayStore } = this.props
    return [
      {
        key: 'add',
        name: '新增',
        iconProps: {
          iconName: 'Add'
        },
        onClick: () => this.openEditGatewayModal(null)
      },
      {
        key: 'refresh',
        name: '刷新',
        iconProps: {
          iconName: 'Refresh'
        },
        onClick: () => gatewayStore.getGatewayList()
      },
      {
        key: 'connectAll',
        name: '全部连接',
        iconProps: {
          iconName: 'PlugConnected'
        },
        onClick: () => this.openConnectAllGatewaysDialog()
      },
      {
        key: 'disconnectAll',
        name: '全部断开',
        iconProps: {
          iconName: 'PlugDisconnected'
        },
        onClick: () => this.openDisconnectAllGatewaysDialog()
      }
    ];
  }

  private commonHandleFieldChange(id: string, value: any) {
    this.setState({ [id]: value }, () => this.validateAllField())
  }



  private validateEditGatewayName() {
    if (!this.state.editGatewayName || this.state.editGatewayName === '') {
      return { status: false, message: { "editGatewayNameErrorMessage": '名称不可为空' } }
    }
    return { status: true, message: { "editGatewayNameErrorMessage": '' } }
  }

  private validateEditGatewayTargetNodeId() {
    if (!this.state.editGatewayTargetNodeId || !normalIntegerPattern.test(`${this.state.editGatewayTargetNodeId}`)) {
      return { status: false, message: { "editGatewayTargetNodeIdErrorMessage": '目标节点为数字且不可为空' } }
    }
    return { status: true, message: { "editGatewayTargetNodeIdErrorMessage": '' } }
  }


  private validateEditGatewayImplementClassName() {
    if (!this.state.editGatewayImplementClassName || this.state.editGatewayImplementClassName === '') {
      return { status: false, message: { "editGatewayImplementClassNameErrorMessage": '实现类不可为空' } }
    }
    return { status: true, message: { "editGatewayImplementClassNameErrorMessage": '' } }
  }

  private validateEditGatewayCtpSettingUserId() {
    if (!this.state.editGatewayCtpSettingUserId || this.state.editGatewayCtpSettingUserId === '') {
      return { status: false, message: { "editGatewayCtpSettingUserIdErrorMessage": '用户名不可为空' } }
    }
    return { status: true, message: { "editGatewayCtpSettingUserIdErrorMessage": '' } }
  }

  private validateEditGatewayCtpSettingBrokerId() {
    if (!this.state.editGatewayCtpSettingBrokerId || this.state.editGatewayCtpSettingBrokerId === '') {
      return { status: false, message: { "editGatewayCtpSettingBrokerIdErrorMessage": '用户名不可为空' } }
    }
    return { status: true, message: { "editGatewayCtpSettingBrokerIdErrorMessage": '' } }
  }

  private validateEditGatewayCtpSettingPassword() {
    if (!this.state.editGatewayCtpSettingPassword || this.state.editGatewayCtpSettingPassword === '') {
      return { status: false, message: { "editGatewayCtpSettingPasswordErrorMessage": '密码不可为空' } }
    }
    return { status: true, message: { "editGatewayCtpSettingPasswordErrorMessage": '' } }
  }


  private validateEditGatewayCtpSettingMdHost() {
    if (!hostNamePattern.test(this.state.editGatewayCtpSettingMdHost) && !ipv4PattenPattern.test(this.state.editGatewayCtpSettingMdHost)) {
      return { status: false, message: { "editGatewayCtpSettingMdHostErrorMessage": '错误的主机' } }
    }
    return { status: true, message: { "editGatewayCtpSettingMdHostErrorMessage": '' } }
  }

  private validateEditGatewayCtpSettingMdPort() {
    if (!portPattern.test(`${this.state.editGatewayCtpSettingMdPort}`)) {
      return { status: false, message: { "editGatewayCtpSettingMdPortErrorMessage": '错误的端口' } }
    }
    return { status: true, message: { "editGatewayCtpSettingMdPortErrorMessage": '' } }
  }

  private validateEditGatewayCtpSettingTdHost() {
    if (!hostNamePattern.test(this.state.editGatewayCtpSettingTdHost) && !ipv4PattenPattern.test(this.state.editGatewayCtpSettingTdHost)) {
      return { status: false, message: { "editGatewayCtpSettingTdHostErrorMessage": '错误的主机' } }
    }
    return { status: true, message: { "editGatewayCtpSettingTdHostErrorMessage": '' } }
  }

  private validateEditGatewayCtpSettingTdPort() {
    if (!portPattern.test(`${this.state.editGatewayCtpSettingTdPort}`)) {
      return { status: false, message: { "editGatewayCtpSettingTdPortErrorMessage": '错误的端口' } }
    }
    return { status: true, message: { "editGatewayCtpSettingTdPortErrorMessage": '' } }
  }

  private validateEditGatewayIbSettingHost() {
    if (!hostNamePattern.test(this.state.editGatewayIbSettingHost) && !ipv4PattenPattern.test(this.state.editGatewayIbSettingHost)) {
      return { status: false, message: { "editGatewayIbSettingHostErrorMessage": '错误的主机' } }
    }
    return { status: true, message: { "editGatewayIbSettingHostErrorMessage": '' } }
  }

  private validateEditGatewayIbSettingPort() {
    if (!portPattern.test(`${this.state.editGatewayIbSettingPort}`)) {
      return { status: false, message: { "editGatewayIbSettingPortErrorMessage": '错误的端口' } }
    }
    return { status: true, message: { "editGatewayIbSettingPortErrorMessage": '' } }
  }



  private validateAllField() {
    let errorMessateState = {}

    let isValidated = true;

    let result;

    result = this.validateEditGatewayName();
    isValidated = isValidated && result.status
    errorMessateState = {
      ...errorMessateState,
      ...result.message
    }

    result = this.validateEditGatewayTargetNodeId();
    isValidated = isValidated && result.status
    errorMessateState = {
      ...errorMessateState,
      ...result.message
    }

    result = this.validateEditGatewayImplementClassName();
    isValidated = isValidated && result.status
    errorMessateState = {
      ...errorMessateState,
      ...result.message
    }


    // 验证CTP字段
    if (this.state.editGatewayAdapterType === GatewayAdapterTypeEnum.GAT_CTP) {
      result = this.validateEditGatewayCtpSettingUserId();
      isValidated = isValidated && result.status
      errorMessateState = {
        ...errorMessateState,
        ...result.message
      }

      result = this.validateEditGatewayCtpSettingPassword();
      isValidated = isValidated && result.status
      errorMessateState = {
        ...errorMessateState,
        ...result.message
      }

      result = this.validateEditGatewayCtpSettingBrokerId();
      isValidated = isValidated && result.status
      errorMessateState = {
        ...errorMessateState,
        ...result.message
      }


      if (this.state.editGatewayType === GatewayTypeEnum.GTE_TradeAndMarketData || this.state.editGatewayType === GatewayTypeEnum.GTE_MarketData) {
        result = this.validateEditGatewayCtpSettingMdHost();
        isValidated = isValidated && result.status
        errorMessateState = {
          ...errorMessateState,
          ...result.message
        }
        result = this.validateEditGatewayCtpSettingMdPort();
        isValidated = isValidated && result.status
        errorMessateState = {
          ...errorMessateState,
          ...result.message
        }
      }


      if (this.state.editGatewayType === GatewayTypeEnum.GTE_TradeAndMarketData || this.state.editGatewayType === GatewayTypeEnum.GTE_Trade) {
        result = this.validateEditGatewayCtpSettingTdHost();
        isValidated = isValidated && result.status
        errorMessateState = {
          ...errorMessateState,
          ...result.message
        }
        result = this.validateEditGatewayCtpSettingTdPort();
        isValidated = isValidated && result.status
        errorMessateState = {
          ...errorMessateState,
          ...result.message
        }
      }

      // 验证IB字段
    } else {
      result = this.validateEditGatewayIbSettingHost();
      isValidated = isValidated && result.status
      errorMessateState = {
        ...errorMessateState,
        ...result.message
      }
      result = this.validateEditGatewayIbSettingPort();
      isValidated = isValidated && result.status
      errorMessateState = {
        ...errorMessateState,
        ...result.message
      }
    }


    this.setState(errorMessateState)
    return isValidated;
  }

  private openEditGatewayModal(gateway: any) {
    let newState = {}


    if (gateway !== undefined && gateway !== null) {

      newState = {
        ...newState,
        "editGatewayId": gateway.gatewayId,
        "editGatewayName": gateway.gatewayName,
        "editGatewayTargetNodeId": gateway.targetNodeId,
        "editGatewayDescription": gateway.gatewayDescription,
        "editGatewayImplementClassName": gateway.implementClassName,
        "editGatewayType": gateway.gatewayType,
        "editGatewayAdapterType": gateway.gatewayAdapterType,
        "editAutoConnectTimeRanges": gateway.autoConnectTimeRanges
      }

      if (gateway.ctpSetting !== undefined && gateway.ctpSetting !== null) {
        newState = {
          ...newState,
          "editGatewayCtpSettingUserId": gateway.ctpSetting.userId,
          "editGatewayCtpSettingPassword": gateway.ctpSetting.password,
          "editGatewayCtpSettingMdHost": gateway.ctpSetting.mdHost,
          "editGatewayCtpSettingMdPort": gateway.ctpSetting.mdPort,
          "editGatewayCtpSettingTdHost": gateway.ctpSetting.tdHost,
          "editGatewayCtpSettingTdPort": gateway.ctpSetting.tdPort,
          "editGatewayCtpSettingUserProductInfo": gateway.ctpSetting.userProductInfo,
          "editGatewayCtpSettingAuthCode": gateway.ctpSetting.authCode,
          "editGatewayCtpSettingAppId": gateway.ctpSetting.appId,
          "editGatewayCtpSettingBrokerId": gateway.ctpSetting.brokerId,
        }
      }

      if (gateway.ibSetting !== undefined && gateway.ibSetting !== null) {
        newState = {
          ...newState,
          "editGatewayIbSettingClientId": gateway.ibSetting.clientId,
          "editGatewayIbSettingHost": gateway.ibSetting.host,
          "editGatewayIbSettingPort": gateway.ibSetting.port,
        }
      }
    }
    newState = {
      ...newState,
      "showEditGatewayModal": true,
    }
    this.setState(newState)

  }

  private closeEditGatewayModal() {
    this.setState({
      "showEditGatewayModal": false,
      // -----------------------------------------
      "editGatewayId": '',
      "editGatewayName": '',
      "editGatewayNameErrorMessage": '',
      "editGatewayDescription": '',
      "editGatewayTargetNodeId": 10000,
      "editGatewayTargetNodeIdErrorMessage": '',
      "editGatewayImplementClassName": '',
      "editGatewayImplementClassNameErrorMessage": '',
      "editGatewayType": 0,
      "editGatewayAdapterType": 0,
      "editAutoConnectTimeRanges": '',
      "editGatewayCtpSettingUserId": '',
      "editGatewayCtpSettingUserIdErrorMessage": '',
      "editGatewayCtpSettingPassword": '',
      "editGatewayCtpSettingPasswordErrorMessage": '',
      "editGatewayCtpSettingMdHost": '',
      "editGatewayCtpSettingMdHostErrorMessage": '',
      "editGatewayCtpSettingMdPort": 0,
      "editGatewayCtpSettingMdPortErrorMessage": '',
      "editGatewayCtpSettingTdHost": '',
      "editGatewayCtpSettingTdHostErrorMessage": '',
      "editGatewayCtpSettingTdPort": 0,
      "editGatewayCtpSettingTdPortErrorMessage": '',
      "editGatewayCtpSettingUserProductInfo": '',
      "editGatewayCtpSettingAuthCode": '',
      "editGatewayCtpSettingAppId": '',
      "editGatewayCtpSettingBrokerId": '',
      'editGatewayCtpSettingBrokerIdErrorMessage': '',
      "editGatewayIbSettingClientId": 0,
      "editGatewayIbSettingHost": '127.0.0.1',
      "editGatewayIbSettingHostErrorMessage": '',
      "editGatewayIbSettingPort": 7496,
      "editGatewayIbSettingPortErrorMessage": ''
    })
  }

  private saveEditGateway() {
    if (this.validateAllField()) {
      const gateway = {
        "gatewayId": this.state.editGatewayId,
        "gatewayName": this.state.editGatewayName,
        "targetNodeId": parseInt(`${this.state.editGatewayTargetNodeId}`, 0),
        "gatewayDescription": this.state.editGatewayDescription,
        "implementClassName": this.state.editGatewayImplementClassName,
        "gatewayType": parseInt(`${this.state.editGatewayType}`, 0),
        "gatewayAdapterType": parseInt(`${this.state.editGatewayAdapterType}`, 0),
        "autoConnectTimeRanges": this.state.editAutoConnectTimeRanges,
        "ctpSetting": {
          "userId": this.state.editGatewayCtpSettingUserId,
          "password": this.state.editGatewayCtpSettingPassword,
          "mdHost": this.state.editGatewayCtpSettingMdHost,
          "mdPort": parseInt(`${this.state.editGatewayCtpSettingMdPort}`, 0),
          "tdHost": this.state.editGatewayCtpSettingTdHost,
          "tdPort": parseInt(`${this.state.editGatewayCtpSettingTdPort}`, 0),
          "userProductInfo": this.state.editGatewayCtpSettingUserProductInfo,
          "authCode": this.state.editGatewayCtpSettingAuthCode,
          "appId": this.state.editGatewayCtpSettingAppId,
          "brokerId": this.state.editGatewayCtpSettingBrokerId
        },
        "ibSetting": {
          "clientId": parseInt(`${this.state.editGatewayIbSettingClientId}`, 0),
          "host": this.state.editGatewayIbSettingHost,
          "port": parseInt(`${this.state.editGatewayIbSettingPort}`, 0),
        }
      }
      this.props.gatewayStore.saveOrUpdateGateway(gateway)
      this.closeEditGatewayModal()
    } else {
      toast.warn("请将表单中标红的字段修正后提交")
    }
  }


}

export default withRouter(GatewayPage);