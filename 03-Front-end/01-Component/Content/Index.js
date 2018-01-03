import React, { Component } from "react";
import PropTypes from "prop-types";

class Content extends Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}
Content.propTypes = {
  children: PropTypes.element
};
export default Content;
