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
  }
});
export default styles;
