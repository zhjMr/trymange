import request from "../utils/request";

const LoginUser = (data) => {
  return request({
    url: `/user/login?username=${data.username}&password=${data.password}&code=${data.code}`,
    method: "POST",
  });
};
const LoginImg = () => {
  return request({
    url: "/sysUser/image",
    method: "POST",
    responseType: "blob",
  });
};
export default {
  LoginUser,
  LoginImg,
};
