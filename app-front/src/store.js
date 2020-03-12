import {createStore, applyMiddleware, compose} from "redux";
import {routerMiddleware} from "react-router-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import initLocalStorage from "./api/initLocalStorage";
import config from '../config';

// first export history, simple config
// import createHistory from "history"; .createBrowserHistory
import {createBrowserHistory} from 'history';;
// export const history = createHistory();
export const history = createBrowserHistory();
const initialState = {};
const enhancers = [];

const middleware = [
    thunk,
    routerMiddleware(history) // first place react-router-redux including, second - combineReducers
];

 if (config['NODE_ENV'] === 'development') {
    setDevTools();
 }

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

// initLocalStorage(store);


export default store;
if (config['NODE_ENV'] === 'development') { window.storet = store;}

function setDevTools()  {

    // https://github.com/zalmoxisus/redux-devtools-extension#usage
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }

// https://github.com/leoasis/redux-immutable-state-invariant
// only for develop, show message in console, when mutation state without spread, assign...
    let immutableState = require('redux-immutable-state-invariant').default();
    if (typeof immutableState === 'function') {
        middleware.push(immutableState)
    }
}
