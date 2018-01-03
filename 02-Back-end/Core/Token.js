import jwt from "jsonwebtoken";
import { KEY } from "../Config";

class Token {
  whiteList = ["/User/Login"];
  create(data) {
    const token = jwt.sign(data, KEY, { expiresIn: 4000 });
    return token;
  }
  checkWhiteList(url) {
    if (this.whiteList.indexOf(url) === -1) return false;
    return true;
  }
  verify(token) {
    let res = true;
    try {
      jwt.verify(token, KEY);
    } catch (e) {
      res = false;
    }
    return res;
  }
  decode(token) {
    return jwt.decode(token, KEY);
  }
}

export default Token;
