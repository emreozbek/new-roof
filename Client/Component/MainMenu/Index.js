import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	withStyles
} from "material-ui";
import * as Icons from "material-ui-icons";

import styles from "./Style";
import Routes from "../../../Config/Routes";
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
    return this.state.menuList.map(item => {
      const Icon = Icons[item.icon];
      return (
        <Link to={item.url} key={item.id}>
          <ListItem button>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        </Link>
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
        <div className={classes.drawerInner}>
          <div className={classes.menuHeader}>
            <IconButton>
              <Icons.DataUsage />
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
