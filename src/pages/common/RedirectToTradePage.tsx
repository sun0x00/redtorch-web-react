import * as React from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

const RedirectToTradePage = observer(() => (
  <Redirect to="/trade/home" />
))

export default RedirectToTradePage

export { RedirectToTradePage }