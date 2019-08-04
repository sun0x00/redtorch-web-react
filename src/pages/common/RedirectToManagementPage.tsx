import * as React from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

const RedirectToManagementPage = observer(() => (
  <Redirect to="/management/gateway" />
))

export default RedirectToManagementPage

export { RedirectToManagementPage }