import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router';

export const TradeMobileHomePage = inject('authenticationStore')(observer(class TradeMobileHomePage extends React.Component<any> {

  public state = { password: '', newPassword: '' };

  public render() {
    return (
      <div>开发中</div>
    );
  }

}));

export default withRouter(TradeMobileHomePage)
