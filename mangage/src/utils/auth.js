import Cookies from 'js-cookie'


const TOKEN_KEY = 'token'


//存储token
const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token)
}
//获取token
const getTokne = () => {
    return Cookies.get(TOKEN_KEY)
}
//删除token
const removeTokne = () => {
    Cookies.remove(TOKEN_KEY)
}
export default {
    setToken,
    getTokne,
    removeTokne
}