import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "material-ui/Grid";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import * as Pages from "./Index";
import BrownTheme from "../02-Theme/Brown";
import PrivateRoute from "../Core/PrivateRoute";

const theme = createMuiTheme(BrownTheme);

const App = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <Grid container spacing={0}>
        <Route exact path="/" component={Pages.Login} />
        <Route exact path="/login" component={Pages.Login} />
        <PrivateRoute path="/dashboard" component={Pages.Dashboard} />
      </Grid>
    </MuiThemeProvider>
  </Router>
);

export default App;
