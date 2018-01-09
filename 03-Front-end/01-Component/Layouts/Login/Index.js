import React from "react";
import PropTypes from "prop-types";
import { Grid, withStyles } from "material-ui";

import styles from "./Style";

const Login = ({ classes, children }) => (
  <Grid
    container
    column="column"
    justify="center"
    alignItems="center"
    spacing={0}
  >
    <div className={classes.background} />
    <Grid item className={classes.grid}>
      {children}
    </Grid>
  </Grid>
);

Login.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any
};
Login.defaultProps = {
  children: null,
  classes: []
};

export default withStyles(styles)(Login);
