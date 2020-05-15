import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { inject, observer } from 'mobx-react';
// import { counterStore, routingStore } from '../stores'
// import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { withRouter } from 'react-router';
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn, IDetailsHeaderProps, ConstrainMode, IDetailsFooterProps, DetailsHeader } from 'office-ui-fabric-react/lib/DetailsList';
import { PrimaryButton, DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { FontSizes } from 'office-ui-fabric-react/lib/Styling';
import { IRenderFunction } from 'office-ui-fabric-react/lib/Utilities';
import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } }
};

@inject('nodeStore')
@observer
export class NodePage extends React.Component<any> {

  public state = {
    showTokenModal: false,
    tokenForShow: '',
    nodeIdForTokenShow: '',
    hiddenDeleteNodeDialog: true,
    nodeIdForDelete: null,
    hiddenResetNodeTokenDialog: true,
    nodeIdForReset: null,
    editNodeDescription: '',
    editNodeId: null,
    showUpdateNodeDescriptionModal: false,
    windowInnerWidth: window.innerWidth,
    windowInnerHeight: window.innerHeight
  };

  componentDidMount() {
    this.resize()
    window.addEventListener('resize', this.resize);
    const { nodeStore } = this.props

    nodeStore.getNodeList()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({ "windowInnerWidth": window.innerWidth, "windowInnerHeight": window.innerHeight })
  }


