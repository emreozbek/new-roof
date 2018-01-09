import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "../05-Reducer/Index";

const configureStore = (prelodedState, history) => {
  const middleware = [thunk, routerMiddleware(history)];
  const composed = [applyMiddleware(...middleware)];
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(rootReducer, prelodedState, compose(...composed));
  return store;
};

export default configureStore;
