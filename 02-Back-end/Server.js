import express from "express";
import bodyParser from "body-parser";
import Connection from "./Core/Connection";
import Token from "./Core/Token";
import * as Presentations from "./04-Presentation/Index";
import { serverConfig } from "./Config";

const app = express();
Connection();

app.set("trust proxy", 1);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  serverConfig.header.map(item => res.header(item.key, item.value));

  if (req.method !== "OPTIONS") {
    const tokenControl = new Token();
    const token = req.headers.authorization;
    const url = req.originalUrl;
    if (tokenControl.checkWhiteList(url)) next();
    else if (tokenControl.verify(token)) {
      const user = tokenControl.decode(token);
      const role = new Presentations.Role();
      role.CheckAuthority(url, user.authorized).then(result => {
        if (result.length > 0) next();
        else
          res.json({
            success: false,
            explain: "Authorization Error."
          });
      });
    }
  } else next();
});

Presentations.Navigation(app);
Presentations.User(app);

app.listen(serverConfig.port, () => {
  const str = "Example app listening on port ";
  console.log(str + serverConfig.port);
});
