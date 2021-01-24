import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { Stack, IStackProps } from '@fluentui/react/lib/Stack';
import { PrimaryButton, DefaultButton, IconButton, ActionButton, IButtonStyles } from '@fluentui/react/lib/Button';
import { IColumn, DetailsList, SelectionMode, DetailsListLayoutMode, Selection, ConstrainMode, IDetailsHeaderProps, IDetailsFooterProps, DetailsHeader } from '@fluentui/react/lib/DetailsList';
import { Dialog, DialogFooter, DialogType } from '@fluentui/react/lib/Dialog';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { TextField } from '@fluentui/react/lib/TextField';
import { FontSizes, mergeStyleSets } from '@fluentui/react/lib/Styling';
import { ScrollablePane, ScrollbarVisibility } from '@fluentui/react/lib/ScrollablePane';
import { IRenderFunction } from '@fluentui/react/lib/Utilities';
import { StickyPositionType, Sticky } from '@fluentui/react/lib/Sticky';
import { toast } from 'react-toastify';
import { Modal } from '@fluentui/react/lib/Modal';

const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } }
};

const actionButtonStyles: IButtonStyles = {
  root: {
    fontSize: '12px',
    height: 16
  }
}

export const HomePage = inject('authenticationStore', 'operatorStore')(observer(class HomePage extends React.Component<any> {

  state = {
    hiddenDeleteOperatorDialog: true,
    showUpdateOperatorDescriptionModal: false,
    operatorIdForUpdateDescription: null,
    editOperatorDescription: "",
    operatorIdForDelete: null,
    windowInnerWidth: window.innerWidth,
    windowInnerHeight: window.innerHeight,
    selectedOperatorId: '',

    acceptReadSpecialAccountIdInput: '',
    denyReadSpecialAccountIdInput: '',
    acceptTradeSpecialAccountIdInput: '',
    denyTradeSpecialAccountIdInput: '',
    acceptTradeSpecialUnifiedSymbolInput: '',
    denyTradeSpecialUnifiedSymbolInput: '',
    acceptSubscribeSpecialUnifiedSymbolInput: '',
    denySubscribeSpecialUnifiedSymbolInput: '',


  }


  private operatorSelection: Selection = new Selection({
    onSelectionChanged: () => {
      const selectionCount = this.operatorSelection.getSelectedCount();
      if (selectionCount === 0) {
        if (this.state.selectedOperatorId !== '') {
          this.setState({ "selectedOperatorId": '' })
        }

      } else if (selectionCount > 0) {
        const operator: any = this.operatorSelection.getSelection()[0]
        if (this.state.selectedOperatorId !== operator.operatorId) {
          this.setState({ "selectedOperatorId": operator.operatorId })
        }
      }
    }
  });

  componentDidMount() {
    this.props.operatorStore.getOperatorList()
    this.resize()
    window.addEventListener('resize', () => { this.resize() });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }


  render() {

    // const columnProps: Partial<IStackProps> = {
    //   tokens: { childrenGap: 5 },
    //   styles: { root: { width: 300 } }
    // };
    const operatorItems = this.props.operatorStore.operatorList.slice()

    let canReadAllAccounts = false
    const acceptReadSpecialAccountIdList: any[] = []
    const denyReadSpecialAccountIdList: any[] = []

    let canTradeAllAccounts = false
    const acceptTradeSpecialAccountIdList: any[] = []
    const denyTradeSpecialAccountIdList: any[] = []

    let canTradeAllContracts = false;
    const acceptTradeSpecialUnifiedSymbolList: any[] = []
    const denyTradeSpecialUnifiedSymbolList: any[] = []

    let canSubscribeAllContracts = false
    const acceptSubscribeSpecialUnifiedSymbolList: any[] = []
    const denySubscribeSpecialUnifiedSymbolList: any[] = []


    const { operatorStore } = this.props

    let selectedOperator: any = null;

    if (this.state.selectedOperatorId) {


      if (operatorStore.operatorMap.has(this.state.selectedOperatorId)) {


        selectedOperator = operatorStore.operatorMap.get(this.state.selectedOperatorId)


        if (selectedOperator.canReadAllAccounts) {
          canReadAllAccounts = true
        }

        if (selectedOperator.acceptReadSpecialAccountIdSet) {
          selectedOperator.acceptReadSpecialAccountIdSet.forEach((element: any) => {
            acceptReadSpecialAccountIdList.push({
              "accountId": element,
              "operatorId": this.state.selectedOperatorId
            })
          });
        }

        if (selectedOperator.denyReadSpecialAccountIdSet) {
          selectedOperator.denyReadSpecialAccountIdSet.forEach((element: any) => {
            denyReadSpecialAccountIdList.push({
              "accountId": element,
              "operatorId": this.state.selectedOperatorId
            })
          });
        }


        if (selectedOperator.canTradeAllAccounts) {
          canTradeAllAccounts = true
        }

        if (selectedOperator.acceptTradeSpecialAccountIdSet) {
          selectedOperator.acceptTradeSpecialAccountIdSet.forEach((element: any) => {
            acceptTradeSpecialAccountIdList.push({
              "accountId": element,
              "operatorId": this.state.selectedOperatorId
            })
          });

        }

        if (selectedOperator.denyTradeSpecialAccountIdSet) {
          selectedOperator.denyTradeSpecialAccountIdSet.forEach((element: any) => {
            denyTradeSpecialAccountIdList.push({
              "accountId": element,
              "operatorId": this.state.selectedOperatorId
            })
          });

        }


        if (selectedOperator.canTradeAllContracts) {
          canTradeAllContracts = true
        }

        if (selectedOperator.acceptTradeSpecialUnifiedSymbolSet) {
          selectedOperator.acceptTradeSpecialUnifiedSymbolSet.forEach((element: any) => {
            acceptTradeSpecialUnifiedSymbolList.push({
              "unifiedSymbol": element,
              "operatorId": this.state.selectedOperatorId
            })
          });
        }

        if (selectedOperator.denyTradeSpecialUnifiedSymbolSet) {
          selectedOperator.denyTradeSpecialUnifiedSymbolSet.forEach((element: any) => {
            denyTradeSpecialUnifiedSymbolList.push({
              "unifiedSymbol": element,
              "operatorId": this.state.selectedOperatorId
            })
          });
        }


        if (selectedOperator.canSubscribeAllContracts) {
          canSubscribeAllContracts = true
        }

        if (selectedOperator.acceptSubscribeSpecialUnifiedSymbolSet) {
          selectedOperator.acceptSubscribeSpecialUnifiedSymbolSet.forEach((element: any) => {
            acceptSubscribeSpecialUnifiedSymbolList.push({
              "unifiedSymbol": element,
              "operatorId": this.state.selectedOperatorId
            })
          });
        }

        if (selectedOperator.denySubscribeSpecialUnifiedSymbolSet) {
          selectedOperator.denySubscribeSpecialUnifiedSymbolSet.forEach((element: any) => {
            denySubscribeSpecialUnifiedSymbolList.push({
              "unifiedSymbol": element,
              "operatorId": this.state.selectedOperatorId
            })
          });
        }
      } else {
        this.setState({ "selselectedOperatorIde": '' })
      }

    }


    const columnLeftProps: Partial<IStackProps> = {
      tokens: { childrenGap: 5 },
      styles: { root: { width: 499, borderRight: "solid 1px #383838" } }
    };

    const columnRightProps: Partial<IStackProps> = {
      tokens: { childrenGap: 5 },
      styles: { root: { width: this.state.windowInnerWidth - 450, height: this.state.windowInnerHeight - 41, overflowY: "auto" } }
    };

    const operatorColumns: IColumn[] = [
      {
        key: "operatorId",
        name: "ID",
        minWidth: 220,
        maxWidth: 220,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return (
            <div>
              <span>{item.operatorId}</span>
            </div>
          );
        }
      }, {
        key: "username",
        name: "用户名",
        minWidth: 40,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return (
            <div>
              <span>{item.username}</span>
            </div>
          );
        }
      }, {
        key: "description",
        name: "描述",
        minWidth: 75,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return (
            <div>
              <span>{item.description}</span>
            </div>
          );
        }
      },
      {
        key: "action",
        name: "操作",
        minWidth: 25,
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
                    key: 'delete',
                    text: '删除',
                    disabled: item.associatedToUser,
                    iconProps: {
                      iconName: "DeleteRows"
                    },
                    onClick: () => {
                      this.openDeleteOperatorDialog(item)
                    }
                  },

                  {
                    key: 'updateDescription',
                    text: '更新描述',
                    iconProps: {
                      iconName: "EditNote"
                    },
                    onClick: () => {
                      this.openUpdateOperatorDescriptionModal(item.operatorId, item.description)
                    }
                  }
                ]
              }}
            />
          );
        }
      }
    ]

    const acceptReadSpecialAccountIdSetColumns: IColumn[] = [
      {
        key: "accountId",
        name: "账户ID",
        minWidth: 310,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return (
            <div>
              <span>{item.accountId}</span>
            </div>
          );
        }
      },
      {
        key: "action",
        name: "操作",
        minWidth: 25,
        isResizable: true,
        isCollapsible: true,
        onRender: (item) => {
          return (
            <span>
              <ActionButton
                allowDisabledFocus={true}
                checked={false}
                styles={actionButtonStyles}
                onClick={() => {
                  if (selectedOperator) {
                    let tmpSet = new Set()
                    if (selectedOperator.acceptReadSpecialAccountIdSet) {
                      tmpSet = new Set(selectedOperator.acceptReadSpecialAccountIdSet)
                    }
                    tmpSet.delete(item.accountId)
                    selectedOperator.acceptReadSpecialAccountIdSet = [...tmpSet]
                    this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                  } else {
                    toast("请选择操作员", { type: 'error' })
                  }
                }}
              >
                删除
              </ActionButton>
            </span>
          );
        }
      }
    ]

    const denyReadSpecialAccountIdSetColumns: IColumn[] = [
      {
        key: "accountId",
        name: "账户ID",
        minWidth: 310,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return (
            <div>
              <span>{item.accountId}</span>
            </div>
          );
        }
      },
      {
        key: "action",
        name: "操作",
        minWidth: 25,
        isResizable: true,
        isCollapsible: true,
        onRender: (item) => {
          return (
            <span>
              <ActionButton
                allowDisabledFocus={true}
                checked={false}
                styles={actionButtonStyles}
                onClick={() => {
                  if (selectedOperator) {
                    let tmpSet = new Set()
                    if (selectedOperator.denyReadSpecialAccountIdSet) {
                      tmpSet = new Set(selectedOperator.denyReadSpecialAccountIdSet)
                    }
                    tmpSet.delete(item.accountId)
                    selectedOperator.denyReadSpecialAccountIdSet = [...tmpSet]
                    this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                  } else {
                    toast("请选择操作员", { type: 'error' })
                  }
                }}
              >
                删除
              </ActionButton>
            </span>
          );
        }
      }
    ]

    const acceptTradeSpecialAccountIdSetColumns: IColumn[] = [
      {
        key: "accountId",
        name: "账户ID",
        minWidth: 310,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return (
            <div>
              <span>{item.accountId}</span>
            </div>
          );
        }
      },
      {
        key: "action",
        name: "操作",
        minWidth: 25,
        isResizable: true,
        isCollapsible: true,
        onRender: (item) => {
          return (
            <span>
              <ActionButton
                allowDisabledFocus={true}
                checked={false}
                styles={actionButtonStyles}
                onClick={() => {
                  if (selectedOperator) {
                    let tmpSet = new Set()
                    if (selectedOperator.acceptTradeSpecialAccountIdSet) {
                      tmpSet = new Set(selectedOperator.acceptTradeSpecialAccountIdSet)
                    }
                    tmpSet.delete(item.accountId)
                    selectedOperator.acceptTradeSpecialAccountIdSet = [...tmpSet]
                    this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                  } else {
                    toast("请选择操作员", { type: 'error' })
                  }
                }}
              >
                删除
              </ActionButton>
            </span>
          );
        }
      }
    ]

    const denyTradeSpecialAccountIdSetColumns: IColumn[] = [
      {
        key: "accountId",
        name: "账户ID",
        minWidth: 310,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return (
            <div>
              <span>{item.accountId}</span>
            </div>
          );
        }
      },
      {
        key: "action",
        name: "操作",
        minWidth: 25,
        isResizable: true,
        isCollapsible: true,
        onRender: (item) => {
          return (
            <span>
              <ActionButton
                allowDisabledFocus={true}
                checked={false}
                styles={actionButtonStyles}
                onClick={() => {
                  if (selectedOperator) {
                    let tmpSet = new Set()
                    if (selectedOperator.denyTradeSpecialAccountIdSet) {
                      tmpSet = new Set(selectedOperator.denyTradeSpecialAccountIdSet)
                    }
                    tmpSet.delete(item.accountId)
                    selectedOperator.denyTradeSpecialAccountIdSet = [...tmpSet]
                    this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                  } else {
                    toast("请选择操作员", { type: 'error' })
                  }
                }}
              >
                删除
              </ActionButton>
            </span>
          );
        }
      }
    ]

    const acceptTradeSpecialUnifiedSymbolSetColumns: IColumn[] = [
      {
        key: "unifiedSymbol",
        name: "合约统一标识",
        minWidth: 310,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return (
            <div>
              <span>{item.unifiedSymbol}</span>
            </div>
          );
        }
      },
      {
        key: "action",
        name: "操作",
        minWidth: 25,
        isResizable: true,
        isCollapsible: true,
        onRender: (item) => {
          return (
            <span>
              <ActionButton
                allowDisabledFocus={true}
                checked={false}
                styles={actionButtonStyles}
                onClick={() => {
                  if (selectedOperator) {
                    let tmpSet = new Set()
                    if (selectedOperator.acceptTradeSpecialUnifiedSymbolSet) {
                      tmpSet = new Set(selectedOperator.acceptTradeSpecialUnifiedSymbolSet)
                    }
                    tmpSet.delete(item.unifiedSymbol)
                    selectedOperator.acceptTradeSpecialUnifiedSymbolSet = [...tmpSet]
                    this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                  } else {
                    toast("请选择操作员", { type: 'error' })
                  }
                }}
              >
                删除
              </ActionButton>
            </span>
          );
        }
      }
    ]

    const denyTradeSpecialUnifiedSymbolSetColumns: IColumn[] = [
      {
        key: "unifiedSymbol",
        name: "合约统一标识",
        minWidth: 310,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return (
            <div>
              <span>{item.unifiedSymbol}</span>
            </div>
          );
        }
      },
      {
        key: "action",
        name: "操作",
        minWidth: 25,
        isResizable: true,
        isCollapsible: true,
        onRender: (item) => {
          return (
            <span>
              <ActionButton
                allowDisabledFocus={true}
                checked={false}
                styles={actionButtonStyles}
                onClick={() => {
                  if (selectedOperator) {
                    let tmpSet = new Set()
                    if (selectedOperator.denyTradeSpecialUnifiedSymbolSet) {
                      tmpSet = new Set(selectedOperator.denyTradeSpecialUnifiedSymbolSet)
                    }
                    tmpSet.delete(item.unifiedSymbol)
                    selectedOperator.denyTradeSpecialUnifiedSymbolSet = [...tmpSet]
                    this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                  } else {
                    toast("请选择操作员", { type: 'error' })
                  }
                }}
              >
                删除
              </ActionButton>
            </span>
          );
        }
      }
    ]



    const acceptSubscribeSpecialUnifiedSymbolSetColumns: IColumn[] = [
      {
        key: "unifiedSymbol",
        name: "合约统一标识",
        minWidth: 310,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return (
            <div>
              <span>{item.unifiedSymbol}</span>
            </div>
          );
        }
      },
      {
        key: "action",
        name: "操作",
        minWidth: 25,
        isResizable: true,
        isCollapsible: true,
        onRender: (item) => {
          return (
            <span>
              <ActionButton
                allowDisabledFocus={true}
                checked={false}
                styles={actionButtonStyles}
                onClick={() => {
                  if (selectedOperator) {
                    let tmpSet = new Set()
                    if (selectedOperator.acceptSubscribeSpecialUnifiedSymbolSet) {
                      tmpSet = new Set(selectedOperator.acceptSubscribeSpecialUnifiedSymbolSet)
                    }
                    tmpSet.delete(item.unifiedSymbol)
                    selectedOperator.acceptSubscribeSpecialUnifiedSymbolSet = [...tmpSet]
                    this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                  } else {
                    toast("请选择操作员", { type: 'error' })
                  }
                }}
              >
                删除
              </ActionButton>
            </span>
          );
        }
      }
    ]

    const denySubscribeSpecialUnifiedSymbolSetColumns: IColumn[] = [
      {
        key: "unifiedSymbol",
        name: "合约统一标识",
        minWidth: 310,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return (
            <div>
              <span>{item.unifiedSymbol}</span>
            </div>
          );
        }
      },
      {
        key: "action",
        name: "操作",
        minWidth: 25,
        isResizable: true,
        isCollapsible: true,
        onRender: (item) => {
          return (
            <span>
              <ActionButton
                allowDisabledFocus={true}
                checked={false}
                styles={actionButtonStyles}
                onClick={() => {
                  if (selectedOperator) {
                    let tmpSet = new Set()
                    if (selectedOperator.denySubscribeSpecialUnifiedSymbolSet) {
                      tmpSet = new Set(selectedOperator.denySubscribeSpecialUnifiedSymbolSet)
                    }
                    tmpSet.delete(item.unifiedSymbol)
                    selectedOperator.denySubscribeSpecialUnifiedSymbolSet = [...tmpSet]
                    this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                  } else {
                    toast("请选择操作员", { type: 'error' })
                  }
                }}
              >
                删除
              </ActionButton>
            </span>
          );
        }
      }
    ]

    const classNames = mergeStyleSets({
      selectTableWrapper: {
        height: this.state.windowInnerHeight - 90,
        position: 'relative',
        maxHeight: 'inherit'
      },
      childTableWrapper: {
        height: 250,
        position: 'relative',
        maxHeight: 'inherit',
        borderBottom: "solid 1px #383838"
      }
    });




    return (

      <Stack tokens={{ childrenGap: 12, padding:20 }} styles={{ root: { width: '100%' } }}>
        <Stack.Item>
          <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
            <Stack {...columnLeftProps}>
              <Stack.Item>
                <Stack horizontal={true} styles={{ root: { width: 498, } }}>
                  <Stack {...{ tokens: { childrenGap: 5 }, styles: { root: { width: 498, paddingTop: 5 } } }}>
                    <MarqueeSelection selection={this.operatorSelection} isEnabled={false}>
                      <div className={classNames.selectTableWrapper}>
                        <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                          <DetailsList
                            items={operatorItems}
                            compact={true}
                            columns={operatorColumns}
                            selectionMode={SelectionMode.single}
                            setKey="operatorId"
                            selection={this.operatorSelection}
                            layoutMode={DetailsListLayoutMode.fixedColumns}
                            constrainMode={ConstrainMode.unconstrained}
                            selectionPreservedOnEmptyClick={true}
                            // data-is-scrollable={true}

                            // @ts-ignore
                            onRenderDetailsHeader={
                              // tslint:disable-next-line:jsx-no-lambda
                              (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                                <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
                                  <DetailsHeader
                                    {...detailsHeaderProps}
                                    styles={{ root: { paddingTop: 0, height: 24, lineHeight: 24 }, check: { height: "24px !important" }, cellIsCheck: { height: 24 } }}
                                  />
                                  {/* {defaultRender(detailsHeaderProps)} */}
                                </Sticky>
                              )}

                            // @ts-ignore
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
                    </MarqueeSelection>
                    <PrimaryButton
                      allowDisabledFocus={true}
                      checked={false}
                      text="新增"
                      onClick={() => {
                        this.createOperator()
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack.Item>
            </Stack>
            <Stack {...columnRightProps}>
              <Stack.Item>
                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%', } }}>
                  <Stack {...{
                    styles: { root: { width: "100%", borderBottom: "solid 1px #383838", padding: 20 } }
                  }}>

                    {selectedOperator ?
                      <div><span style={{ fontSize: FontSizes.small, display: "inline-block", width: 55, textAlign: "right", paddingRight: 5 }}>操作员ID: </span><span style={{ fontSize: FontSizes.xLarge }} >{selectedOperator.operatorId}</span></div>
                      : <div><span style={{ fontSize: FontSizes.small, display: "inline-block", width: 55, textAlign: "right", paddingRight: 5 }}>操作员ID: </span><span style={{ fontSize: FontSizes.medium }} >&nbsp;</span></div>
                    }
                  </Stack>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%', } }}>
                  <Stack {...{
                    styles: { root: { width: "100%", borderBottom: "solid 1px #383838", padding: 20 } }
                  }}>

                    {selectedOperator ?
                      <div><span style={{ fontSize: FontSizes.small, display: "inline-block", width: 55, textAlign: "right", paddingRight: 5 }}>用户名: </span><span style={{ fontSize: FontSizes.xLarge }} >{selectedOperator.username}</span></div>
                      : <div><span style={{ fontSize: FontSizes.small, display: "inline-block", width: 55, textAlign: "right", paddingRight: 5 }}>用户名: </span><span style={{ fontSize: FontSizes.medium }} >&nbsp;</span></div>
                    }
                  </Stack>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%', } }}>
                  <Stack {...{
                    styles: { root: { width: "100%", borderBottom: "solid 1px #383838", padding: 20 } }
                  }}>
                    {selectedOperator ?
                      <div><span style={{ fontSize: FontSizes.small, display: "inline-block", width: 55, textAlign: "right", paddingRight: 5 }}>描述: </span><span style={{ fontSize: FontSizes.large }} >{selectedOperator.description}</span></div>
                      : <div><span style={{ fontSize: FontSizes.small, display: "inline-block", width: 55, textAlign: "right", paddingRight: 5 }}>描述: </span><span style={{ fontSize: FontSizes.large }} >&nbsp;</span></div>
                    }
                  </Stack>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%', } }}>
                  <Stack {...{
                    styles: { root: { width: "100%", borderBottom: "solid 1px #383838", padding: 10 } }
                  }}>
                    账户读取权限
                  </Stack>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack horizontal={true} tokens={{ childrenGap: 10 }} styles={{ root: { width: '100%', } }}>
                  <Stack styles={{ root: { width: 175, paddingLeft: 10 } }}>
                    <Checkbox
                      label="允许读取所有帐户"
                      styles={{ root: { marginTop: 3 } }}
                      checked={canReadAllAccounts}
                      onChange={(event: any, checked) => {
                        if (selectedOperator) {
                          selectedOperator.canReadAllAccounts = checked
                          this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                        } else {
                          toast("请选择操作员", { type: 'error' })
                        }
                      }}
                    />
                  </Stack>
                  <Stack styles={{ root: { width: 400, borderLeft: "solid 1px #383838", borderRight: "solid 1px #383838" } }}>
                    <div style={{ width: "100%", borderBottom: "solid 1px #383838", padding: 5 }}>
                      允许列表
                          </div>
                    <div className={classNames.childTableWrapper}>
                      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                        <DetailsList
                          items={acceptReadSpecialAccountIdList}
                          compact={true}
                          columns={acceptReadSpecialAccountIdSetColumns}
                          selectionMode={SelectionMode.none}
                          setKey="accountId"
                          layoutMode={DetailsListLayoutMode.fixedColumns}
                          constrainMode={ConstrainMode.unconstrained}
                          selectionPreservedOnEmptyClick={true}
                          // data-is-scrollable={true}

                          // @ts-ignore
                          onRenderDetailsHeader={
                            // tslint:disable-next-line:jsx-no-lambda
                            (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                              <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
                                <DetailsHeader
                                  {...detailsHeaderProps}
                                  styles={{ root: { paddingTop: 0, height: 24, lineHeight: 24 }, check: { height: "24px !important" }, cellIsCheck: { height: 24 } }}
                                />
                                {/* {defaultRender(detailsHeaderProps)} */}
                              </Sticky>
                            )}

                          // @ts-ignore
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
                    <TextField label="账户ID"
                      placeholder="......"
                      defaultValue={this.state.acceptReadSpecialAccountIdInput}
                      onChange={(event: any, newValue?: string) => this.setState({ 'acceptReadSpecialAccountIdInput': newValue })}
                    />
                    <PrimaryButton
                      allowDisabledFocus={true}
                      checked={false}
                      text="新增允许"
                      onClick={() => {
                        if (this.state.acceptReadSpecialAccountIdInput && this.state.acceptReadSpecialAccountIdInput !== '') {
                          if (selectedOperator) {
                            let tmpSet = new Set()
                            if (selectedOperator.acceptReadSpecialAccountIdSet) {
                              tmpSet = new Set(selectedOperator.acceptReadSpecialAccountIdSet)
                            }
                            tmpSet.add(this.state.acceptReadSpecialAccountIdInput)
                            selectedOperator.acceptReadSpecialAccountIdSet = [...tmpSet]
                            this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                            this.setState({ 'acceptReadSpecialAccountIdInput': '' })
                          } else {
                            toast("请选择操作员", { type: 'error' })
                          }
                        }
                      }}
                    />
                  </Stack>
                  <Stack styles={{ root: { width: 400, borderLeft: "solid 1px #383838", borderRight: "solid 1px #383838" } }}>
                    <div style={{ width: "100%", borderBottom: "solid 1px #383838", padding: 5 }}>
                      拒绝列表
                          </div>
                    <div className={classNames.childTableWrapper}>
                      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                        <DetailsList
                          items={denyReadSpecialAccountIdList}
                          compact={true}
                          columns={denyReadSpecialAccountIdSetColumns}
                          selectionMode={SelectionMode.none}
                          setKey="accountId"
                          layoutMode={DetailsListLayoutMode.fixedColumns}
                          constrainMode={ConstrainMode.unconstrained}
                          selectionPreservedOnEmptyClick={true}
                          // data-is-scrollable={true}

                          // @ts-ignore
                          onRenderDetailsHeader={
                            // tslint:disable-next-line:jsx-no-lambda
                            (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                              <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
                                <DetailsHeader
                                  {...detailsHeaderProps}
                                  styles={{ root: { paddingTop: 0, height: 24, lineHeight: 24 }, check: { height: "24px !important" }, cellIsCheck: { height: 24 } }}
                                />
                                {/* {defaultRender(detailsHeaderProps)} */}
                              </Sticky>
                            )}

                          // @ts-ignore
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
                    <TextField label="账户ID"
                      placeholder="......"
                      defaultValue={this.state.denyReadSpecialAccountIdInput}
                      onChange={(event: any, newValue?: string) => this.setState({ 'denyReadSpecialAccountIdInput': newValue })}
                    />
                    <PrimaryButton
                      allowDisabledFocus={true}
                      checked={false}
                      text="新增拒绝"
                      onClick={() => {
                        if (this.state.denyReadSpecialAccountIdInput && this.state.denyReadSpecialAccountIdInput !== '') {
                          if (selectedOperator) {
                            let tmpSet = new Set()
                            if (selectedOperator.denyReadSpecialAccountIdSet) {
                              tmpSet = new Set(selectedOperator.denyReadSpecialAccountIdSet)
                            }
                            tmpSet.add(this.state.denyReadSpecialAccountIdInput)
                            selectedOperator.denyReadSpecialAccountIdSet = [...tmpSet]
                            this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                            this.setState({ 'denyReadSpecialAccountIdInput': '' })
                          } else {
                            toast("请选择操作员", { type: 'error' })
                          }
                        }
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%', } }}>
                  <Stack {...{
                    styles: { root: { width: "100%", borderTop: "solid 1px #383838", borderBottom: "solid 1px #383838", padding: 10 } }
                  }}>
                    账户交易权限
                  </Stack>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack horizontal={true} tokens={{ childrenGap: 10 }} styles={{ root: { width: '100%', } }}>
                  <Stack styles={{ root: { width: 175, paddingLeft: 10 } }}>
                    <Checkbox
                      label="允许交易所有帐户"
                      styles={{ root: { marginTop: 3 } }}
                      checked={canTradeAllAccounts}
                      onChange={(event: any, checked) => {
                        if (selectedOperator) {
                          selectedOperator.canTradeAllAccounts = checked
                          this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                        } else {
                          toast("请选择操作员", { type: 'error' })
                        }
                      }}
                    />
                  </Stack>
                  <Stack styles={{ root: { width: 400, borderLeft: "solid 1px #383838", borderRight: "solid 1px #383838" } }}>
                    <div style={{ width: "100%", borderBottom: "solid 1px #383838", padding: 5 }}>
                      允许列表
                          </div>
                    <div className={classNames.childTableWrapper}>
                      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                        <DetailsList
                          items={acceptTradeSpecialAccountIdList}
                          compact={true}
                          columns={acceptTradeSpecialAccountIdSetColumns}
                          selectionMode={SelectionMode.none}
                          setKey="accountId"
                          layoutMode={DetailsListLayoutMode.fixedColumns}
                          constrainMode={ConstrainMode.unconstrained}
                          selectionPreservedOnEmptyClick={true}
                          // data-is-scrollable={true}

                          // @ts-ignore
                          onRenderDetailsHeader={
                            // tslint:disable-next-line:jsx-no-lambda
                            (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                              <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
                                <DetailsHeader
                                  {...detailsHeaderProps}
                                  styles={{ root: { paddingTop: 0, height: 24, lineHeight: 24 }, check: { height: "24px !important" }, cellIsCheck: { height: 24 } }}
                                />
                                {/* {defaultRender(detailsHeaderProps)} */}
                              </Sticky>
                            )}

                          // @ts-ignore
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
                    <TextField label="账户ID"
                      placeholder="......"
                      defaultValue={this.state.acceptTradeSpecialAccountIdInput}
                      onChange={(event: any, newValue?: string) => this.setState({ 'acceptTradeSpecialAccountIdInput': newValue })}
                    />
                    <PrimaryButton
                      allowDisabledFocus={true}
                      checked={false}
                      text="新增允许"
                      onClick={() => {
                        if (this.state.acceptTradeSpecialAccountIdInput && this.state.acceptTradeSpecialAccountIdInput !== '') {
                          if (selectedOperator) {
                            let tmpSet = new Set()
                            if (selectedOperator.acceptTradeSpecialAccountIdSet) {
                              tmpSet = new Set(selectedOperator.acceptTradeSpecialAccountIdSet)
                            }
                            tmpSet.add(this.state.acceptTradeSpecialAccountIdInput)
                            selectedOperator.acceptTradeSpecialAccountIdSet = [...tmpSet]
                            this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                            this.setState({ 'acceptTradeSpecialAccountIdInput': '' })
                          } else {
                            toast("请选择操作员", { type: 'error' })
                          }
                        }
                      }}
                    />
                  </Stack>
                  <Stack styles={{ root: { width: 400, borderLeft: "solid 1px #383838", borderRight: "solid 1px #383838" } }}>
                    <div style={{ width: "100%", borderBottom: "solid 1px #383838", padding: 5 }}>
                      拒绝列表
                          </div>
                    <div className={classNames.childTableWrapper}>
                      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                        <DetailsList
                          items={denyTradeSpecialAccountIdList}
                          compact={true}
                          columns={denyTradeSpecialAccountIdSetColumns}
                          selectionMode={SelectionMode.none}
                          setKey="accountId"
                          layoutMode={DetailsListLayoutMode.fixedColumns}
                          constrainMode={ConstrainMode.unconstrained}
                          selectionPreservedOnEmptyClick={true}
                          // data-is-scrollable={true}

                          // @ts-ignore
                          onRenderDetailsHeader={
                            // tslint:disable-next-line:jsx-no-lambda
                            (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                              <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
                                <DetailsHeader
                                  {...detailsHeaderProps}
                                  styles={{ root: { paddingTop: 0, height: 24, lineHeight: 24 }, check: { height: "24px !important" }, cellIsCheck: { height: 24 } }}
                                />
                                {/* {defaultRender(detailsHeaderProps)} */}
                              </Sticky>
                            )}

                          // @ts-ignore
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
                    <TextField label="账户ID"
                      placeholder="......"
                      defaultValue={this.state.denyTradeSpecialAccountIdInput}
                      onChange={(event: any, newValue?: string) => this.setState({ 'denyTradeSpecialAccountIdInput': newValue })}
                    />
                    <PrimaryButton
                      allowDisabledFocus={true}
                      checked={false}
                      text="新增拒绝"
                      onClick={() => {
                        if (this.state.denyTradeSpecialAccountIdInput && this.state.denyTradeSpecialAccountIdInput !== '') {
                          if (selectedOperator) {
                            let tmpSet = new Set()
                            if (selectedOperator.denyTradeSpecialAccountIdSet) {
                              tmpSet = new Set(selectedOperator.denyTradeSpecialAccountIdSet)
                            }
                            tmpSet.add(this.state.denyTradeSpecialAccountIdInput)
                            selectedOperator.denyTradeSpecialAccountIdSet = [...tmpSet]
                            this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                            this.setState({ 'denyTradeSpecialAccountIdInput': '' })
                          } else {
                            toast("请选择操作员", { type: 'error' })
                          }
                        }
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%', } }}>
                  <Stack {...{
                    styles: { root: { width: "100%", borderTop: "solid 1px #383838", borderBottom: "solid 1px #383838", padding: 10 } }
                  }}>
                    合约交易权限
                  </Stack>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack horizontal={true} tokens={{ childrenGap: 10 }} styles={{ root: { width: '100%', } }}>
                  <Stack styles={{ root: { width: 175, paddingLeft: 10 } }}>
                    <Checkbox
                      label="允许交易所有合约"
                      styles={{ root: { marginTop: 3 } }}
                      checked={canTradeAllContracts}
                      onChange={(event: any, checked) => {
                        if (selectedOperator) {
                          selectedOperator.canTradeAllContracts = checked
                          this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                        } else {
                          toast("请选择操作员", { type: 'error' })
                        }
                      }}
                    />
                  </Stack>
                  <Stack styles={{ root: { width: 400, borderLeft: "solid 1px #383838", borderRight: "solid 1px #383838" } }}>
                    <div style={{ width: "100%", borderBottom: "solid 1px #383838", padding: 5 }}>
                      允许列表
                          </div>
                    <div className={classNames.childTableWrapper}>
                      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                        <DetailsList
                          items={acceptTradeSpecialUnifiedSymbolList}
                          compact={true}
                          columns={acceptTradeSpecialUnifiedSymbolSetColumns}
                          selectionMode={SelectionMode.none}
                          setKey="unifiedSymbol"
                          layoutMode={DetailsListLayoutMode.fixedColumns}
                          constrainMode={ConstrainMode.unconstrained}
                          selectionPreservedOnEmptyClick={true}
                          // data-is-scrollable={true}

                          // @ts-ignore
                          onRenderDetailsHeader={
                            // tslint:disable-next-line:jsx-no-lambda
                            (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                              <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
                                <DetailsHeader
                                  {...detailsHeaderProps}
                                  styles={{ root: { paddingTop: 0, height: 24, lineHeight: 24 }, check: { height: "24px !important" }, cellIsCheck: { height: 24 } }}
                                />
                                {/* {defaultRender(detailsHeaderProps)} */}
                              </Sticky>
                            )}

                          // @ts-ignore
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
                    <TextField label="合约统一标识"
                      placeholder="......"
                      defaultValue={this.state.acceptTradeSpecialUnifiedSymbolInput}
                      onChange={(event: any, newValue?: string) => this.setState({ 'acceptTradeSpecialUnifiedSymbolInput': newValue })}
                    />
                    <PrimaryButton
                      allowDisabledFocus={true}
                      checked={false}
                      text="新增允许"
                      onClick={() => {
                        if (this.state.acceptTradeSpecialUnifiedSymbolInput && this.state.acceptTradeSpecialUnifiedSymbolInput !== '') {
                          if (selectedOperator) {
                            let tmpSet = new Set()
                            if (selectedOperator.acceptTradeSpecialUnifiedSymbolSet) {
                              tmpSet = new Set(selectedOperator.acceptTradeSpecialUnifiedSymbolSet)
                            }
                            tmpSet.add(this.state.acceptTradeSpecialUnifiedSymbolInput)
                            selectedOperator.acceptTradeSpecialUnifiedSymbolSet = [...tmpSet]
                            this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                            this.setState({ 'acceptTradeSpecialUnifiedSymbolInput': '' })
                          } else {
                            toast("请选择操作员", { type: 'error' })
                          }
                        }
                      }}
                    />
                  </Stack>
                  <Stack styles={{ root: { width: 400, borderLeft: "solid 1px #383838", borderRight: "solid 1px #383838" } }}>
                    <div style={{ width: "100%", borderBottom: "solid 1px #383838", padding: 5 }}>
                      拒绝列表
                          </div>
                    <div className={classNames.childTableWrapper}>
                      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                        <DetailsList
                          items={denyTradeSpecialUnifiedSymbolList}
                          compact={true}
                          columns={denyTradeSpecialUnifiedSymbolSetColumns}
                          selectionMode={SelectionMode.none}
                          setKey="opunifiedSymboleratorId"
                          layoutMode={DetailsListLayoutMode.fixedColumns}
                          constrainMode={ConstrainMode.unconstrained}
                          selectionPreservedOnEmptyClick={true}
                          // data-is-scrollable={true}

                          // @ts-ignore
                          onRenderDetailsHeader={
                            // tslint:disable-next-line:jsx-no-lambda
                            (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                              <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
                                <DetailsHeader
                                  {...detailsHeaderProps}
                                  styles={{ root: { paddingTop: 0, height: 24, lineHeight: 24 }, check: { height: "24px !important" }, cellIsCheck: { height: 24 } }}
                                />
                                {/* {defaultRender(detailsHeaderProps)} */}
                              </Sticky>
                            )}

                          // @ts-ignore
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
                    <TextField label="合约统一标识"
                      placeholder="......"
                      defaultValue={this.state.denyTradeSpecialUnifiedSymbolInput}
                      onChange={(event: any, newValue?: string) => this.setState({ 'denyTradeSpecialUnifiedSymbolInput': newValue })}
                    />
                    <PrimaryButton
                      allowDisabledFocus={true}
                      checked={false}
                      text="新增拒绝"
                      onClick={() => {
                        if (this.state.denyTradeSpecialUnifiedSymbolInput && this.state.denyTradeSpecialUnifiedSymbolInput !== '') {
                          if (selectedOperator) {
                            let tmpSet = new Set()
                            if (selectedOperator.denyTradeSpecialUnifiedSymbolSet) {
                              tmpSet = new Set(selectedOperator.denyTradeSpecialUnifiedSymbolSet)
                            }
                            tmpSet.add(this.state.denyTradeSpecialUnifiedSymbolInput)
                            selectedOperator.denyTradeSpecialUnifiedSymbolSet = [...tmpSet]
                            this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                            this.setState({ 'denyTradeSpecialUnifiedSymbolInput': '' })
                          } else {
                            toast("请选择操作员", { type: 'error' })
                          }
                        }
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%', } }}>
                  <Stack {...{
                    styles: { root: { width: "100%", borderTop: "solid 1px #383838", borderBottom: "solid 1px #383838", padding: 10 } }
                  }}>
                    合约订阅权限
                  </Stack>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack horizontal={true} tokens={{ childrenGap: 10 }} styles={{ root: { width: '100%', } }}>
                  <Stack styles={{ root: { width: 175, paddingLeft: 10 } }}>
                    <Checkbox
                      label="允许订阅所有合约"
                      styles={{ root: { marginTop: 3 } }}
                      checked={canSubscribeAllContracts}
                      onChange={(event: any, checked) => {
                        if (selectedOperator) {
                          selectedOperator.canSubscribeAllContracts = checked
                          this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                        } else {
                          toast("请选择操作员", { type: 'error' })
                        }
                      }}
                    />
                  </Stack>
                  <Stack styles={{ root: { width: 400, borderLeft: "solid 1px #383838", borderRight: "solid 1px #383838" } }}>
                    <div style={{ width: "100%", borderBottom: "solid 1px #383838", padding: 5 }}>
                      允许列表
                          </div>
                    <div className={classNames.childTableWrapper}>
                      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                        <DetailsList
                          items={acceptSubscribeSpecialUnifiedSymbolList}
                          compact={true}
                          columns={acceptSubscribeSpecialUnifiedSymbolSetColumns}
                          selectionMode={SelectionMode.none}
                          setKey="unifiedSymbol"
                          layoutMode={DetailsListLayoutMode.fixedColumns}
                          constrainMode={ConstrainMode.unconstrained}
                          selectionPreservedOnEmptyClick={true}
                          // data-is-scrollable={true}

                          // @ts-ignore
                          onRenderDetailsHeader={
                            // tslint:disable-next-line:jsx-no-lambda
                            (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                              <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
                                <DetailsHeader
                                  {...detailsHeaderProps}
                                  styles={{ root: { paddingTop: 0, height: 24, lineHeight: 24 }, check: { height: "24px !important" }, cellIsCheck: { height: 24 } }}
                                />
                                {/* {defaultRender(detailsHeaderProps)} */}
                              </Sticky>
                            )}

                          // @ts-ignore
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
                    <TextField label="合约统一标识"
                      placeholder="......"
                      defaultValue={this.state.acceptSubscribeSpecialUnifiedSymbolInput}
                      onChange={(event: any, newValue?: string) => this.setState({ 'acceptSubscribeSpecialUnifiedSymbolInput': newValue })}
                    />
                    <PrimaryButton
                      allowDisabledFocus={true}
                      checked={false}
                      text="新增允许"
                      onClick={() => {
                        if (this.state.acceptSubscribeSpecialUnifiedSymbolInput && this.state.acceptSubscribeSpecialUnifiedSymbolInput !== '') {
                          if (selectedOperator) {
                            let tmpSet = new Set()
                            if (selectedOperator.acceptSubscribeSpecialUnifiedSymbolSet) {
                              tmpSet = new Set(selectedOperator.acceptSubscribeSpecialUnifiedSymbolSet)
                            }
                            tmpSet.add(this.state.acceptSubscribeSpecialUnifiedSymbolInput)
                            selectedOperator.acceptSubscribeSpecialUnifiedSymbolSet = [...tmpSet]
                            this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                            this.setState({ 'acceptSubscribeSpecialUnifiedSymbolInput': '' })
                          } else {
                            toast("请选择操作员", { type: 'error' })
                          }
                        }
                      }}
                    />
                  </Stack>
                  <Stack styles={{ root: { width: 400, borderLeft: "solid 1px #383838", borderRight: "solid 1px #383838" } }}>
                    <div style={{ width: "100%", borderBottom: "solid 1px #383838", padding: 5 }}>
                      拒绝列表
                          </div>
                    <div className={classNames.childTableWrapper}>
                      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                        <DetailsList
                          items={denySubscribeSpecialUnifiedSymbolList}
                          compact={true}
                          columns={denySubscribeSpecialUnifiedSymbolSetColumns}
                          selectionMode={SelectionMode.none}
                          setKey="unifiedSymbol"
                          layoutMode={DetailsListLayoutMode.fixedColumns}
                          constrainMode={ConstrainMode.unconstrained}
                          selectionPreservedOnEmptyClick={true}
                          // data-is-scrollable={true}

                          // @ts-ignore
                          onRenderDetailsHeader={
                            // tslint:disable-next-line:jsx-no-lambda
                            (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => (
                              <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
                                <DetailsHeader
                                  {...detailsHeaderProps}
                                  styles={{ root: { paddingTop: 0, height: 24, lineHeight: 24 }, check: { height: "24px !important" }, cellIsCheck: { height: 24 } }}
                                />
                                {/* {defaultRender(detailsHeaderProps)} */}
                              </Sticky>
                            )}

                          // @ts-ignore
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
                    <TextField label="合约统一标识"
                      placeholder="......"
                      defaultValue={this.state.denySubscribeSpecialUnifiedSymbolInput}
                      onChange={(event: any, newValue?: string) => this.setState({ 'denySubscribeSpecialUnifiedSymbolInput': newValue })}
                    />
                    <PrimaryButton
                      allowDisabledFocus={true}
                      checked={false}
                      text="新增拒绝"
                      onClick={() => {
                        if (this.state.denySubscribeSpecialUnifiedSymbolInput && this.state.denySubscribeSpecialUnifiedSymbolInput !== '') {
                          if (selectedOperator) {
                            let tmpSet = new Set()
                            if (selectedOperator.denySubscribeSpecialUnifiedSymbolSet) {
                              tmpSet = new Set(selectedOperator.denySubscribeSpecialUnifiedSymbolSet)
                            }
                            tmpSet.add(this.state.denySubscribeSpecialUnifiedSymbolInput)
                            selectedOperator.denySubscribeSpecialUnifiedSymbolSet = [...tmpSet]
                            this.props.operatorStore.saveOrUpdateOperator(selectedOperator)
                            this.setState({ 'denySubscribeSpecialUnifiedSymbolInput': '' })
                          } else {
                            toast("请选择操作员", { type: 'error' })
                          }
                        }
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack.Item>

            </Stack>
          </Stack>
        </Stack.Item>

        <Dialog
          hidden={this.state.hiddenDeleteOperatorDialog}
          onDismiss={() => this.closeDeleteOperatorDialog()}
          dialogContentProps={{
            type: DialogType.normal,
            title: '删除操作员确认',
            subText: `是否删除操作员 ${this.state.operatorIdForDelete} ？此操作不可逆`
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 498 } },
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={() => this.deleteOperatorById()} text="删除" />
            <DefaultButton onClick={() => this.closeDeleteOperatorDialog()} text="取消" />
          </DialogFooter>
        </Dialog>

        <Modal
          isOpen={this.state.showUpdateOperatorDescriptionModal}
          isBlocking={false}
          onDismiss={() => this.closeUpdateOperatorDescriptionModal()}
        >
          <Stack tokens={{ childrenGap: 12, padding:20 }}>

            <Stack.Item align="center">
              <div style={{ fontSize: FontSizes.medium }} >操作员ID: {this.state.operatorIdForUpdateDescription}</div>
            </Stack.Item>
            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <TextField label="操作员描述" multiline={true} resizable={true} defaultValue={this.state.editOperatorDescription ? this.state.editOperatorDescription : ""} onChange={(event: any, newValue?: string) => this.editOperatorDescriptionOnChange(event)} />
                </Stack>
              </Stack>
            </Stack.Item>

            <Stack.Item align="center">
              <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
                <Stack {...columnProps}>
                  <PrimaryButton text="保存" onClick={() => this.updateOperatorDescriptionByOperatorId()} />
                  <DefaultButton text="取消" onClick={() => this.closeUpdateOperatorDescriptionModal()} />
                </Stack>
              </Stack>
            </Stack.Item>
          </Stack>
        </Modal>

      </Stack>
    )
  }

  private resize() {
    this.setState({ "windowInnerWidth": window.innerWidth, "windowInnerHeight": window.innerHeight })
  }

  private createOperator() {
    this.props.operatorStore.createOperator()
  }


  private openDeleteOperatorDialog(operator: any) {
    this.setState({ operatorIdForDelete: operator.operatorId, hiddenDeleteOperatorDialog: false })
  }

  private deleteOperatorById() {
    this.operatorSelection.setAllSelected(false)
    this.props.operatorStore.deleteOperatorByOperatorId(this.state.operatorIdForDelete);
    this.closeDeleteOperatorDialog();
  }

  private closeDeleteOperatorDialog() {
    this.setState({ operatorIdForDelete: null, hiddenDeleteOperatorDialog: true })
  }

  private openUpdateOperatorDescriptionModal = (operatorId: number, description: string) => {
    this.setState({ operatorIdForUpdateDescription: operatorId, editOperatorDescription: description, showUpdateOperatorDescriptionModal: true });
  }

  private closeUpdateOperatorDescriptionModal = () => {
    this.setState({ showUpdateOperatorDescriptionModal: false, operatorIdForUpdateDescription: null, editOperatorDescription: '' });
  }

  private updateOperatorDescriptionByOperatorId = () => {
    const operatorId = this.state.operatorIdForUpdateDescription
    const operatorDescription = this.state.editOperatorDescription
    if (this.props.operatorStore.operatorMap.has(operatorId)) {
      const operator = this.props.operatorStore.operatorMap.get(operatorId)
      operator.description = operatorDescription
      this.props.operatorStore.saveOrUpdateOperator(operator)
    } else {
      toast("未能根据ID找到对应的操作员", { type: 'error' })
    }

    this.closeUpdateOperatorDescriptionModal();
  }

  private editOperatorDescriptionOnChange(event: any) {
    this.setState({ editOperatorDescription: event.target.value })
  }


}));


export default withRouter(HomePage);
