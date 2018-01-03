import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Grid } from "material-ui";

import AppBar from "../AppBar";
import MainMenu from "../MainMenu";
import Content from "../Content";
import styles from "./Style";

class Layout extends Component {
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
    const { actions, children } = this.props;
    const { open } = this.state;
    return (
      <Grid container spacing={0}>
        <AppBar
          title="Dashboard"
          menuState={open}
          HandleMenu={this.HandleMenu.bind(this)}
          Logout={actions.DestroyToken}
        />
        <MainMenu menuState={open} />
        <Content>{children}</Content>
      </Grid>
    );
  }
}
Layout.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.element
};

export default withStyles(styles)(Layout);
