import Connection from "../Utilities/Connection";
import UserModel from "../00-Model/User";
import ICrudOperations from "../01-Public/Crud";

class UserRepository extends ICrudOperations {
  constructor() {
    super();
    Connection();
    this.model = new UserModel();
  }
}

export default UserRepository;
