import actionStrings from '../actions/actionStrings.json';
import GetPosts from '../network services/PostService.js';

const postActions = actionStrings.postActions;

const postsReducer = (state = null, action) => {
    switch (action.type) {
        case postActions.getAll:
            const posts = GetPosts(action.id);
            
            return posts
        default:
            return state;
    }
}

export default postsReducer;