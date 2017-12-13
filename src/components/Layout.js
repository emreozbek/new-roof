import React, { Component, Fragment } from "react";

import AppBar from "./AppBar";
import MainMenu from "./MainMenu";
import Content from "./Content";

const menuWidth = 440;

export default class Layout extends Component {
  state = {
    open: true
  };
  handleMenu = state => {
    this.setState({ open: state });
  };
  render() {
    return (
      <Fragment>
        <AppBar
          title="Dashboard"
          menuState={this.state.open}
          handleMenu={this.handleMenu}
        />
        <MainMenu menuState={this.state.open} width={menuWidth} />
        <Content>{this.props.children}</Content>
      </Fragment>
    );
  }
}
