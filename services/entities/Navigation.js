import Connection from "../utilities/Connection";
import NavigationModel from "../model/Navigation";

const model = new NavigationModel();
export default class Navigation {
  constructor() {
    Connection();
  }
  getAllNavigation() {
    return model.find({});
  }
}
