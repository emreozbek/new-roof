import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import "./scss/Index.scss";

import Index from "./components/Wrapper";
import configureStore from "./reducers/ConfigureStore";

const history = createHistory();
const store = configureStore(undefined, history);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
  );
};
render(Index);
