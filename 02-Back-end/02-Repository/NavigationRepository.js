import Connection from "../Core/Connection";
import NavigationModel from "../00-Model/Navigation";
import CrudOperations from "../01-PublicRepository/CrudOperations";

class NavigationRepository extends CrudOperations {
  constructor() {
    super();
    Connection();
    this.model = new NavigationModel();
  }
}

export default NavigationRepository;
