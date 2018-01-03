import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Routes } from "../../04-Config/Index";
import * as actions from "../04-Action/Index";
import LoginForm from "../01-Component/LoginForm/Index";
import LayoutLogin from "../01-Component/LayoutLogin/Index";

class Login extends Component {
  render() {
    const { tokenStore, tokenActions } = this.props;
    if (tokenStore.token.token)
      return (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      );
    return (
      <LayoutLogin>
        <LoginForm actions={tokenActions} url={Routes.user.login} />
      </LayoutLogin>
    );
  }
}
Login.propTypes = {
  tokenStore: PropTypes.object.isRequired,
  tokenActions: PropTypes.object.isRequired
};

const mapStateToProps = tokenStore => ({
  tokenStore
});
const mapDispatchToProps = dispatch => ({
  tokenActions: bindActionCreators(actions.Token, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
