import jwt from "jsonwebtoken";

const KEY = "QD9G1NKUH2V4KK";

class Token {
  createToken(username, email) {
    const user = {
      username,
      email
    };
    const token = jwt.sign(user, KEY, { expiresIn: 4000 });
    return token;
  }
  destroyToken() {}
  isToken() {}
}

export default Token;
