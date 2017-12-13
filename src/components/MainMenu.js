import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import { Drawer, Divider, IconButton, Typography } from "material-ui";
import { DataUsage, Dashboard, Navigation } from "material-ui-icons";

const menuWidth = 240;
const styles = theme => ({
  menu: {
    zIndex: 0
  },
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: menuWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 60,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 4px",
    ...theme.mixins.toolbar
  }
});
class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      menuList: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ menuList: data });
      });
  }
  getMenu() {
    return this.state.menuList.map((item, index) => {
      return (
        <ListItem button key={index}>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      );
    });
  }
  render() {
    const { classes, menuState } = this.props;
    return (
      <Drawer
        type="permanent"
        classes={{
          paper: classNames(
            classes.menu,
            classes.drawerPaper,
            !menuState && classes.drawerPaperClose
          )
        }}
        open={menuState}
      >
        <div>
          <div className={classes.menuHeader}>
            <IconButton>
              <DataUsage />
            </IconButton>
            <Typography type="button" color="inherit" noWrap>
              Material UI CMS
            </Typography>
          </div>
          <Divider />
          <List>{this.getMenu()}</List>
          <Divider />
        </div>
      </Drawer>
    );
  }
}
MainMenu.propTypes = {
  width: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  menuState: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(MainMenu);
