import { combineReducers } from 'redux'
import daysReducer from './reducer_days'

const rootReducers = combineReducers({
    days: daysReducer
})

export default rootReducers