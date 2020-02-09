import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import { RouterStore } from 'mobx-react-router'
import { nodeStore } from './nodeStore'
import { gatewayStore } from './gatewayStore'
import { userStore } from './userStore'
import { authenticationStore } from './authenticationStore'
import { tradeOrderStore } from './tradeOrderStore';
import { tradeAccountStore } from './tradeAccountStore';
import { tradePositionStore } from './tradePositionStore';
import { tradeContractStore } from './tradeContractStore';
import { tradeTradeStore } from './tradeTradeStore';
import { tradeTickStore } from './tradeTickStore';
import { tradeActionStore } from './tradeActionStore';
import { customizeStore } from './customizeStore';
import { marketDataRecordingStore } from './marketDataRecordingStore';
import { operatorStore } from './operatorStore';


export const browserHistory = createBrowserHistory();
export const routingStore = new RouterStore();

export const history = syncHistoryWithStore(browserHistory, routingStore);
export {
    authenticationStore,
    nodeStore,
    gatewayStore,
    userStore,
    tradeOrderStore,
    tradeAccountStore,
    tradePositionStore,
    tradeContractStore,
    tradeTradeStore,
    tradeTickStore,
    tradeActionStore,
    customizeStore,
    marketDataRecordingStore,
    operatorStore
}