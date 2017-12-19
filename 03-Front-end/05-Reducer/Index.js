import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import token from "./Token";

export default combineReducers({
  router: routerReducer,
  token
});
