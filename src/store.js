import {createStore, applyMiddleware, compose} from "redux";
import {routerMiddleware} from "react-router-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// first export history, simple config
import createHistory from "history/createBrowserHistory";
export const history = createHistory();

const initialState = {};
const enhancers = [];

const middleware = [
    thunk,
    routerMiddleware(history) // first place react-router-redux including, second - combineReducers
];

 if (process.env.NODE_ENV === 'development') {
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


export default store
if (process.env.NODE_ENV === 'development') { window.storet = store;}

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