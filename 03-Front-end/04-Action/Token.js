import * as Token from "../03-Constant/Token";
import API from "../Core/API";
import Routes from "../../04-Config/Routes";

export const SetToken = data => dispatch => {
  sessionStorage.user = JSON.stringify(data);
  return dispatch({
    type: Token.SET_TOKEN,
    data
  });
};

export const DestroyToken = () => dispatch => {
  const data = {
    token: ""
  };
  sessionStorage.user = JSON.stringify(data);
  return dispatch({
    type: Token.DESTROY_TOKEN,
    data
  });
};
