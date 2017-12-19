import NavigationRepository from "../02-Repository/NavigationRepository";

class NavigationPersistence {
  constructor() {
    this.repository = new NavigationRepository();
  }
  GetAll() {
    return this.repository.GetAll().then(result => JSON.stringify(result));
  }
}

export default NavigationPersistence;
