import UserManager from "../03-Persistence/User";

const routes = app => {
  const manager = new UserManager();
  app.post("/User/GetAll", (req, res) => {
    manager.GetAll(req, res);
  });
  app.post("/User/Login", (req, res) => {
    manager.Login(req, res, {
      username: req.body.username,
      password: req.body.password,
      state: 1
    });
  });
};

export default routes;
