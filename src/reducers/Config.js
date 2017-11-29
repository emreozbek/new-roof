import * as actions from "../constants/Config";
import ConfigStore from "../stores/Config";

export default function Config(state = ConfigStore, action) {
  switch (action.type) {
    case actions.SET_CONFIG: {
      return {
        ...state,
        element: action.data
      };
    }
    default:
      return state;
  }
}
