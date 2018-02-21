import AppConfig from "./App";

const domain = `${AppConfig.host}:${AppConfig.server.port}`;
const Routes = {
  user: {
    login: `${domain}/User/Login`,
    logout: `${domain}/User/Logout`
  },
  navigation: {
    GetAll: `${domain}/Navigation/GetAll`
  },
  token: {
    verify: `${domain}/Token/Verify`
  }
};

module.exports = Routes;
