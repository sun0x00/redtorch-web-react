import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Pivot, PivotItem } from '@fluentui/react/lib/Pivot';

import './TradePage.css';
import { withRouter } from 'react-router';

import { RouteWithSubRoutes } from '../../router'

export const TradePage = inject('routingStore')(observer(class TradePage extends React.Component<any> {

  public state = { selectedKey: 'Settings' };

  public render() {
    const { routes, location } = this.props;

    let defaultSelectedKey = '';
    routes.map((route: any, i: any) => {
      if (location.pathname.startsWith(route.path)) {
        defaultSelectedKey = route.path;
      }
    })

    return (
      <Pivot defaultSelectedKey={defaultSelectedKey} onLinkClick={this.onLinkClick} style={{ height: "100%" }}
        styles={{linkIsSelected:{height:24},link:{height:24},linkContent:{height:24},root:{height:24},text:{lineHeight:24}}}
      >
        {routes.map((route: any, i: any) => (
          <PivotItem key={`PivotItemKey_${route.name}`} itemKey={route.path} headerText={route.name} style={{ height: "calc(100% - 24px)" }}>
            <RouteWithSubRoutes {...route} />
          </PivotItem>
        ))}
      </Pivot>
    );
  }

  onLinkClick = (item: PivotItem|undefined): void => {
    const { history } = this.props;
    if(item){
      history.push(item.props.itemKey)
    }
  };
}));

// NOTE: hack https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md#quick-solution
export default withRouter(TradePage)