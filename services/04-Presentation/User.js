import UserManager from "../03-Persistence/User";

const routes = app => {
  const manager = new UserManager();
  app.get("/User/:request", (req, res) => {
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
