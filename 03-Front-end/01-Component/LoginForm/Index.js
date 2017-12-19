import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import { CardActions, CardContent } from "material-ui/Card";
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  Card
} from "material-ui";
import API from "../../Core/API";
import * as config from "../../../04-Config/Index";
import styles from "./Style";

class Login extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmitForm.bind(this);
    this.state = {
      processing: false,
      usernameError: false,
      passwordError: false
    };
    this.API = new API();
  }
  onSubmitForm() {
    let usernameError = true;
    let passwordError = true;

    if (this.username.value) usernameError = false;
    if (this.password.value) passwordError = false;

    this.setState({ usernameError, passwordError }, () => {
      if (!this.state.usernameError && !this.state.passwordError) {
        this.setState({ processing: true });
        this.API.post(config.routes.user.login, {
          username: this.username.value,
          password: this.password.value
        }).then(result => {
          this.setState({ processing: false });
          const data = result.data;
          if (data.success) {
            this.props.actions.setToken({
              user: data.user,
              token: data.token
            });
          }
        });
      }
    });
  }
  render() {
    const { classes, store } = this.props;
    if (store.token.token) return <Redirect to="/dashboard" />;
    else
      return (
        <Fragment>
          <Typography
            type="headline"
            component="h1"
            align="center"
            gutterBottom
            className={classes.logo}
          >
            {config.app.project.title}
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
                  {config.language.login.title}
                </Typography>
                <TextField
                  label={config.language.login.username}
                  margin="normal"
                  fullWidth
                  inputRef={ref => {
                    this.username = ref;
                  }}
                  error={this.state.usernameError}
                />
                <TextField
                  type="password"
                  label={config.language.login.password}
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
                  label={config.language.login.rememberMe}
                />
              </CardContent>
              <CardActions className={classes.actions}>
                <Button className={classes.button} dense>
                  {config.language.login.forgotPassword}
                </Button>
                <Button
                  raised
                  color="primary"
                  className={classes.button}
                  onClick={this.onSubmit}
                >
                  {config.language.login.login}
                </Button>
              </CardActions>
            </form>
          </Card>
          <Typography
            type="caption"
            align="right"
            className={classes.copyright}
          >
            {config.app.project.copyright}
          </Typography>
        </Fragment>
      );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
