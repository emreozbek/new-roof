import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Grid from "material-ui/Grid";

import * as Pages from "../Pages/Index";

const App = () => (
  <Router>
    <Grid container spacing={0}>
      <Link to="/">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Route exact path="/" component={Pages.Login} />
      <Route path="/dashboard" component={Pages.Dashboard} />
    </Grid>
  </Router>
);

export default App;
