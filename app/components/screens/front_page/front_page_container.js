import { connect } from 'react-redux';
import { requestAllPosts } from '../../../actions/front_page_actions';
import FrontPage from './front_page';
import ASYNC from '../../../util/async_util.js';


const mapStateToProps = (state, ownProps )=> ({
  posts: state.posts
});


const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(requestAllPosts()),
  setItem: ASYNC.setItem,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
