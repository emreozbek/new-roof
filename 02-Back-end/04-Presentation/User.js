import UserManager from "../03-Persistence/User";
import Token from "../Core/Token";
const routes = app => {
  const manager = new UserManager();
  app.get("/User/GetAll", (req, res) => {
    manager.GetAll().then(data => {
      res.send(data);
    });
  });
  app.post("/User/Login", (req, res) => {
    manager
      .Login({
        username: req.body.username,
        password: req.body.password,
        state: 1
      })
      .then(data => {
        if (data) {
          const token = new Token().createToken(data.username, data.email);
          res.json({
            success: true,
            user: {
              username: data.username,
              email: data.email,
              name: data.name,
              surname: data.surname
            },
            token
          });
        } else
          res.json({
            success: false,
            explain: "The username or the password are wrong."
          });
      });
  });
};

export default routes;
