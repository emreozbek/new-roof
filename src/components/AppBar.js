import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import AccountCircle from "material-ui-icons/AccountCircle";
import Typography from "material-ui/Typography";

const drawerWidth = 240;

const styles = theme => ({
  acccountAlign: {
    display: "flex",
    justifyContent: "flex-end"
  },
  flex: {
    flex: 1
  },
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

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
