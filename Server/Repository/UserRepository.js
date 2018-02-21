import UserModel from "../Model/User";
import Repository from "../Infrastructure/Repository";

class UserRepository extends Repository {
	constructor() {
		super();
		this.model = new UserModel();
	}
}

export default UserRepository;
