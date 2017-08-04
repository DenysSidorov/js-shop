import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counterRRR'

export default combineReducers({
    router: routerReducer,
    counter
})