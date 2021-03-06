import React, { Component } from "react";
import PropTypes from "prop-types";
import { IconButton, Snackbar } from "material-ui";
import { Close as CloseIcon } from "material-ui-icons";

class SnackbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
    this.handleClose = this.HandleClose.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }
  HandleClose() {
    this.setState({ open: false });
  }
  render() {
    const { message, vertical, horizontal, duration } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical,
          horizontal
        }}
        open={this.state.open}
        autoHideDuration={duration}
        onClose={this.handleClose}
        SnackbarContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}
SnackbarComponent.propTypes = {
  message: PropTypes.string,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  duration: PropTypes.number,
  open: PropTypes.bool.isRequired
};
SnackbarComponent.defaultProps = {
  message: "",
  vertical: "top",
  horizontal: "center",
  duration: 6000
};
export default SnackbarComponent;
