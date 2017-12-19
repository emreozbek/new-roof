import axios from "axios";

class API {
  constructor() {
    this.defaults = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    };
    this.options = {};
  }
  get(url, data = {}, options = {}) {
    return axios.get(url, data);
  }
  post(url, data = {}, options = {}) {
    return axios.post(url, data);
  }
}
export default API;
