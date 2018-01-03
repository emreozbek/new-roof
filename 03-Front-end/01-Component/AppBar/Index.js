import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from "material-ui";
import { Menu as MenuIcon, AccountCircle } from "material-ui-icons";

import styles from "./Style";

class AppBarComp extends Component {
  constructor() {
    super();
    this.onClick = this.HandleMenu.bind(this);
    this.state = {
      anchorEl: null,
      open: false
    };
  }
  HandleMenu() {
    this.props.HandleMenu(!this.props.menuState);
  }
  HandleClick = event => {
    this.setState({ anchorEl: event.currentTarget, open: true });
  };
  HandleClose = () => {
    this.setState({ anchorEl: null, open: false });
  };
  render() {
    const { classes, title, menuState, Logout } = this.props;
    const { anchorEl, open } = this.state;
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
          <div>
            <IconButton
              aria-owns={open ? "menu-appbar" : null}
              aria-haspopup="true"
              onClick={this.HandleClick}
              color="contrast"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={this.HandleClose}
            >
              <MenuItem onClick={this.HandleClose}>Profile</MenuItem>
              <MenuItem onClick={Logout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
AppBarComp.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  menuState: PropTypes.bool.isRequired,
  HandleMenu: PropTypes.func.isRequired,
  Logout: PropTypes.func.isRequired
};
export default withStyles(styles)(AppBarComp);
