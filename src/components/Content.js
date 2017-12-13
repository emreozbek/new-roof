import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}
