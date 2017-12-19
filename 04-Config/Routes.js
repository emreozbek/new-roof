import AppConfig from "./App";

const domain = `${AppConfig.host}:${AppConfig.server.port}`;
const Routes = {
  user: {
    login: `${domain}/User/Login`
  }
};

module.exports = Routes;
