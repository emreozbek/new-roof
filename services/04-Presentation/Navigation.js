import NavigationManager from "../03-Persistence/Navigation";

const routes = app => {
  const manager = new NavigationManager();
  app.get("/Navigation/:request", (req, res) => {
    switch (req.params.request) {
      case "GetAll":
        manager.GetAll().then(data => {
          res.send(data);
        });
        break;
      default:
        res.send("404");
        break;
    }
  });
};

export default routes;
