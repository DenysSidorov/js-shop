import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading-bar';
import {reducer as notifications} from 'react-notification-system-redux';
import serviceReducer from './service-app';
import cartReducer from './cart-reducer/index';
import authReducer from './auth-reducer/authReducer';
import confirmsCard from './confirm-in-card';
import panelReducer from './panel-reducer/adminPanelReducer';

const reducer = (state: any, action: any) => action;

const cr = combineReducers({
  reducerTest: reducer,
  serviceReducer,
  cartReducer,
  authReducer,
  confirmsCard,
  panelReducer,
  notifications,
  loadingBar: loadingBarReducer
});

export default cr;
