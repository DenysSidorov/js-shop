import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { loadingBarReducer , showLoading} from 'react-redux-loading-bar'; // preloader
import {reducer as notifications} from 'react-notification-system-redux'; // notification system
import counter from './counterRRR'
import cartReducer from './cart'
import serviceReducer from './service'
import confirmCardReducer from './confirmInCard'
import serverPreloaderReducer from './serverPreloader'
import authReducer from './authReducer/authReducer'
import adminPanelReducer from './panel/adminPanelReducer'

export default combineReducers({
    router: routerReducer, // second place react-router-redux including, first - applyMiddleware
    counter,
    serviceReducer,
    loadingBar: loadingBarReducer,
    cart: cartReducer,
    confirmsCard: confirmCardReducer,
    authReducer,
    adminPanelReducer,
    // serverPreloaderReducer,
  notifications

})