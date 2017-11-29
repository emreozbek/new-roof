import * as Config from "../constants/Config";

const setConfig = data => dispatch =>
  dispatch({
    type: Config.SET_CONFIG,
    data
  });

export { setConfig };
