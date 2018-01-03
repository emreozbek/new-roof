import * as actions from "../03-Constant/Token";
import store from "../06-Store/Token";

const Token = (state = store, action) => {
  switch (action.type) {
    case actions.SET_TOKEN: {
      return {
        token: action.data
      };
    }
    case actions.DESTROY_TOKEN: {
      return { token: "" };
    }
    default:
      return state;
  }
};

export default Token;
