import React from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Routes } from "../../04-Config/Index";
import { Token } from "../04-Action/Index";
import LoginForm from "../01-Component/LoginForm/Index";

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
