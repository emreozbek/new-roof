import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Drawer,
  Divider,
  IconButton,
  Typography,
  List,
  withStyles,
  ListItem,
  ListItemIcon,
  ListItemText
} from "material-ui";
import { DataUsage, Dashboard } from "material-ui-icons";

import styles from "./Style";
import Routes from "../../../04-Config/Routes";
import API from "../../Core/API";

class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      menuList: []
    };
    this.API = new API();
  }
  componentDidMount() {
    this.API.post(Routes.navigation.GetAll)
      .then(result => result.data)
      .then(data => {
        if (data.success) this.setState({ menuList: data.data });
      });
  }
  GetMenu() {
    return this.state.menuList.map((item, index) => (
      <ListItem button key={index}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItem>
    ));
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
          <List>{this.GetMenu()}</List>
          <Divider />
        </div>
      </Drawer>
    );
  }
}
MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  menuState: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(MainMenu);
