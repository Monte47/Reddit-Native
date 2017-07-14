import merge from 'lodash/merge';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default PostsReducer;
