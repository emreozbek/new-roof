import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import { Token } from "../Action/Index";

class Logout extends Component {
  componentWillMount() {
    const { tokenActions } = this.props;
    tokenActions.DestroyToken();
  }
  render() {
    return (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    );
  }
}
Logout.propTypes = {
  tokenActions: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => ({
  tokenActions: bindActionCreators(Token, dispatch)
});
export default withRouter(connect(null, mapDispatchToProps)(Logout));
