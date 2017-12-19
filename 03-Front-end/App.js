import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import * as inititalStates from "./06-Store/Index";
import Wrapper from "./00-Page/Wrapper";
import configureStore from "./06-Store/ConfigureStore";

const history = createHistory();
const store = configureStore({ ...inititalStates }, history);

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
render(Wrapper);
