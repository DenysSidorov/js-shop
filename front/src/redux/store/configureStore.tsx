import {composeWithDevTools} from 'redux-devtools-extension';
import {Store, createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// const historyModule = require('history');
export const history = createBrowserHistory();

const initialState = {};
const enhancers: any[] = [];
const middleware = [routerMiddleware(history), thunk];
const isDevMode = process.env.NODE_ENV === 'development';

function setDevTools() {
  // eslint-disable-next-line global-require
  const immutableState = require('redux-immutable-state-invariant').default({
    ignore: ['apiPublishReducer.currentPublication.files']
  });

  if (typeof immutableState === 'function') {
    middleware.push(immutableState);
  }
}

if (isDevMode) {
  setDevTools();
}

let composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

composedEnhancers = isDevMode ? composeWithDevTools(composedEnhancers) : composedEnhancers;

const store: Store = createStore(rootReducer(history), initialState, composedEnhancers);

export default store;
