import dialogueReducer from './dialogueReducer';
import postsReducer from './postReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    dialogueMetaData: dialogueReducer,
    posts: postsReducer
});

export default allReducers;