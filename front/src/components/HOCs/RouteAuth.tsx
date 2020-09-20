import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

interface IRouteAuth {
  component: React.Component | any;
  authReducer?: any;
  path: string;
}

const RouteAuth = ({component: Component, ...rest}: IRouteAuth) => (
  <Route
    {...rest}
    render={(matchProps) => {
      const fakeAuth = rest.authReducer.authenticated;
      const token = localStorage.getItem('info');
      console.log(fakeAuth, 'fakeAuth ');
      return fakeAuth && token ? <Component {...matchProps} /> : <Redirect to='/login' />;
    }}
  />
);

const mapStateToProps = (state: any) => {
  return {
    authReducer: state.authReducer
  };
};

export default connect(mapStateToProps, null)(RouteAuth);
console.log(3);
