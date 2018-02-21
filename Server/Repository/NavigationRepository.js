import NavigationModel from "../Model/Navigation";
import Repository from "../Infrastructure/Repository";

class NavigationRepository extends Repository {
  constructor() {
    super();
    this.model = new NavigationModel();
  }
}

export default NavigationRepository;
