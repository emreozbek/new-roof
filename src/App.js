import React from "react";
import { render } from "react-dom";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Index from "./components/Index";
import reducer from "./reducers/Index";

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("app")
);
