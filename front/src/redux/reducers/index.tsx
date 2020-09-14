import {combineReducers} from 'redux';
import serviceReducer from './service-app';
import cartReducer from './cart-reducer/index';
import authReducer from './auth-reducer/authReducer';
import confirmsCard from './confirm-in-card';

const reducer = (state: any, action: any) => action;

const cr = combineReducers({
  reducerTest: reducer,
  serviceReducer,
  cartReducer,
  authReducer,
  confirmsCard
});

export default cr;
