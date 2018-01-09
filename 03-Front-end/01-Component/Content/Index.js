import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";

import styles from "./Style";

const Content = ({ classes, children, isOpened }) => (
  <main className={classNames(classes.content, { [classes.opened]: isOpened })}>
    {children}
  </main>
);

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpened: PropTypes.bool.isRequired,
  children: PropTypes.any
};
Content.defaultProps = {
  children: null
};
export default withStyles(styles)(Content);
