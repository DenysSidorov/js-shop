import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

interface IRouteAuth {
  component: React.ElementType;
  authReducer?: any;
  path: string;
}

const RouteAuth = ({component: Comp, ...rest}: IRouteAuth) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        const fakeAuth = rest.authReducer.authenticated;
        const token = localStorage.getItem('info');
        return fakeAuth && token ? <Comp {...matchProps} /> : <Redirect to='/login' />;
      }}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    authReducer: state.authReducer
  };
};

export default connect(mapStateToProps, null)(RouteAuth);
