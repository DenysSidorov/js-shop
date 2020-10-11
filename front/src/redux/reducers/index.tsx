import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading-bar';
import {reducer as notifications} from 'react-notification-system-redux';
import serviceReducer, {IServiceReducer} from './service-app';
import cartReducer, {ICartReducerState} from './cart-reducer/cartReducer';
import authReducer, {IAuthReducerState} from './auth-reducer/authReducer';
import confirmsCard, {IConfirmsCard} from './confirm-in-card';
import panelReducer, {IAdminPanel} from './panel-reducer/adminPanelReducer';

export interface IReducersState {
  serviceReducer: IServiceReducer;
  cartReducer: ICartReducerState;
  authReducer: IAuthReducerState;
  confirmsCard: IConfirmsCard;
  panelReducer: IAdminPanel;
  notifications: any;
  loadingBar: any;
}

const reducersState = combineReducers<IReducersState>({
  serviceReducer,
  cartReducer,
  authReducer,
  confirmsCard,
  panelReducer,
  notifications,
  loadingBar: loadingBarReducer
});

export default reducersState;
