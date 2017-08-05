// compose ?
import {createStore, applyMiddleware, compose} from "redux";
import {routerMiddleware} from "react-router-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

import createHistory from "history/createBrowserHistory";
export const history = createHistory();

const initialState = {};
const enhancers = [];

const middleware = [
    thunk,
    routerMiddleware(history)
];
// TODO how to use process.env.NODE_ENV from webpacl/node/environment
// if (process.env.NODE_ENV === 'development') {
    setDevTools();
// }

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export default store


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