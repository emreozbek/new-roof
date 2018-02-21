import UserRepository from "../Repository/UserRepository";

class UserPersistence {
	constructor() {
		this.repository = new UserRepository();
	}
}

export default UserPersistence;
