import axios from "axios";

const service = axios.create({
  baseURL: "https://api.github.com"
});

service.interceptors.response.use(res => res.data);

export default service;
