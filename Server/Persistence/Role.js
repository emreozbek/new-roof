import mongoose from "mongoose";
import RoleRepository from "../Repository/RoleRepository";

class RolePersistence {
  constructor() {
    this.repository = new RoleRepository();
  }
  CheckAuthority(url, authorized) {
    const tree = url.split("/");
    const selectObject = {
      _id: new mongoose.Types.ObjectId(authorized)
    };
    tree.reduce((previousValue, currentValue) => {
      selectObject[`authorized${previousValue}.url`] = currentValue;
      return `${previousValue}.sub`;
    });
    return this.repository.CheckAuthority(selectObject);
  }
}

export default RolePersistence;
