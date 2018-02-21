import * as Token from "../Constant/Token";

const SetToken = data => dispatch => {
  sessionStorage.user = JSON.stringify(data);
  return dispatch({
    type: Token.SET_TOKEN,
    data
  });
};

const DestroyToken = () => dispatch => {
  const data = {
    token: ""
  };
  sessionStorage.user = JSON.stringify(data);
  return dispatch({
    type: Token.DESTROY_TOKEN,
    data
  });
};

export { SetToken, DestroyToken };
