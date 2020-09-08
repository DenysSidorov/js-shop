import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import serviceReducer from './service-app';
import cartReducer from './cart-reducer/index';
import authReducer from './auth-reducer/authReducer';

const reducer = (state: any, action: any) => action;

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    reducerTest: reducer,
    serviceReducer,
    cartReducer,
    authReducer
  });

export default createRootReducer;
