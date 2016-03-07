import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
//import this, but we'll use it as formReducer
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
})

export default rootReducer;
