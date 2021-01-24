import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps } from '@fluentui/react/lib/Stack';
import { FontSizes } from '@fluentui/react/lib/Styling';
import { Separator } from '@fluentui/react/lib/Separator';
import { PrimaryButton, ActionButton, DefaultButton } from '@fluentui/react/lib/Button';
import { withRouter, Redirect } from 'react-router';
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { inject, observer } from 'mobx-react';


const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } }
};

export const LoginPage = inject('authenticationStore')(observer(class LoginPage extends React.Component<any> {

  public state = {
    redirectToPah: "/trade/home"
  }

  public render() {
    const { authenticationStore } = this.props;

    if (authenticationStore.isAuthenticated) {
      return (
        <Redirect to={this.state.redirectToPah} />
      )
    }

    return (
      <Stack tokens={{ childrenGap: 12 }}>

        <Stack.Item align="center">
          <Separator><div style={{ fontSize: FontSizes.xxLarge }} >RedTorch</div></Separator>
        </Stack.Item>
        <Stack.Item align="center">
          <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
            <Stack {...columnProps}>
              <TextField label="用户名" id="useranme" value={authenticationStore.username} onChange={this.handleUsernameChange} />
              <TextField label="密码" type='password' id="password" value={authenticationStore.password} onChange={this.handlePasswordChange} />
              <Checkbox label="保存登录信息(非常不安全)" checked={authenticationStore.saveLoginInfoState} onChange={this.handleSaveLoginInfoChange} />
              <PrimaryButton
                allowDisabledFocus={true}
                disabled={false}
                checked={false}
                text="登录交易(PC)"
                onClick={() => {
                  this.props.authenticationStore.login()
                }}
              />
              <DefaultButton
                allowDisabledFocus={true}
                disabled={false}
                checked={false}
                text="登录交易(移动端)"
                onClick={() => {
                  this.setState({ "redirectToPah": "/tradeMobile/home" })
                  this.props.authenticationStore.login()
                }}
              />
              <DefaultButton
                allowDisabledFocus={true}
                disabled={false}
                checked={false}
                text="登录管理"
                onClick={() => {
                  this.setState({ "redirectToPah": "/management/gateway" })
                  this.props.authenticationStore.login()
                }}
              />
              <div>
                <ActionButton
                  style={{ float: "left" }}
                  iconProps={{ iconName: 'Delete' }}
                  allowDisabledFocus={true}
                  disabled={false}
                  checked={false}
                  onClick={() => {
                    authenticationStore.deleteLoginInfo()
                  }}
                >
                  清除登录信息
                </ActionButton>
              </div>

            </Stack>
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }

  private handleUsernameChange = (event: any) => {
    const { authenticationStore } = this.props
    authenticationStore.setUsername(event.target.value)
  }

  private handlePasswordChange = (event: any) => {
    const { authenticationStore } = this.props
    authenticationStore.setPassword(event.target.value)
  }

  private handleSaveLoginInfoChange = (event: any) => {
    const { authenticationStore } = this.props
    authenticationStore.setSaveLoginInfoState(event.currentTarget.checked)
  }


}));

// NOTE: hack https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md#quick-solution
export default withRouter(LoginPage)
