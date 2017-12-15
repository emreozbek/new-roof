const styles = theme => ({
  menu: {
    zIndex: 0
  },
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 60,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 4px",
    ...theme.mixins.toolbar
  }
});
export default styles;
