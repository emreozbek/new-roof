import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Grid } from "material-ui";

import AppBar from "../AppBar";
import MainMenu from "../MainMenu";
import Content from "../Content";
import styles from "./Style";

const menuWidth = 440;

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: false
  };
  handleMenu(state) {
    this.setState({ open: state });
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={0}>
        <AppBar
          title="Dashboard"
          menuState={this.state.open}
          handleMenu={this.handleMenu.bind(this)}
        />
        <MainMenu menuState={this.state.open} width={menuWidth} />
        <Content>{this.props.children}</Content>
      </Grid>
    );
  }
}
Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