  public render() {

    // const { routes, location } = this.props;

    const columns: IColumn[] = [{
      key: "nodeId",
      name: "ID",
      minWidth: 50,
      isResizable: true,
      isCollapsible: true,
      data: 'number',
      onRender: (item) => {
        return (
          <span>{item.nodeId}</span>
        );
      }
    },
    {
      key: "status",
      name: "状态",
      minWidth: 50,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item) => {
        if (item.status === 0) {
          return (
            <span style={{ color: 'red' }}>已经断开</span>
          );
        } else if (item.status === 1) {
          return (
            <span style={{ color: 'green' }}>已经连接</span>
          );
        }
        return (
          <span style={{ color: 'aqua' }}>{item.status}</span>
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
    }, {
      key: "recentlySessionId",
      name: "最近的会话ID",
      minWidth: 100,
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
                  key: 'showToken',
                  text: '查看令牌',
                  iconProps: {
                    iconName: "EntryView"
                  },
                  onClick: () => this.openShowTokenModal(item.nodeId, item.token)
                },
                {
                  key: 'resetToken',
                  text: '重置令牌',
                  iconProps: {
                    iconName: "SingleColumnEdit"
                  },
                  onClick: () => this.openResetNodeTokenDialog(item.nodeId)
                },
                {
                  key: 'updateDescription',
                  text: '更新描述',
                  iconProps: {
                    iconName: "EditNote"
                  },
                  onClick: () => this.openUpdateNodeDescriptionModal(item.nodeId, item.description)
                },
                {
                  key: 'delete',
                  text: '删除',
                  iconProps: {
                    iconName: "DeleteRows"
                  },
                  onClick: () => this.openDeleteNodeDialog(item.nodeId)
                }
              ]
            }}
          />
        );
      }
    }

    ]


    const { nodeStore } = this.props

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
                items={nodeStore.nodeList}
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
              />
            </ScrollablePane>
          </div>
        </Stack>
        <Modal
          isOpen={this.state.showTokenModal}
          isBlocking={false}
          onDismiss={() => this.closeShowTokenModal()}
        >
          <Stack gap={12} padding={20}>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%', overflowX: 'auto' } }}>
                <Stack {...columnProps}>
                  <TextField label="节点ID" defaultValue={this.state.nodeIdForTokenShow} disabled={true} />
                  <TextField label="令牌" defaultValue={this.state.tokenForShow} readOnly={true} />
                </Stack>
              </Stack>
            </Stack.Item>
          </Stack>
        </Modal>

        <Dialog
          hidden={this.state.hiddenDeleteNodeDialog}
          onDismiss={() => this.closeDeleteNodeDialog()}
          dialogContentProps={{
            type: DialogType.normal,
            title: '删除提示',
            subText: `确认删除节点？ID:${this.state.nodeIdForDelete},此操作将断开当前ID存在的会话`
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } },
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={() => this.deleteNodeByNodeId()} text="删除" />
            <DefaultButton onClick={() => this.closeDeleteNodeDialog()} text="取消" />
          </DialogFooter>
        </Dialog>

        <Dialog
          hidden={this.state.hiddenResetNodeTokenDialog}
          onDismiss={this.closeResetNodeTokenDialog}
          dialogContentProps={{
            type: DialogType.normal,
            title: '重置节点令牌提示',
            subText: `确认重置节点令牌？ID:${this.state.nodeIdForReset},此操作将断开当前ID存在的会话`
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } },
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={() => this.resetNodeTokenByNodeId()} text="重置" />
            <DefaultButton onClick={() => this.closeResetNodeTokenDialog()} text="取消" />
          </DialogFooter>
        </Dialog>

        <Modal
          isOpen={this.state.showUpdateNodeDescriptionModal}
          isBlocking={false}
          onDismiss={() => this.closeUpdateNodeDescriptionModal()}
        >
          <Stack gap={12} padding={20}>


            <Stack.Item align="center">
              <Separator><div style={{ fontSize: FontSizes.xxLarge }} >节点ID: {this.state.editNodeId}</div></Separator>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <TextField label="节点描述" multiline={true} resizable={true} defaultValue={this.state.editNodeDescription ? this.state.editNodeDescription : ""} onChange={(event: any, newValue?: string) => this.editNodeDescriptionOnChange(event)} />
                </Stack>
              </Stack>
            </Stack.Item>



            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <PrimaryButton text="保存" onClick={() => this.updateNodeDescriptionByNodeId()} />
                  <DefaultButton text="取消" onClick={() => this.closeUpdateNodeDescriptionModal()} />
                </Stack>
              </Stack>
            </Stack.Item>
          </Stack>
        </Modal>

      </Stack>
    );
  }

  private openShowTokenModal = (nodeId: number, token: string) => {
    this.setState({ tokenForShow: token, nodeIdForTokenShow: nodeId, showTokenModal: true });
  }

  private closeShowTokenModal = () => {
    this.setState({ showTokenModal: false, tokenForShow: '', nodeIdForTokenShow: '' });
  }

  private openDeleteNodeDialog = (nodeId: number) => {
    this.setState({ nodeIdForDelete: nodeId, hiddenDeleteNodeDialog: false });
  }

  private closeDeleteNodeDialog = () => {
    this.setState({ hiddenDeleteNodeDialog: true, nodeIdForDelete: null });
  }

  private deleteNodeByNodeId = () => {
    const { nodeStore } = this.props
    nodeStore.deleteNodeByNodeId(this.state.nodeIdForDelete)
    this.closeDeleteNodeDialog();
  }

  private openResetNodeTokenDialog = (nodeId: number) => {
    this.setState({ nodeIdForReset: nodeId, hiddenResetNodeTokenDialog: false });
  }

  private closeResetNodeTokenDialog = () => {
    this.setState({ hiddenResetNodeTokenDialog: true, nodeIdForReset: null });
  }

  private resetNodeTokenByNodeId = () => {
    const { nodeStore } = this.props
    nodeStore.resetNodeTokenByNodeId(this.state.nodeIdForReset)
    this.closeResetNodeTokenDialog();
  }

  private openUpdateNodeDescriptionModal = (nodeId: number, description: string) => {
    this.setState({ editNodeId: nodeId, editNodeDescription: description, showUpdateNodeDescriptionModal: true });
  }

  private closeUpdateNodeDescriptionModal = () => {
    this.setState({ showUpdateNodeDescriptionModal: false, editNodeId: null, editNodeDescription: '' });
  }

  private updateNodeDescriptionByNodeId = () => {
    this.props.nodeStore.updateNodeDescriptionByNodeId(this.state.editNodeId, this.state.editNodeDescription)
    this.closeUpdateNodeDescriptionModal();
  }

  private editNodeDescriptionOnChange(event: any) {
    this.setState({ editNodeDescription: event.target.value })
  }

  private getCommandBarItems = () => {

    const { nodeStore } = this.props
    return [
      {
        key: 'add',
        name: '新增',
        iconProps: {
          iconName: 'Add'
        },
        onClick: () => nodeStore.createNode()
      },
      {
        key: 'refresh',
        name: '刷新',
        iconProps: {
          iconName: 'Refresh'
        },
        onClick: () => nodeStore.getNodeList()
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
export default withRouter(NodePage);