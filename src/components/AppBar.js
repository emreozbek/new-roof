import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import { AppBar, Toolbar, IconButton, Typography } from "material-ui";
import MenuIcon from "material-ui-icons/Menu";
import AccountCircle from "material-ui-icons/AccountCircle";

import styles from "./styles/AppBar";

class AppBarComponent extends Component {
  constructor() {
    super();
    this.onClick = this.handleMenu.bind(this);
  }
  handleMenu() {
    this.props.handleMenu(!this.props.menuState);
  }
  render() {
    const { classes, title, menuState } = this.props;
    return (
      <AppBar
        className={classNames(classes.appBar, menuState && classes.appBarShift)}
      >
        <Toolbar disableGutters>
          <IconButton
            color="contrast"
            aria-label="open drawer"
            onClick={this.onClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            type="title"
            color="inherit"
            className={classes.flex}
            noWrap
          >
            {title}
          </Typography>
          <IconButton aria-haspopup="true" color="contrast">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}
AppBarComponent.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  menuState: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired
};
export default withStyles(styles)(AppBarComponent);
