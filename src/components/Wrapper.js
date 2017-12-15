import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "material-ui/Grid";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import * as Pages from "../pages/Index";
import BrownTheme from "../themes/Brown";

const theme = createMuiTheme(BrownTheme);

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={0}>
            <Route exact path="/" component={Pages.Login} />
            <Route path="/dashboard" component={Pages.Dashboard} />
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
