import { combineReducers } from 'redux'
import BooksReucer from './reducer-books'
import ActiveBook from './reducer-active-book'


const rootReducer = combineReducers({
  books: BooksReucer,
  activeBook: ActiveBook
})

export default rootReducer
