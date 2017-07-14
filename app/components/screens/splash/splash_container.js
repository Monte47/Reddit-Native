import { connect } from 'react-redux';
import { requestAllPosts } from '../../../actions/front_page_actions';
import SplashPage from './splash';


const mapStateToProps = (state)=> ({
  posts: 'hello'
});


const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(requestAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);
