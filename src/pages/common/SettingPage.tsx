import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import { FontSizes } from 'office-ui-fabric-react/lib/Styling';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { withRouter } from 'react-router';



const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } }
};


@inject('authenticationStore')
@observer
export class SettingPage extends React.Component<any> {

  public state = { password: '', newPassword: '' };

  public render() {
    return (
      <Stack gap={12}>
        <Stack.Item align="center">
          <Separator><div style={{ fontSize: FontSizes.xxLarge }} >退出登录</div></Separator>
        </Stack.Item>
        <Stack.Item align="center">
          <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
            <Stack {...columnProps}>
              <PrimaryButton
                allowDisabledFocus={true}
                disabled={false}
                checked={false}
                text="注销"
                onClick={() => {
                  this.props.authenticationStore.deleteLoginInfo();
                  this.props.authenticationStore.logout()
                  this.props.history.push('/login')
                }}
              />
            </Stack>
          </Stack>
        </Stack.Item>
        <Stack.Item align="center">
          <Separator><div style={{ fontSize: FontSizes.xxLarge }} >修改密码</div></Separator>
        </Stack.Item>
        <Stack.Item align="center">
          <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: '100%' } }}>
            <Stack {...columnProps}>
              <TextField label="旧密码" type='password' onChange={this.handlePasswordChange} defaultValue={this.state.password} />
              <TextField label="新密码" type='password' onChange={this.handleNewPasswordChange} defaultValue={this.state.newPassword} />
              <PrimaryButton
                allowDisabledFocus={true}
                disabled={false}
                checked={false}
                text="修改"
                onClick={() => {
                  this.props.authenticationStore.changePassword(this.state.password, this.state.newPassword)
                  this.setState({ 'password': '', 'newPassword': '' })
                }}
              />

            </Stack>
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }

  private handlePasswordChange = (event: any) => {
    this.setState({ 'password': event.target.value })
  }

  private handleNewPasswordChange = (event: any) => {
    this.setState({ 'newPassword': event.target.value })
  }

}

export default withRouter(SettingPage)
