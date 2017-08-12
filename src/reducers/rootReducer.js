import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counterRRR'

export default combineReducers({
    router: routerReducer, // second place react-router-redux including, first - applyMiddleware
    counter
})