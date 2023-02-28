import axios from "axios";
import { redirect } from "react-router-dom";
import config from "./config";

axios.defaults.baseURL = config.api.baseUrl;
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      const jsonToken = JSON.parse(token);
      config.headers.Authorization = jsonToken.value;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axios;
