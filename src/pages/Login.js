import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import { CardActions, CardContent } from "material-ui/Card";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  Card
} from "material-ui";
import styles from "./styles/Login";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      processing: false
    };
    this.onSubmit = this._onSubmit.bind(this);
  }
  _onSubmit() {
    this.setState({ processing: !this.state.processing });
    return false;
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        column="column"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <div className={classes.background} />
        <Grid item xs={6} sm={3} className={classes.grid}>
          <Typography
            type="headline"
            component="h1"
            align="center"
            gutterBottom
            className={classes.logo}
          >
            Material CMS
          </Typography>
          <LinearProgress
            className={classNames(classes.progress, {
              [classes.processing]: !this.state.processing
            })}
          />
          <Card className={classes.card}>
            <form noValidate autoComplete="off">
              <CardContent>
                <Typography type="title" gutterBottom>
                  Welcome to Material CMS
                </Typography>
                <TextField
                  id="username"
                  label="User Name"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  margin="normal"
                  fullWidth
                />
                <FormControlLabel
                  control={<Checkbox value="checkedD" />}
                  label="Remember Me"
                />
              </CardContent>
              <CardActions className={classes.actions}>
                <Button className={classes.button} dense>
                  Forgot Password
                </Button>
                <Button
                  raised
                  color="primary"
                  onClick={this.onSubmit}
                  className={classes.button}
                >
                  Login
                </Button>
              </CardActions>
            </form>
          </Card>
          <Typography
            type="caption"
            align="right"
            className={classes.copyright}
          >
            Material CMS V.1 &copy; Copyright
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
