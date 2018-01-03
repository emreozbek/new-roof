import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...params }) => {
  return (
    <Route
      {...params}
      render={props => {
        if (params.tokenStore.token.token != "")
          return <Component {...props} />;
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
export default connect(mapStateToProps, null)(PrivateRoute);
