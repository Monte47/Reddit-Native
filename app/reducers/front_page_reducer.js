import merge from 'lodash/merge';

import { RECEIVE_POSTS } from '../actions/front_page_actions';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
    return merge({}, state, action.posts.data.data);
    default:
      return state;
  }
};

export default PostsReducer;
