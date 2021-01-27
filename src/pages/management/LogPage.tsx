import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router';

export const LogPage = inject('authenticationStore')(observer(class LogPage extends React.Component<any> {

  public state = { password: '', newPassword: '' };

  public render() {
    return (
      <div>开发中</div>
    );
  }

}));

export default withRouter(LogPage)
