import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "../stores/Index";

const configureStore = (prelodedState, history) => {
  const middlewares = [thunk, routerMiddleware(history)];
  const composed = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, prelodedState, compose(...composed));
  return store;
};

export default configureStore;
