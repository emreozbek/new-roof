import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, withStyles } from "material-ui";

import Authentication from "../../../Core/Authentication";
import AppBar from "../../AppBar/Index";
import MainMenu from "../../MainMenu/Index";
import Content from "../../Content/Index";
import styles from "./Style";

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  HandleMenu(state) {
    this.setState({ open: state });
  }
  render() {
    const { children, classes } = this.props;
    const { open } = this.state;
    return (
      <Authentication>
        <Grid container spacing={0}>
          <div className={classes.appFrame}>
            <AppBar
              title="Dashboard"
              menuState={open}
              HandleMenu={this.HandleMenu.bind(this)}
            />
            <MainMenu menuState={open} />
            <Content isOpened={open}>{children}</Content>
          </div>
        </Grid>
      </Authentication>
    );
  }
}
Global.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any
};
Global.defaultProps = {
  children: null
};

export default withStyles(styles)(Global);
