import axios from "axios";
//基准地址 超时时间
const service = axios.create({
  baseURL: "http://119.45.133.128:8089/api",
  timeout: 5000,
});
//请求拦截
service.interceptors.request.use(
  (config) => {
    const token=localStorage.getItem("token")
    if (token) config.headers.authorization = "Bearer" + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//响应拦截
service.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
