import {composeWithDevTools} from 'redux-devtools-extension';
import {Store, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import saveCartState from '../middlewares/saveCartInUserStorage';
import rootSaga from './rootSaga';

export const history = createBrowserHistory();
const initialState = {};
const enhancers: any[] = [];
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk, saveCartState];
const isDevMode = process.env.NODE_ENV === 'development';

function setDevTools() {
  // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires
  const immutableState = require('redux-immutable-state-invariant').default({
    ignore: ['apiPublishReducer.currentPublication.files'],
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

const store: Store = createStore(rootReducer, initialState, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
