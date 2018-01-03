import RoleModel from "../00-Model/Role";
import CrudOperations from "../01-PublicRepository/CrudOperations";

class RoleRepository extends CrudOperations {
  constructor() {
    super();
    this.model = new RoleModel();
  }
  CheckAuthority(select) {
    return this.model.find(select);
  }
}

export default RoleRepository;
