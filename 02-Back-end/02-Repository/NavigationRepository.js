import NavigationModel from "../00-Model/Navigation";
import CrudOperations from "../01-PublicRepository/CrudOperations";

class NavigationRepository extends CrudOperations {
  constructor() {
    super();
    this.model = new NavigationModel();
  }
}

export default NavigationRepository;
