import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export class API {
  http = axios;

  constructor(options) {
    this.http = axios.create(options);
    return this;
  }

  get(path, config) {
    return this.http.get(API_BASE_URL + path, config);
  }

  post(path, data, config) {
    return this.http.post(API_BASE_URL + path, data, config);
  }

  put(path, data, config) {
    return this.http.put(API_BASE_URL + path, data, config);
  }

  patch(path, data, config) {
    return this.http.patch(API_BASE_URL + path, data, config);
  }

  delete(path, config) {
    return this.http.delete(API_BASE_URL + path, config);
  }
}
