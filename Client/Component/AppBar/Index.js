import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography, withStyles } from "material-ui";
import { AccountCircle, Menu as MenuIcon } from "material-ui-icons";

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
  HandleClick(event) {
    this.setState({ anchorEl: event.currentTarget, open: true });
  }
  HandleClose() {
    this.setState({ anchorEl: null, open: false });
  }
  render() {
    const { classes, title, menuState } = this.props;
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
              onClick={this.HandleClick.bind(this)}
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
              onClose={this.HandleClose.bind(this)}
            >
              <Link to="/profile">
                <MenuItem>Profile</MenuItem>
              </Link>
              <Link to="/logout">
                <MenuItem>Logout</MenuItem>
              </Link>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
AppBarComp.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
  menuState: PropTypes.bool,
  HandleMenu: PropTypes.func
};
AppBarComp.defaultProps = {
  title: "",
  menuState: false,
  HandleMenu: () => {}
};

export default withStyles(styles)(AppBarComp);
