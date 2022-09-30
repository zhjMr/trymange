import request from "../utils/request";
//用户登录
const LoginUser = (data) => {
  return request({
    url: `/user/login?username=${data.username}&password=${data.password}&code=${data.code}`,
    method: "POST",
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
