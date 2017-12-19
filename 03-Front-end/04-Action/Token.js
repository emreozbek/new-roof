import * as Token from "../03-Constant/Token";

const setToken = data => dispatch =>
  dispatch({
    type: Token.SET_TOKEN,
    data
  });

export { setToken };
