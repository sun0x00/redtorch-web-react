import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';

const RedirectToManagementPage = observer(() => (
  <Redirect to="/management/gateway" />
))

export default RedirectToManagementPage

export { RedirectToManagementPage }