import { connect } from 'react-redux';
import { requestAllPosts } from '../../../actions/front_page_actions';
import FrontPage from './front_page';


const mapStateToProps = (state, ownProps )=> ({
  posts: state.posts
});


export default connect(
  mapStateToProps,
  null
)(FrontPage);
