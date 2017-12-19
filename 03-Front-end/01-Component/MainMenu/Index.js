import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Drawer, Divider, IconButton, Typography, List } from "material-ui";
import { withStyles } from "material-ui/styles";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import { DataUsage, Dashboard } from "material-ui-icons";

import styles from "./Style";

class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      menuList: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/Navigation/GetAll")
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
