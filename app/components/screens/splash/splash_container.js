import { connect } from 'react-redux';
import { requestAllPosts, receivePosts } from '../../../actions/front_page_actions';
import SplashPage from './splash';
import ASYNC from '../../../util/async_util.js';



const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(requestAllPosts()),
  receivePosts: posts => dispatch(receivePosts(posts)),
  getItem: ASYNC.getItem,
  setItem: ASYNC.setItem
});

export default connect(
  null,
  mapDispatchToProps
)(SplashPage);
