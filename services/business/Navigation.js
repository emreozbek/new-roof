import NavigationEntities from "../entities/Navigation";

export default class NavigationManager {
  constructor() {
    this.navigation = new NavigationEntities();
  }
  getAllNavigation() {
    return this.navigation.getAllNavigation().then(result => {
      return JSON.stringify(result);
    });
  }
}
