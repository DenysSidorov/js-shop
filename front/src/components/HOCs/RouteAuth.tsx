import React, {FC} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IReducersState} from '../../redux/reducers';

interface IRouteAuth {
  component: React.ElementType;
  path: string;
}

const RouteAuth: FC<IRouteAuth> = ({component: Comp, ...rest}) => {
  const authReducer = useSelector((state: IReducersState) => state.authReducer);
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        const fakeAuth = authReducer?.authenticated || false;
        const token = localStorage.getItem('info');
        return fakeAuth && token ? <Comp {...matchProps} /> : <Redirect to='/login' />;
      }}
    />
  );
};

export default RouteAuth;
