import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'; //this reducer is imported this way becase of actions/index.js
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
