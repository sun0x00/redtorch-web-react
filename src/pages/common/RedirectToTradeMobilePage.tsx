import * as React from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

const RedirectToTradeMobilePage = observer(() => (
  <Redirect to="/tradeMobile/home" />
))

export default RedirectToTradeMobilePage

export { RedirectToTradeMobilePage }