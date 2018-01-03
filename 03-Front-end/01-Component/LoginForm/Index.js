import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  Card,
  withStyles,
  CardActions,
  CardContent
} from "material-ui";

import API from "../../Core/API";
import * as Config from "../../../04-Config/Index";
import styles from "./Style";

class Login extends Component {
  constructor() {
    super();
    this.onSubmit = this.OnSubmitForm.bind(this);
    this.state = {
      processing: false,
      usernameError: false,
      passwordError: false
    };
    this.message = "";
    this.API = new API();
  }
  OnSubmitForm() {
    let usernameError = true;
    let passwordError = true;

    if (this.username.value) usernameError = false;
    if (this.password.value) passwordError = false;

    this.setState({ usernameError, passwordError }, () => {
      if (!this.state.usernameError && !this.state.passwordError) {
        this.setState({ processing: true });
        this.API.post(this.props.url, {
          username: this.username.value,
          password: this.password.value
        }).then(result => {
          this.setState({ processing: false });
          if (result.data.success)
            this.props.actions.SetToken({
              token: result.data.token
            });
          this.message = result.data.explain;
        });
      }
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography
          type="headline"
          component="h1"
          align="center"
          gutterBottom
          className={classes.logo}
        >
          {Config.App.project.title}
        </Typography>
        <LinearProgress
          className={classNames(classes.progress, {
            [classes.processing]: !this.state.processing
          })}
        />
        <Card className={classes.card}>
          <form noValidate autoComplete="off">
            <CardContent>
              <Typography type="title">
                {Config.Language.login.title}
              </Typography>
              <TextField
                label={Config.Language.login.username}
                margin="normal"
                fullWidth
                inputRef={ref => {
                  this.username = ref;
                }}
                error={this.state.usernameError}
              />
              <TextField
                type="password"
                label={Config.Language.login.password}
                margin="normal"
                fullWidth
                inputRef={ref => {
                  this.password = ref;
                }}
                error={this.state.passwordError}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    inputRef={ref => {
                      this.remember = ref;
                    }}
                    value="checked"
                  />
                }
                label={Config.Language.login.rememberMe}
              />
            </CardContent>
            <CardActions className={classes.actions}>
              <Button className={classes.button} dense>
                {Config.Language.login.forgotPassword}
              </Button>
              <Button
                raised
                color="primary"
                className={classes.button}
                onClick={this.onSubmit}
              >
                {Config.Language.login.login}
              </Button>
            </CardActions>
          </form>
        </Card>
        <Typography type="caption" align="right" className={classes.copyright}>
          {Config.App.project.copyright}
        </Typography>
      </Fragment>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(Login);
