import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, Switch } from 'react-router';
import {
  history,
  routingStore,
  authenticationStore,
  nodeStore,
  gatewayStore,
  userStore,
  tradeAccountStore,
  tradeContractStore,
  tradeOrderStore,
  tradePositionStore,
  tradeTradeStore,
  tradeTickStore,
  tradeActionStore,
  marketDataRecordingStore,
  customizeStore,
  operatorStore
} from './stores/storesIndex'
import { routes, RouteWithSubRoutes } from './router'
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { loadTheme } from '@fluentui/react/lib/Styling';
// import 'mobx-react-lite/batchingForReactDom'

// Call it once in your app. At the root of your app is the best place
toast.configure({
  autoClose: 15000,
  style: { width: 400, wordBreak: "break-all", whiteSpace: "pre-wrap", zIndex: 10000000 }
})

initializeIcons('../fabric/fonts/');

loadTheme({
  palette: {
    themePrimary: '#00a0ff',
    themeLighterAlt: '#00060a',
    themeLighter: '#001a29',
    themeLight: '#00304d',
    themeTertiary: '#006199',
    themeSecondary: '#008ee0',
    themeDarkAlt: '#19abff',
    themeDark: '#3db8ff',
    themeDarker: '#70cbff',
    neutralLighterAlt: '#232323',
    neutralLighter: '#2c2c2c',
    neutralLight: '#3b3b3b',
    neutralQuaternaryAlt: '#444444',
    neutralQuaternary: '#4b4b4b',
    neutralTertiaryAlt: '#6a6a6a',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#191919',
  }
});


// Stores
const stores = {
  authenticationStore,
  routingStore,
  nodeStore,
  gatewayStore,
  userStore,
  tradeAccountStore,
  tradeContractStore,
  tradeOrderStore,
  tradePositionStore,
  tradeTradeStore,
  tradeTickStore,
  tradeActionStore,
  marketDataRecordingStore,
  customizeStore,
  operatorStore
};

ReactDOM.render(
  <Provider {...stores} style={{ height: "100%" }}>
    <Router history={history}>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
