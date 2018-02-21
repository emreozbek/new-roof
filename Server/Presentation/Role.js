import RoleManager from "../Persistence/Role";

class Roles {
  constructor() {
    this.manager = new RoleManager();
  }
  CheckAuthority(url, authorized) {
    return this.manager.CheckAuthority(url, authorized);
  }
}

export default Roles;
