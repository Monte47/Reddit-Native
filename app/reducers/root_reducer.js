import { combineReducers } from 'redux';
import FrontPageReducer from './front_page_reducer';
const RootReducer = combineReducers({
  posts: FrontPageReducer
});

export default RootReducer;
