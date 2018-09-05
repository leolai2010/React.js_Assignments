import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
//connecting book reducer to the index of reducers
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
