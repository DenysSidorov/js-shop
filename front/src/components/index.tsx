import React, {FunctionComponent} from 'react';
import {Route, Switch} from 'react-router-dom';

import Shop from './pages/app-wrapper';
// import RouteAuth from '../shop/helpers/RouteAuth';
import Panel from './pages/panel/Panel';
import Landing from './pages/landing';
import RouteAuth from './HOCs/RouteAuth';
// import NotificationsWrapper from '../shop/helpers/NotificationsWrapper';

const App: FunctionComponent = (props) => {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Switch>
        <RouteAuth path='/panel' component={Panel} />
        <Route exact path='/' component={Landing} />
        <Shop {...props} />
      </Switch>
      <div id='modal-root' style={{zIndex: 99999999}} />
      {/* <NotificationsWrapper /> */}
    </div>
  );
};

export default App;
