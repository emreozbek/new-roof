import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import { Grid, TextField } from "material-ui";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

const styles = () => ({
  cover: {
    width: "100%",
    paddingTop: "57%"
  }
});
const Login = props => (
  <Grid
    container
    column="column"
    justify="center"
    alignItems="center"
    spacing={0}
  >
    <Grid item xs={6} sm={3}>
      <Card>
        <CardMedia image="/images/login.png" className={props.classes.cover} />
        <CardContent>
          <Typography type="headline" component="h1">
            Login
          </Typography>
          <form noValidate autoComplete="off">
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
          </form>
        </CardContent>
        <CardActions>
          <Button component={Link} to="/dashboard">
            Login
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);
Login.Login = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Login);
