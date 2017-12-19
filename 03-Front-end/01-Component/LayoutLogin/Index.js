import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Grid } from "material-ui";

import styles from "./Style";

class LayoutLogin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
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
          {this.props.children}
        </Grid>
      </Grid>
    );
  }
}
LayoutLogin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LayoutLogin);
