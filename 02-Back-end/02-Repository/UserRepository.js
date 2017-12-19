import Connection from "../Core/Connection";
import UserModel from "../00-Model/User";
import CrudOperations from "../01-PublicRepository/CrudOperations";

class UserRepository extends CrudOperations {
  constructor() {
    super();
    Connection();
    this.model = new UserModel();
  }
  Login(user) {
    return this.model.findOne(user);
  }
}

export default UserRepository;
