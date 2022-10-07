import axios from "axios";
import TokenKey from './auth'
//基准地址 超时时间
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
//请求拦截
service.interceptors.request.use(
  (config) => {
    const token = TokenKey.getTokne()
    if (token) config.headers.token = token;
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
//data传参
const request = (options) => {
  options.method = options.method || 'GET'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return service(options)
}
export default request;
