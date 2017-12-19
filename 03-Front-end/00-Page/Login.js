import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../04-Action/Index";
import LoginForm from "../01-Component/LoginForm/Index";
import LayoutLogin from "../01-Component/LayoutLogin/Index";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: false
    };
  }
  componentWillReceiveProps(next) {
    console.log(next);
  }
  render() {
    return (
      <LayoutLogin>
        <LoginForm
          actions={this.props.tokenActions}
          store={this.props.tokenStore}
        />
      </LayoutLogin>
    );
  }
}
Login.propTypes = {
  tokenStore: PropTypes.object,
  tokenActions: PropTypes.object
};

const mapStateToProps = tokenStore => {
  return {
    tokenStore
  };
};
const mapDispatchToProps = dispatch => ({
  tokenActions: bindActionCreators(actions.Token, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
