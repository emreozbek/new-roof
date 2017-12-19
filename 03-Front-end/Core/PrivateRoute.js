import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../04-Action/Index";

const PrivateRoute = ({ component: Component, ...params }) => {
  const token = params.tokenStore.token.token;
  return (
    <Route
      {...params}
      render={props => {
        console.log(props);
        if (token != "") {
          return <Component {...props} />;
        } else
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
      }}
    />
  );
};

const mapStateToProps = tokenStore => {
  return {
    tokenStore
  };
};
const mapDispatchToProps = dispatch => ({
  tokenActions: bindActionCreators(actions.Token, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
