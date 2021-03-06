import axios from "axios";

class BaseApi {
  constructor(accessToken, subPath) {
    this.config = {};

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }

    this.apiUrl = process.env.PORTFOLIO_API_URL + subPath;
  }

  update(id, data) {
    return axios.patch(`${this.apiUrl}/${id}`, data, this.config);
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  create(data) {
    return axios.post(this.apiUrl, data, this.config);
  }

  getByUser() {
    return axios.get(`${this.apiUrl}/me`, this.config);
  }

  getAll() {
    return axios.get(this.apiUrl);
  }

  getBySlug(slug) {
    return axios.get(`${this.apiUrl}/slug/${slug}`);
  }
}

export default BaseApi;
