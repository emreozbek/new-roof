import React from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Routes } from "../../Config/Index";
import { Token } from "../Action/Index";
import LoginForm from "../Component/LoginForm/Index";

const Login = ({ tokenStore, tokenActions }) => {
  if (tokenStore.token.token)
    return (
      <Redirect
        to={{
          pathname: "/dashboard"
        }}
      />
    );
  return <LoginForm actions={tokenActions} url={Routes.user.login} />;
};
Login.propTypes = {
  tokenStore: PropTypes.object.isRequired,
  tokenActions: PropTypes.object.isRequired
};

const mapStateToProps = tokenStore => ({
  tokenStore
});
const mapDispatchToProps = dispatch => ({
  tokenActions: bindActionCreators(Token, dispatch)
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
