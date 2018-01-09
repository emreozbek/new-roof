import jwt from "jsonwebtoken";
import { KEY } from "../Config";

class Token {
  constructor() {
    this.whiteList = ["/User/Login"];
    this.KEY = KEY;
  }

  Create(data) {
    return jwt.sign(data, this.KEY, { expiresIn: 4000 });
  }
  CheckWhiteList(url) {
    if (this.whiteList.indexOf(url) === -1) return false;
    return true;
  }
  Verify(token) {
    let res = true;
    try {
      jwt.verify(token, this.KEY);
    } catch (e) {
      res = false;
    }
    return res;
  }
  Decode(token) {
    return jwt.decode(token, this.KEY);
  }
}

export default Token;
