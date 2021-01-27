import { createBrowserHistory } from 'history';
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
import { observable, action, makeObservable, observe } from 'mobx';

export class RouterStore {
  location = null;
  history: any = null;

  constructor() {
    makeObservable(this, {
      location: observable,
      _updateLocation: action
    });

    this.push = this.push.bind(this);
    this.replace = this.replace.bind(this);
    this.go = this.go.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
  }

  _updateLocation(newState: any) {
    this.location = newState;
  }

  /*
   * History methods
   */
  push = (location: any, state: any) => {
    this.history.push(location, state);
  }
  replace = (location: any, state: any) => {
    this.history.replace(location, state);
  }
  go = (n: any) => {
    this.history.go(n);
  }
  goBack = () => {
    this.history.goBack();
  }
  goForward = () => {
    this.history.goForward();
  }
};


export const syncHistoryWithStore = (history: any, store: any) => {
  // Initialise store
  store.history = history;

  // Handle update from history object
  const handleLocationChange = (location: any) => {
    store._updateLocation(location);
  };

  const unsubscribeFromHistory = history.listen(handleLocationChange);
  handleLocationChange(history.location);

  const subscribe = (listener: any) => {
    const onStoreChange = () => {
      const rawLocation = { ...store.location };
      listener(rawLocation, history.action);
    };

    // Listen for changes to location state in store
    const unsubscribeFromStore = observe(store, 'location', onStoreChange);

    listener(store.location, history.action);

    return unsubscribeFromStore;
  };

  history.subscribe = subscribe;
  history.unsubscribe = unsubscribeFromHistory;

  return history;
};


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