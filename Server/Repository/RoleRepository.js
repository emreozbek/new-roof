import RoleModel from "../Model/Role";
import Repository from "../Infrastructure/Repository";

class RoleRepository extends Repository {
  constructor() {
    super();
    this.model = new RoleModel();
  }
  CheckAuthority(select) {
    return this.model.find(select);
  }
}

export default RoleRepository;
