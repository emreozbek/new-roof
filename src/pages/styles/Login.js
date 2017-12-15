const styles = theme => ({
  background: {
    display: "block",
    width: "100%",
    height: "50%",
    background: theme.palette.secondary["700"],
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 0
  },
  grid: {
    zIndex: 10,
    maxWidth: 420
  },
  logo: {
    color: theme.palette.shades.dark.text.primary
  },
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
