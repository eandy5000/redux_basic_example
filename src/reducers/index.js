import { combineReducers} from 'redux'
import NamesReducer from './reducer_names'
import SelectedItemReducer from './reducer_selected_item'

const rootReducers = combineReducers({
    names: NamesReducer,
    name: SelectedItemReducer
})

export default rootReducers 