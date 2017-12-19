import React, { Component } from "react";

class Content extends Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}
export default Content;
