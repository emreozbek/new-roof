import NavigationManager from "../Persistence/Navigation";

const Routes = app => {
  const manager = new NavigationManager();
  app.post("/Navigation/GetAll", (req, res) => {
    manager.GetAll(req, res);
  });
};

export default Routes;
