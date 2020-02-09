import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { inject, observer } from 'mobx-react';
// import { counterStore, routingStore } from '../stores'
// import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { withRouter } from 'react-router';
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn, IDetailsHeaderProps, ConstrainMode, IDetailsFooterProps } from 'office-ui-fabric-react/lib/DetailsList';
import { PrimaryButton, DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { FontSizes } from 'office-ui-fabric-react/lib/Styling';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { toast } from 'react-toastify';
import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { IRenderFunction } from 'office-ui-fabric-react/lib/Utilities';

const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } }
};

@inject('userStore')
@observer
export class UserPage extends React.Component<any> {

  public state = {
    hiddenDeleteUserDialog: true,
    usernameForDelete: null,
    editUserDescription: '',
    editUsername: "",
    editUserPassword: null,
    editCanReadGateway: false,
    editCanChangeGatewayStatus: false,
    editCanWriteGateway: false,
    editCanReadUser: false,
    editCanChangeUserStatus: false,
    editCanWriteUser: false,
    editCanReadOperator: false,
    editCanChangeOperatorStatus: false,
    editCanWriteOperator: false,
    editCanReadNode: false,
    editCanChangeNodeToken: false,
    editCanWriteNode: false,
    editCanReadLog: false,
    editCanReadMarketDataRecording: false,
    editCanWriteMarketDataRecording: false,
    showUpdateUserDescriptionModal: false,
    showUpdateUserPasswordModal: false,
    showEditPermissionModal: false,
    showAddUserModal: false,
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
    const { userStore } = this.props

    userStore.getUserList()

  }

