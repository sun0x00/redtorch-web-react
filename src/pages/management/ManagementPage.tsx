import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';

import './ManagementPage.css';
import { withRouter } from 'react-router';

import { RouteWithSubRoutes } from '../../router'

@inject('routingStore')
@observer
export class ManagementPage extends React.Component<any> {

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
      <Pivot 
        defaultSelectedKey={defaultSelectedKey} 
        onLinkClick={this.onLinkClick}
        styles={{linkIsSelected:{height:24},link:{height:24},linkContent:{height:24},root:{height:24},text:{lineHeight:24}}}
      >
        {routes.map((route: any, i: any) => (
          <PivotItem key={`PivotItemKey_${route.name}`} itemKey={route.path} headerText={route.name}>
            <RouteWithSubRoutes {...route} />
          </PivotItem>
        ))}
      </Pivot>
    );
  }

  onLinkClick = (item: PivotItem): void => {
    const { history } = this.props;
    history.push(item.props.itemKey)
  };
}

// NOTE: hack https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md#quick-solution
export default withRouter(ManagementPage)