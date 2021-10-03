import axios from "axios";
import { API_BASE_URL } from "../config";

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  },
});

axiosClient.interceptors.request.use(function (config) {
  config.headers.Authorization =
    "Bearer " + localStorage.getItem("access_token");
  return config;
});

export default axiosClient;
