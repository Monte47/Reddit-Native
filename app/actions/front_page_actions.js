import * as APIUtil from '../util/front_page_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = posts => {
  return {
  type: RECEIVE_POSTS,
  posts
  };
};

export const requestAllPosts = () => dispatch => {
  return (
    APIUtil.fetchAllPosts()
      .then(posts => dispatch(receivePosts(posts)))
  );
};
