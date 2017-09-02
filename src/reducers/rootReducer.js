import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'; // preloader
import counter from './counterRRR'
import cartReducer from './cart'
import confirmCardReducer from './confirmInCard'

export default combineReducers({
    router: routerReducer, // second place react-router-redux including, first - applyMiddleware
    counter,
    loadingBar: loadingBarReducer,
    cart: cartReducer,
    confirmsCard: confirmCardReducer
})