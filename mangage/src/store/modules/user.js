
import  api from '../../api/login'
import cookie  from '../../utils/auth'

export default{
    namespaced:true,
    state:{
        token:cookie.getTokne()||'',

    },
    mutations:{
        setToken(state,token){
            state.token=token
            cookie.setToken(token)
        }
    },
    actions:{
        // 登录
     async   getLogin({commit},form){
        let response= await api.LoginUser(form)
        console.log(response);
        commit('setToken',response.data.token)
        return response
        },

        


    }


}