  public render() {

    // const { routes, location } = this.props;

    const columns: IColumn[] = [{
      key: "username",
      name: "用户名",
      minWidth: 50,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.username}</span>
        );
      }
    }, {
      key: "operatorId",
      name: "操作者ID",
      minWidth: 250,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.operatorId}</span>
        );
      }
    }, {
      key: "description",
      name: "描述",
      minWidth: 200,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.description}</span>
        );
      }
    },
    {
      key: "loginTimes",
      name: "登录次数",
      minWidth: 50,
      isResizable: true,
      isCollapsible: true,
      data: 'number',
      onRender: (item) => {
        return (
          <span>{item.loginTimes}</span>
        );
      }
    }, {
      key: "recentlyNodeId",
      name: "最近的节点ID",
      minWidth: 60,
      isResizable: true,
      isCollapsible: true,
      data: 'number',
      onRender: (item) => {
        return (
          <span>{item.recentlyNodeId}</span>
        );
      }
    }, {
      key: "recentlySessionId",
      name: "最近的会话ID",
      minWidth: 250,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.recentlySessionId}</span>
        );
      }
    }, {
      key: "recentlyIpAddress",
      name: "最近的IP地址",
      minWidth: 100,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.recentlyIpAddress}</span>
        );
      }
    }, {
      key: "recentlyPort",
      name: "最近的端口",
      minWidth: 60,
      isResizable: true,
      isCollapsible: true,
      data: 'number',
      onRender: (item) => {
        return (
          <span>{item.recentlyPort}</span>
        );
      }
    }, {
      key: "recentlyLoginTime",
      name: "最近的登录时间",
      minWidth: 100,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.recentlyLoginTime}</span>
        );
      }
    }, {
      key: "recentlyLogoutTime",
      name: "最近的断开时间",
      minWidth: 100,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        return (
          <span>{item.recentlyLogoutTime}</span>
        );
      }
    }, {
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
                  key: 'editPermission',
                  text: '更新权限',
                  iconProps: {
                    iconName: "Shield"
                  },
                  onClick: () => this.openEditPermissionModal(item)
                },
                {
                  key: 'updateUserPassword',
                  text: '更新密码',
                  iconProps: {
                    iconName: "AzureKeyVault"
                  },
                  onClick: () => this.openUpdateUserPasswordModal(item.username)
                },
                {
                  key: 'updateDescription',
                  text: '更新描述',
                  iconProps: {
                    iconName: "EditNote"
                  },
                  onClick: () => this.openUpdateUserDescriptionModal(item.username, item.description)
                },
                {
                  key: 'delete',
                  text: '删除',
                  iconProps: {
                    iconName: "DeleteRows"
                  },
                  onClick: () => this.openDeleteUserDialog(item.username)
                }
              ]
            }}
          />
        );
      }
    }

    ]

    const { userStore } = this.props
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
          // 以下功能可扩展开发 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
          // overflowItems={this.getOverlflowItems()}
          // overflowButtonProps={{ ariaLabel: 'More commands' }}
          // farItems={this.getFarItems()}
          // ariaLabel={'Use left and right arrow keys to navigate between commands'}
          />
          <div className={classNames.wrapper}>
            <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
              <DetailsList
                // styles={{ root: { height: `${this.state.windowInnerHeight-81}px`} }}
                items={userStore.userList}
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
          isOpen={this.state.showAddUserModal}
          isBlocking={false}
          onDismiss={() => this.closeAddUserModal()}
        >
          <Stack gap={12} padding={20}>
            <Stack.Item align="center">
              <Separator><div style={{ fontSize: FontSizes.xxLarge }} >新增用户</div></Separator>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <Separator><div style={{ fontSize: FontSizes.medium }} >基本信息</div></Separator>
                </Stack>
              </Stack>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <TextField label="用户名" onChange={(event: any) => { this.commonHandleFieldChange("editUsername", event.target.value) }} />
                  <TextField label="密码" type="password" onChange={(event: any, newValue?: string) => this.editUserPasswordOnChange(event)} />
                </Stack>
                <Stack {...columnProps}>
                  <TextField label="用户描述" multiline={true} resizable={true} onChange={(event: any, newValue?: string) => this.editUserDescriptionOnChange(event)} />
                </Stack>
              </Stack>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <Separator><div style={{ fontSize: FontSizes.medium }} >用户权限</div></Separator>
                </Stack>
              </Stack>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <Checkbox label="读取网关" checked={this.state.editCanReadGateway} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadGateway", event.currentTarget.checked) }} />
                  <Checkbox label="写入网关" checked={this.state.editCanWriteGateway} onChange={(event: any) => { this.commonHandleFieldChange("editCanWriteGateway", event.currentTarget.checked) }} />
                  <Checkbox label="写入用户" checked={this.state.editCanWriteUser} onChange={(event: any) => { this.commonHandleFieldChange("editCanWriteUser", event.currentTarget.checked) }} />
                  <Checkbox label="写入操作者" checked={this.state.editCanWriteOperator} onChange={(event: any) => { this.commonHandleFieldChange("editCanWriteOperator", event.currentTarget.checked) }} />
                  <Checkbox label="更改节点令牌" checked={this.state.editCanChangeNodeToken} onChange={(event: any) => { this.commonHandleFieldChange("editCanChangeNodeToken", event.currentTarget.checked) }} />
                  <Checkbox label="读取日志" checked={this.state.editCanReadLog} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadLog", event.currentTarget.checked) }} />
                  <Checkbox label="写入行情记录列表" checked={this.state.editCanWriteMarketDataRecording} onChange={(event: any) => { this.commonHandleFieldChange("editCanWriteMarketDataRecording", event.currentTarget.checked) }} />
                </Stack>
                <Stack {...columnProps}>
                  <Checkbox label="更改网关状态" checked={this.state.editCanChangeGatewayStatus} onChange={(event: any) => { this.commonHandleFieldChange("editCanChangeGatewayStatus", event.currentTarget.checked) }} />
                  <Checkbox label="读取用户" checked={this.state.editCanReadUser} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadUser", event.currentTarget.checked) }} />
                  <Checkbox label="读取操作者" checked={this.state.editCanReadOperator} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadOperator", event.currentTarget.checked) }} />
                  <Checkbox label="读取节点" checked={this.state.editCanReadNode} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadNode", event.currentTarget.checked) }} />
                  <Checkbox label="写入节点" checked={this.state.editCanWriteNode} onChange={(event: any) => { this.commonHandleFieldChange("editCanWriteNode", event.currentTarget.checked) }} />
                  <Checkbox label="读取行情记录列表" checked={this.state.editCanReadMarketDataRecording} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadMarketDataRecording", event.currentTarget.checked) }} />
                </Stack>
              </Stack>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <PrimaryButton text="保存" onClick={() => this.addUser()} />
                </Stack>
                <Stack {...columnProps}>
                  <DefaultButton text="取消" onClick={() => this.closeAddUserModal()} />
                </Stack>
              </Stack>
            </Stack.Item>
          </Stack>
        </Modal>

        <Modal
          isOpen={this.state.showEditPermissionModal}
          isBlocking={false}
          onDismiss={() => this.closeEditPermissionModal()}
        >
          <Stack gap={12} padding={20}>
            <Stack.Item align="center">
              <Separator><div style={{ fontSize: FontSizes.xxLarge }} >更新用户权限</div></Separator>
              <Separator><div style={{ fontSize: FontSizes.medium }} >{this.state.editUsername}</div></Separator>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <Checkbox label="读取网关" checked={this.state.editCanReadGateway} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadGateway", event.currentTarget.checked) }} />
                  <Checkbox label="写入网关" checked={this.state.editCanWriteGateway} onChange={(event: any) => { this.commonHandleFieldChange("editCanWriteGateway", event.currentTarget.checked) }} />
                  <Checkbox label="写入用户" checked={this.state.editCanWriteUser} onChange={(event: any) => { this.commonHandleFieldChange("editCanWriteUser", event.currentTarget.checked) }} />
                  <Checkbox label="写入操作者" checked={this.state.editCanWriteOperator} onChange={(event: any) => { this.commonHandleFieldChange("editCanWriteOperator", event.currentTarget.checked) }} />
                  <Checkbox label="更改节点令牌" checked={this.state.editCanChangeNodeToken} onChange={(event: any) => { this.commonHandleFieldChange("editCanChangeNodeToken", event.currentTarget.checked) }} />
                  <Checkbox label="读取日志" checked={this.state.editCanReadLog} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadLog", event.currentTarget.checked) }} />
                  <Checkbox label="写入行情记录列表" checked={this.state.editCanWriteMarketDataRecording} onChange={(event: any) => { this.commonHandleFieldChange("editCanWriteMarketDataRecording", event.currentTarget.checked) }} />
                </Stack>
                <Stack {...columnProps}>
                  <Checkbox label="更改网关状态" checked={this.state.editCanChangeGatewayStatus} onChange={(event: any) => { this.commonHandleFieldChange("editCanChangeGatewayStatus", event.currentTarget.checked) }} />
                  <Checkbox label="读取用户" checked={this.state.editCanReadUser} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadUser", event.currentTarget.checked) }} />
                  <Checkbox label="读取操作者" checked={this.state.editCanReadOperator} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadOperator", event.currentTarget.checked) }} />
                  <Checkbox label="读取节点" checked={this.state.editCanReadNode} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadNode", event.currentTarget.checked) }} />
                  <Checkbox label="写入节点" checked={this.state.editCanWriteNode} onChange={(event: any) => { this.commonHandleFieldChange("editCanWriteNode", event.currentTarget.checked) }} />
                  <Checkbox label="读取行情记录列表" checked={this.state.editCanReadMarketDataRecording} onChange={(event: any) => { this.commonHandleFieldChange("editCanReadMarketDataRecording", event.currentTarget.checked) }} />
                </Stack>
              </Stack>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <PrimaryButton text="保存" onClick={() => this.updateUserPermissionByUsername()} />
                </Stack>
                <Stack {...columnProps}>
                  <DefaultButton text="取消" onClick={() => this.closeEditPermissionModal()} />
                </Stack>
              </Stack>
            </Stack.Item>
          </Stack>
        </Modal>

        <Dialog
          hidden={this.state.hiddenDeleteUserDialog}
          onDismiss={() => this.closeDeleteUserDialog()}
          dialogContentProps={{
            type: DialogType.normal,
            title: '删除用户提示',
            subText: `确认删除用户？ID:${this.state.usernameForDelete},此操作将断开当前ID存在的会话`
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } },
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={() => this.deleteUserByUsername()} text="删除" />
            <DefaultButton onClick={() => this.closeDeleteUserDialog()} text="取消" />
          </DialogFooter>
        </Dialog>

        <Modal
          isOpen={this.state.showUpdateUserDescriptionModal}
          isBlocking={false}
          onDismiss={() => this.closeUpdateUserDescriptionModal()}
        >
          <Stack gap={12} padding={20}>


            <Stack.Item align="center">
              <Separator><div style={{ fontSize: FontSizes.xxLarge }} >更新用户描述</div></Separator>
              <Separator><div style={{ fontSize: FontSizes.medium }} >{this.state.editUsername}</div></Separator>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <TextField label="用户描述" multiline={true} resizable={true} defaultValue={this.state.editUserDescription ? this.state.editUserDescription : ""} onChange={(event: any, newValue?: string) => this.editUserDescriptionOnChange(event)} />
                </Stack>
              </Stack>
            </Stack.Item>



            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <PrimaryButton text="保存" onClick={() => this.updateUserDescriptionByUsername()} />
                  <DefaultButton text="取消" onClick={() => this.closeUpdateUserDescriptionModal()} />
                </Stack>
              </Stack>
            </Stack.Item>
          </Stack>
        </Modal>

        <Modal
          isOpen={this.state.showUpdateUserPasswordModal}
          isBlocking={false}
          onDismiss={() => this.closeUpdateUserPasswordModal()}
        >
          <Stack gap={12} padding={20}>


            <Stack.Item align="center">
              <Separator><div style={{ fontSize: FontSizes.xxLarge }} >更新用户密码</div></Separator>
              <Separator><div style={{ fontSize: FontSizes.medium }} >{this.state.editUsername}</div></Separator>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <TextField label="新密码" type="password" onChange={(event: any, newValue?: string) => this.editUserPasswordOnChange(event)} />
                </Stack>
              </Stack>
            </Stack.Item>



            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <PrimaryButton text="保存" onClick={() => this.updateUserPasswordByUsername()} />
                  <DefaultButton text="取消" onClick={() => this.closeUpdateUserPasswordModal()} />
                </Stack>
              </Stack>
            </Stack.Item>
          </Stack>
        </Modal>

      </Stack>
    );
  }


  private commonHandleFieldChange(id: string, value: any) {
    this.setState({ [id]: value })
  }

  private openAddUserModal = () => {
    this.setState({
      showAddUserModal: true,
      editUsername: '',
      editUserPassword: "",
      editUserDescription: "",
      editCanReadGateway: false,
      editCanChangeGatewayStatus: false,
      editCanWriteGateway: false,
      editCanReadUser: false,
      editCanChangeUserStatus: false,
      editCanWriteUser: false,
      editCanReadOperator: false,
      editCanChangeOperatorStatus: false,
      editCanWriteOperator: false,
      editCanReadNode: false,
      editCanChangeNodeToken: false,
      editCanWriteNode: false,
      editCanReadLog: false,
      editCanReadMarketDataRecording: false,
      editCanWriteMarketDataRecording: false
    });
  }

  private closeAddUserModal = () => {
    this.setState({
      showAddUserModal: false,
      editUsername: '',
      editUserPassword: "",
      editUserDescription: "",
      editCanReadGateway: false,
      editCanChangeGatewayStatus: false,
      editCanWriteGateway: false,
      editCanReadUser: false,
      editCanChangeUserStatus: false,
      editCanWriteUser: false,
      editCanReadOperator: false,
      editCanChangeOperatorStatus: false,
      editCanWriteOperator: false,
      editCanReadNode: false,
      editCanChangeNodeToken: false,
      editCanWriteNode: false,
      editCanReadLog: false,
      editCanReadMarketDataRecording: false,
      editCanWriteMarketDataRecording: false
    });
  }

  private addUser = () => {

    const { userStore } = this.props;

    if (!this.state.editUsername || this.state.editUsername === "") {
      toast.error("用户名不可为空");
      return;
    }

    if (!this.state.editUserPassword || this.state.editUserPassword === "") {
      toast.error("密码不可为空");
      return;
    }

    let checked = true;
    if (userStore.userList) {
      userStore.userList.forEach((element: any) => {
        if (element.username === this.state.editUsername) {
          checked = false;
        }
      });
    }

    if (!checked) {
      toast.error("用户名不可重复");
      return;
    }

    const user = {
      username: this.state.editUsername,
      newPassword: this.state.editUserPassword,
      description: this.state.editUserDescription,
      canReadGateway: this.state.editCanReadGateway,
      canChangeGatewayStatus: this.state.editCanChangeGatewayStatus,
      canWriteGateway: this.state.editCanWriteGateway,
      canReadUser: this.state.editCanReadUser,
      canChangeUserStatus: this.state.editCanChangeUserStatus,
      canWriteUser: this.state.editCanWriteUser,
      canReadOperator: this.state.editCanReadOperator,
      canChangeOperatorStatus: this.state.editCanChangeOperatorStatus,
      canWriteOperator: this.state.editCanWriteOperator,
      canReadNode: this.state.editCanReadNode,
      canChangeNodeToken: this.state.editCanChangeNodeToken,
      canWriteNode: this.state.editCanWriteNode,
      canReadLog: this.state.editCanReadLog,
      canReadMarketDataRecording: this.state.editCanReadMarketDataRecording,
      canWriteMarketDataRecording: this.state.editCanWriteMarketDataRecording
    }

    userStore.addUser(user)
    this.closeAddUserModal()
  }


  private openEditPermissionModal = (user: any) => {
    this.setState({
      showEditPermissionModal: true,
      editUsername: user.username,
      editCanReadGateway: user.canReadGateway ? true : false,
      editCanChangeGatewayStatus: user.canChangeGatewayStatus ? true : false,
      editCanWriteGateway: user.canWriteGateway ? true : false,
      editCanReadUser: user.canReadUser ? true : false,
      editCanChangeUserStatus: user.canChangeUserStatus ? true : false,
      editCanWriteUser: user.canWriteUser ? true : false,
      editCanReadOperator: user.canReadOperator ? true : false,
      editCanChangeOperatorStatus: user.canChangeOperatorStatus ? true : false,
      editCanWriteOperator: user.canWriteOperator ? true : false,
      editCanReadNode: user.canReadNode ? true : false,
      editCanChangeNodeToken: user.canChangeNodeToken ? true : false,
      editCanWriteNode: user.canWriteNode ? true : false,
      editCanReadLog: user.canReadLog ? true : false,
      editCanReadMarketDataRecording: user.canReadMarketDataRecording ? true : false,
      editCanWriteMarketDataRecording: user.canWriteMarketDataRecording ? true : false
    });
  }

  private closeEditPermissionModal = () => {
    this.setState({
      showEditPermissionModal: false,
      editUsername: '',
      editCanReadGateway: false,
      editCanChangeGatewayStatus: false,
      editCanWriteGateway: false,
      editCanReadUser: false,
      editCanChangeUserStatus: false,
      editCanWriteUser: false,
      editCanReadOperator: false,
      editCanChangeOperatorStatus: false,
      editCanWriteOperator: false,
      editCanReadNode: false,
      editCanChangeNodeToken: false,
      editCanWriteNode: false,
      editCanReadLog: false,
      editCanReadMarketDataRecording: false,
      editCanWriteMarketDataRecording: false
    });
  }

  private updateUserPermissionByUsername = () => {
    const user = {
      username: this.state.editUsername,
      canReadGateway: this.state.editCanReadGateway,
      canChangeGatewayStatus: this.state.editCanChangeGatewayStatus,
      canWriteGateway: this.state.editCanWriteGateway,
      canReadUser: this.state.editCanReadUser,
      canChangeUserStatus: this.state.editCanChangeUserStatus,
      canWriteUser: this.state.editCanWriteUser,
      canReadOperator: this.state.editCanReadOperator,
      canChangeOperatorStatus: this.state.editCanChangeOperatorStatus,
      canWriteOperator: this.state.editCanWriteOperator,
      canReadNode: this.state.editCanReadNode,
      canChangeNodeToken: this.state.editCanChangeNodeToken,
      canWriteNode: this.state.editCanWriteNode,
      canReadLog: this.state.editCanReadLog,
      canReadMarketDataRecording: this.state.editCanReadMarketDataRecording,
      canWriteMarketDataRecording: this.state.editCanWriteMarketDataRecording
    }
    this.props.userStore.updateUserPermissionByUsername(user)
    this.closeEditPermissionModal()
  }

  private openDeleteUserDialog = (username: number) => {
    this.setState({ usernameForDelete: username, hiddenDeleteUserDialog: false });
  }

  private closeDeleteUserDialog = () => {
    this.setState({ hiddenDeleteUserDialog: true, usernameForDelete: null });
  }

  private deleteUserByUsername = () => {
    const { userStore } = this.props
    userStore.deleteUserByUsername(this.state.usernameForDelete)
    this.closeDeleteUserDialog();
  }

  private openUpdateUserPasswordModal = (username: string) => {
    this.setState({ editUsername: username, showUpdateUserPasswordModal: true });
  }

  private closeUpdateUserPasswordModal = () => {
    this.setState({ showUpdateUserPasswordModal: false, editUsername: null, editUserPassword: '' });
  }

  private updateUserPasswordByUsername = () => {
    this.props.userStore.updateUserPasswordByUsername(this.state.editUsername, this.state.editUserPassword)
    this.closeUpdateUserPasswordModal();
  }

  private openUpdateUserDescriptionModal = (username: string, description: string) => {
    this.setState({ editUsername: username, editUserDescription: description, showUpdateUserDescriptionModal: true });
  }

  private closeUpdateUserDescriptionModal = () => {
    this.setState({ showUpdateUserDescriptionModal: false, editUsername: null, editUserDescription: '' });
  }

  private updateUserDescriptionByUsername = () => {
    this.props.userStore.updateUserDescriptionByUsername(this.state.editUsername, this.state.editUserDescription)
    this.closeUpdateUserDescriptionModal();
  }

  private editUserDescriptionOnChange(event: any) {
    this.setState({ editUserDescription: event.target.value })
  }

  private editUserPasswordOnChange(event: any) {
    this.setState({ editUserPassword: event.target.value })
  }

  private getCommandBarItems = () => {

    const { userStore } = this.props
    return [
      {
        key: 'add',
        name: '新增',
        iconProps: {
          iconName: 'Add'
        },
        onClick: () => this.openAddUserModal()
      },
      {
        key: 'refresh',
        name: '刷新',
        iconProps: {
          iconName: 'Refresh'
        },
        onClick: () => userStore.getUserList()
      }
    ];
  };

  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 以下可扩展开发 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

  // private getOverlflowItems = () => {
  //   return [
  //     {
  //       key: 'blocked',
  //       name: '禁用',
  //       iconProps: {
  //         iconName: 'Blocked'
  //       },
  //       onClick: () => console.log('禁用')
  //     },
  //     {
  //       key: 'delete',
  //       name: '删除',
  //       iconProps: {
  //         iconName: 'DeleteTable'
  //       },
  //       onClick: () => console.log('Share')
  //     }
  //   ];
  // };

  // private getFarItems = () => {
  //   return [
  //     {
  //       key: 'sort',
  //       name: 'Sort',
  //       ariaLabel: 'Sort',
  //       iconProps: {
  //         iconName: 'SortLines'
  //       },
  //       subMenuProps: {
  //         items: [
  //           {
  //             key: 'sortById',
  //             name: '根据ID',
  //           },
  //           {
  //             key: 'sortById',
  //             name: '根据状态',
  //           }
  //         ]
  //       },
  //       onClick: () => console.log('Sort')
  //     },
  //     {
  //       key: 'info',
  //       name: 'Info',
  //       ariaLabel: 'Info',
  //       iconProps: {
  //         iconName: 'Info'
  //       },
  //       iconOnly: true,
  //       onClick: () => console.log('Info')
  //     }
  //   ];
  // };

  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

}

// NOTE: hack https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md#quick-solution
export default withRouter(UserPage);