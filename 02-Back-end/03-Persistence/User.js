import UserRepository from "../02-Repository/UserRepository";
import Token from "../Core/Token";
import { Language } from "../../04-Config/Index";

class UserPersistence {
  constructor() {
    this.repository = new UserRepository();
  }
  GetAll(req, res) {
    return this.repository.GetAll().then(result => res.json(result));
  }
  Login(req, res, user) {
    this.repository.Login(user).then(data => {
      if (data) {
        const token = new Token().Create({
          id: data.id,
          name: data.name,
          surname: data.surname,
          username: data.username,
          email: data.email,
          authorized: data.authorized
        });
        res.json({
          success: true,
          token
        });
      } else
        res.json({
          success: false,
          explain: Language.messages.error[0]
        });
    });
  }
}

export default UserPersistence;
