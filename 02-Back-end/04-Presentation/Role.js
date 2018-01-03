import RoleManager from "../03-Persistence/Role";

class Roles {
  manager = new RoleManager();
  CheckAuthority(url, authorized) {
    return this.manager.CheckAuthority(url, authorized);
  }
}

export default Roles;
