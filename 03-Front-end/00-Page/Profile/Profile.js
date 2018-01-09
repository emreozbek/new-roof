import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  withStyles
} from "material-ui";

import styles from "./Style";

const Profile = ({ classes }) => (
  <Paper className={classes.root}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Surname</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>E-mail</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Emre</TableCell>
          <TableCell>ÖZBEK</TableCell>
          <TableCell>emreozbek</TableCell>
          <TableCell>emre.ozbek@detur.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(Profile));
