import * as React from 'react';
import ManagementPage from './pages/management/ManagementPage'

import NodePage from './pages/management/NodePage'
import GatewayPage from './pages/management/GatewayPage'
import SettingPage from './pages/common/SettingPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import { inject } from 'mobx-react';
import UserPage from './pages/management/UserPage';
import RedirectToManagementPage from './pages/common/RedirectToManagementPage';
import RedirectToTradeMobilePage from './pages/common/RedirectToTradeMobilePage';
import RedirectToTradePage from './pages/common/RedirectToTradePage'
import TradeHomePage from './pages/trade/TradeHomePage';
import TradePage from './pages/trade/TradePage';
import { TradeMobileHomePage } from './pages/tradeMobile/TradeMobileHomePage';
import { TradeMobilePage } from './pages/tradeMobile/TradeMobilePage';
import OperatorPage from './pages/management/OperatorPage';
// import LogPage from './pages/management/LogPage';
import MarketDataRecordingPage from './pages/management/MarketDataRecordingPage';
import { Route, Redirect } from 'react-router-dom';

const routes = [
  {
    name: "登录",
    path: "/login",
    component: LoginPage
  },
  {
    path: "/trade",
    component: TradePage,
    routes: [
      {
        name: "交易(PC)",
        path: "/trade/home",
        component: TradeHomePage,
        isPrivate: true
      },
      {
        name: "管理",
        path: "/trade/redirectToManagement",
        component: RedirectToManagementPage,
        isPrivate: true
      },
      {
        name: "交易（移动端)",
        path: "/trade/redirectToMobileTrade",
        component: RedirectToTradeMobilePage,
        isPrivate: true
      },
      {
        name: "设置",
        path: "/trade/setting",
        component: SettingPage,
        isPrivate: true
      },
    ]
  },
  {
    path: "/management",
    component: ManagementPage,
    routes: [
      {
        name: "交易(PC)",
        path: "/management/redirectToTrade",
        component: RedirectToTradePage,
        isPrivate: true
      },
      {
        name: "网关",
        path: "/management/gateway",
        component: GatewayPage,
        isPrivate: true
      },
      {
        name: "节点",
        path: "/management/node",
        component: NodePage,
        isPrivate: true
      },
      {
        name: "用户",
        path: "/management/user",
        component: UserPage,
        isPrivate: true
      },
      {
        name: "操作员",
        path: "/management/operator",
        component: OperatorPage,
        isPrivate: true
      },
      {
        name: "行情数据记录",
        path: "/management/marketDataRecording",
        component: MarketDataRecordingPage,
        isPrivate: true
      },
      // {
      //   name: "日志",
      //   path: "/management/log",
      //   component: LogPage,
      //   isPrivate: true
      // },
      {
        name: "设置",
        path: "/management/setting",
        component: SettingPage,
        isPrivate: true
      },
    ]
  },
  {
    path: "/tradeMobile",
    component: TradeMobilePage,
    routes: [
      {
        name: "交易(PC)",
        path: "/management/redirectToTrade",
        component: RedirectToTradePage,
        isPrivate: true
      },
      {
        name: "交易(移动端)",
        path: "/tradeMobile/home",
        component: TradeMobileHomePage,
        isPrivate: true
      },
      {
        name: "设置",
        path: "/tradeMobile/setting",
        component: SettingPage,
        isPrivate: true
      }
    ]
  },
  {
    component: NotFoundPage
  }
];


@inject('authenticationStore')
class RouteWithSubRoutes extends React.Component<any> {

  render() {
    const { authenticationStore } = this.props;
    return (
      <Route
        path={this.props.path}
        render={props => {
          if (this.props.isPrivate) {
            if (authenticationStore.isAuthenticated) {
              return (
                <this.props.component {...props} routes={this.props.routes} />
              )
            } else {
              return (
                <Redirect from="*" to='/login' />
              )
            }
          }
          return (
            // pass the sub-routes down to keep nesting
            <this.props.component {...props} routes={this.props.routes} />
          )
        }}
      />
    );
  }

}


export { routes, RouteWithSubRoutes }