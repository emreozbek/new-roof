const styles = theme => ({
  content: {
    width: "calc(100% - 61px)",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginTop: 56,
    boxSizing: "border-box"
  },
  opened: {
    width: "calc(100% - 241px)"
  }
});

export default styles;
