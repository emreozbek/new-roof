import express from "express";
import config from "../app-config";
import NavigationManager from "./business/Navigation";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  const navigation = new NavigationManager();
  navigation.getAllNavigation().then(data => {
    res.send(data);
  });
});

app.listen(config.server.port, () => {
  const str = "Example app listening on port ";
  console.log(str + config.server.port);
});
