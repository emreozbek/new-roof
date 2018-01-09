import React from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Authentication = ({ tokenStore, children }) =>
  tokenStore.token.token ? (
    children
  ) : (
    <Redirect
      to={{
        pathname: "/login"
      }}
    />
  );

Authentication.propTypes = {
  tokenStore: PropTypes.object.isRequired,
  children: PropTypes.any
};
Authentication.defaultProps = {
  children: null
};

const mapStateToProps = tokenStore => ({ tokenStore });
export default withRouter(connect(mapStateToProps, null)(Authentication));
