import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Grid from "material-ui/Grid";
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles";

import * as Pages from "../Index";
import BrownTheme from "../../02-Theme/Brown";
import * as Layouts from "../../01-Component/Layouts/Index";
import "./Style.scss";

const theme = createMuiTheme(BrownTheme);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Grid container spacing={0}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Layouts.Login>
                <Pages.Login />
              </Layouts.Login>
            )}
          />
          <Route
            path="/login"
            render={() => (
              <Layouts.Login>
                <Pages.Login />
              </Layouts.Login>
            )}
          />
          <Route
            path="/logout"
            render={() => (
              <Layouts.Login>
                <Pages.Logout />
              </Layouts.Login>
            )}
          />
          <Route
            path="/dashboard"
            render={() => (
              <Layouts.Global>
                <Pages.Dashboard />
              </Layouts.Global>
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Layouts.Global>
                <Pages.Profile />
              </Layouts.Global>
            )}
          />
        </Switch>
      </BrowserRouter>
    </Grid>
  </MuiThemeProvider>
);

export default withRouter(App);
