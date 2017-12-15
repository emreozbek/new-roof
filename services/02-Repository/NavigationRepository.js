import Connection from "../Utilities/Connection";
import NavigationModel from "../00-Model/Navigation";
import ICrudOperations from "../01-Public/Crud";

class NavigationRepository extends ICrudOperations {
  constructor() {
    super();
    Connection();
    this.model = new NavigationModel();
  }
}

export default NavigationRepository;
