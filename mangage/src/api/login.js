import request from '../utils/request'

const LoginUser = (data) => {
    return request({
        url: "user/login",
        method: "POST",
        data
    })
}
const LoginImg = () => {
    return request({
        url: "/sysUser/image",
        method: "POST",
        responseType: 'blob' 
    })
}
export default {
    LoginUser,
    LoginImg
}