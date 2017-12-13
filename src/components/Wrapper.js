import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "material-ui/Grid";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Brown from "../themes/Brown";

import * as Pages from "../pages/Index";

const theme = createMuiTheme(Brown);

const App = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <Grid container spacing={0}>
        <Route exact path="/" component={Pages.Login} />
        <Route path="/dashboard" component={Pages.Dashboard} />
      </Grid>
    </MuiThemeProvider>
  </Router>
);

export default App;
