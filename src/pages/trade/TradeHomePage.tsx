import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { withRouter } from 'react-router';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import './TradeHomePage.css';
import AccountDetailsPage from './childcomponents/AccountDetailsPage';
import PositionDetailsPage from './childcomponents/PositionDetailsPage';
import OrderDetailsPage from './childcomponents/OrderDetailsPage';
import ContractDetailsPage from './childcomponents/ContractDetailsPage';
import FavoriteContractDetailsPage from './childcomponents/FavoriteContractDetailsPage';
import TradeDetailsPage from './childcomponents/TradeDetailsPage';
import TradeBoardPage from './childcomponents/TradeBoardPage';
import MarketDetailsPage from './childcomponents/MarketDetailsPage';

@inject('authenticationStore')
@observer
export class TradeHomePage extends React.Component<any> {

  public state = {
    windowInnerWidth: window.innerWidth,
    windowInnerHeight: window.innerHeight
  };

  componentDidMount() {
    const { authenticationStore } = this.props;
    authenticationStore.keepLogin()
    this.resize()
    window.addEventListener('resize', this.resize);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({ "windowInnerWidth": window.innerWidth, "windowInnerHeight": window.innerHeight })
  }




  public render() {

    return (
      <Stack horizontal={true} tokens={{ childrenGap: 2 }} styles={{ root: { width: '100%' } }}>
        <Stack styles={{ root: { background: "#111111", width: "100%" } }}>
          <Stack.Item>
            <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%', borderBottom: "2px solid rgb(25,25,25)" } }}>
              <Stack styles={{ root: { width: "249px", borderRight: "1px solid rgb(102,102,102)" } }}>
                <MarketDetailsPage componentHeight={450} />
              </Stack>
              <Stack styles={{ root: { width: "calc(100% - 250px)" } }}>
                <TradeBoardPage componentHeight={450} />
              </Stack>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
              <Stack styles={{ root: { width: "100%" } }}>
                <Pivot>
                  <PivotItem
                    headerText="定单"
                  >
                    <OrderDetailsPage componentHeight={this.state.windowInnerHeight - 84 - 450} />
                  </PivotItem>
                  <PivotItem headerText="成交">
                    <TradeDetailsPage componentHeight={this.state.windowInnerHeight - 84 - 450} />
                  </PivotItem>
                </Pivot>
              </Stack>
            </Stack>
          </Stack.Item>
        </Stack>
        <Stack styles={{ root: { width: "100%" } }}>
          <Stack.Item>
            <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
              <Stack styles={{ root: { background: "#111111", width: "100%" } }}>
                <Pivot>
                  <PivotItem
                    headerText="投资组合"
                  >
                    <Stack styles={{ root: { width: "100%" } }}>
                      <Stack.Item>
                        <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                          <AccountDetailsPage componentHeight={(this.state.windowInnerHeight - 82) / 2} />
                        </Stack>
                      </Stack.Item>
                      <Stack.Item>
                        <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                          <Stack styles={{ root: { width: "100%" } }}>
                            <PositionDetailsPage componentHeight={(this.state.windowInnerHeight - 82) / 2} />
                          </Stack>
                        </Stack>
                      </Stack.Item>
                    </Stack>
                  </PivotItem>
                  <PivotItem headerText="常用合约">
                    <Stack styles={{ root: { width: "100%" } }}>
                      <Stack.Item>
                        <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                          <Stack styles={{ root: { width: "100%" } }}>
                            <FavoriteContractDetailsPage componentHeight={this.state.windowInnerHeight - 82} />
                          </Stack>
                        </Stack>
                      </Stack.Item>
                    </Stack>
                  </PivotItem>
                  <PivotItem headerText="全部合约(缓存)">
                    <Stack styles={{ root: { width: "100%" } }}>
                      <Stack.Item>
                        <Stack horizontal={true} tokens={{ childrenGap: 0 }} styles={{ root: { width: '100%' } }}>
                          <Stack styles={{ root: { width: "100%" } }}>
                            <ContractDetailsPage componentHeight={this.state.windowInnerHeight - 82} />
                          </Stack>
                        </Stack>
                      </Stack.Item>
                    </Stack>
                  </PivotItem>
                </Pivot>
              </Stack>

            </Stack>
          </Stack.Item>
        </Stack>
      </Stack>
    );
  }



}

export default withRouter(TradeHomePage)
