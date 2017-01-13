import { combineReducers } from 'redux'
import daysReducer from './reducer_days'
import selectedDay from './reducer_selected_day'

const rootReducers = combineReducers({
    days: daysReducer,
    day: selectedDay
})

export default rootReducers