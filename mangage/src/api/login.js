import request from "../utils/request";
import qs from 'qs'
//用户登录
const LoginUser = (data) => {
  return request({
    url: `/user/login`,
    method: "POST",
    data: qs.stringify(data)
  });
};
//验证码
const LoginImg = () => {
  return request({
    url: "/sysUser/image",
    method: "POST",
    responseType: "blob",
  });
};
//退出登录
const LoginOut = () => {
  return request({
    url: "/sysUser/loginOut",
    method: "POST",
  });
};

export default {
  LoginUser,
  LoginImg,
  LoginOut,
};
