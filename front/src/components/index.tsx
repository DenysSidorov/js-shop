import React, {FunctionComponent} from 'react';
import {Route, Switch} from 'react-router-dom';

// import WrapperApp from './WrapperApp';
// import RouteAuth from '../shop/helpers/RouteAuth';
// import Panel from '../shop/panel/index';
import Landing from './pages/landing';
// import NotificationsWrapper from '../shop/helpers/NotificationsWrapper';
const App: FunctionComponent = () => {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Switch>
        <Route path='/' component={Landing} />
        {/* <RouteAuth path='/panel' component={Panel} /> */}
        {/* <WrapperApp {...this.props} /> */}
      </Switch>
      <div id='modal-root' style={{zIndex: 99999999}} />
      {/* <NotificationsWrapper /> */}
    </div>
  );
};

export default App;