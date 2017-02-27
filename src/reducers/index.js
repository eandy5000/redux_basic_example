import { combineReducers } from 'redux';
import  daysReducer from './days_reducer';
import selectedDay from './selected_day_reducer';

const rootReducers = combineReducers({
    days: daysReducer,
    selectedDay: selectedDay
});

export default rootReducers;