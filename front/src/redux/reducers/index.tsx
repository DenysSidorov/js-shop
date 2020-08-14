import {combineReducers} from 'redux';
import serviceReducer from './service-app';

const reducer = (state: any, action: any) => action;

const cr = combineReducers({
  reducerTest: reducer,
  serviceReducer
});

export default cr;
