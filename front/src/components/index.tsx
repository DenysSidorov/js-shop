import React, {FunctionComponent} from 'react';
import {Route, Switch} from 'react-router-dom';

import Shop from './pages/shop-wrapper';
// import RouteAuth from '../shop/helpers/RouteAuth';
// import Panel from '../shop/panel/index';
import Landing from './pages/shop/landing';
// import NotificationsWrapper from '../shop/helpers/NotificationsWrapper';
const App: FunctionComponent = (props) => {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Switch>
        <Route exact path='/' component={Landing} />
        {/* <RouteAuth path='/panel' component={Panel} /> */}
        <Shop {...props} />
      </Switch>
      <div id='modal-root' style={{zIndex: 99999999}} />
      {/* <NotificationsWrapper /> */}
    </div>
  );
};

export default App;
