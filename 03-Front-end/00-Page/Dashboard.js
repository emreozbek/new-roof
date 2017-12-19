import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../04-Action/Index";
import Layout from "../01-Component/Layout/Index";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      login: false
    };
  }
  render() {
    return <Layout />;
  }
}
Dashboard.propTypes = {};

const mapStateToProps = tokenStore => {
  return {
    tokenStore
  };
};
const mapDispatchToProps = dispatch => ({
  tokenActions: bindActionCreators(actions.Token, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
