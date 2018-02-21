import jwt from "jsonwebtoken";
import { KEY } from "../Config";

class Token {
  constructor() {
    this.KEY = KEY;
  }
  Create(data) {
    return jwt.sign(data, this.KEY, { expiresIn: 4000 });
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
