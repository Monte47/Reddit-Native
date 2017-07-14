import { connect } from 'react-redux';
import FrontPage from './front_page';


const mapStateToProps = (state, ownProps )=> ({
  posts: "hello"
});


const mapDispatchToProps = (dispatch) => ({
  getFeed: () => console.log("Hello")
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
