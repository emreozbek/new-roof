import UserRepository from "../02-Repository/UserRepository";

class UserPersistence {
  constructor() {
    this.repository = new UserRepository();
  }
  GetAll() {
    return this.repository.GetAll().then(result => JSON.stringify(result));
  }
}

export default UserPersistence;
