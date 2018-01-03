import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../04-Action/Index";
import Layout from "../01-Component/Layout/Index";

class Dashboard extends Component {
  render() {
    const { tokenActions, tokenStore } = this.props;
    return <Layout actions={tokenActions} store={tokenStore} />;
  }
}
Dashboard.propTypes = {
  tokenStore: PropTypes.object.isRequired,
  tokenActions: PropTypes.object.isRequired
};

const mapStateToProps = tokenStore => ({
  tokenStore
});
const mapDispatchToProps = dispatch => ({
  tokenActions: bindActionCreators(actions.Token, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
