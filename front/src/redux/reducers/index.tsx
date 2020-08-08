import {combineReducers} from 'redux';

const reducer = (state: any, action: any) => action;

const cr = combineReducers({
  reducerTest: reducer
});

export default cr;
