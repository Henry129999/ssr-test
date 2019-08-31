import { combineReducers } from "redux";
import org from './org';
import user from './user';

const todoApp = combineReducers({
  org,
  user,
});

export default todoApp;