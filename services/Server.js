import express from "express";
import config from "../app-config";
import * as Presentations from "./04-Presentation/Index";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

Presentations.Navigation(app);
Presentations.User(app);
Presentations.ServerRendering(app);

app.listen(config.server.port, () => {
  const str = "Example app listening on port ";
  console.log(str + config.server.port);
});
