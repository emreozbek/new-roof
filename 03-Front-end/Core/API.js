import axios from "axios";

class API {
  constructor() {
    this.instance = axios.create({
      headers: {
        Authorization: `${JSON.parse(sessionStorage.user).token}`,
        "Content-Type": "application/json"
      }
    });
  }
  get(url, data = null) {
    return this.instance.get(url, data);
  }
  post(url, data = null) {
    return this.instance.post(url, data);
  }
}

export default API;
