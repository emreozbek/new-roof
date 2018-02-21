const styles = theme => ({
  progress: {
    top: 5
  },
  button: {
    margin: theme.spacing.unit
  },
  card: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4
  },
  actions: {
    display: "flex",
    justifyContent: "space-between"
  },
  processing: {
    opacity: 0
  },
  copyright: {
    margin: theme.spacing.unit
  }
});
export default styles;
