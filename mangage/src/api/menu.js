import request from "../utils/request";
//菜单权限数据
const Menu = () => {
  return request({
    url: "/sysUser/getPermissionList",
    method: "GET",
  });
};
export default {
  Menu,
};
