import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, withStyles } from "material-ui";

import styles from "./Style";

class LayoutLogin extends Component {
  render() {
    const { classes, children } = this.props;
    return (
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
  }
}
LayoutLogin.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

export default withStyles(styles)(LayoutLogin);
