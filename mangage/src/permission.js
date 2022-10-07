import store from './store'
import router from './router'
import tokenKey from './utils/auth'


router.beforeEach(async (to, from, next) => {
    /**
     *  1  判断 是否 存在token
     *      2 存在 token 
     *             3.判断 是否 跳转登录
     *                   如果是 则调回原本页面
     *                   如果不是跳转登录 
                             判断vuex 是否有 菜单列表， 
                             如果有则通行
                             如果没有 重新获取
                             判断是否获取到
                             如果获取到则通行
                             如果没有获取到
                             则删除token 并且跳登录页面 
     * 
     * 
     *      2.没有 token 
     *        判断 判断 是否跳转 白名单 
     *        如果是则通过
     * 如果不是则跳会登录页面
     *        
     *  
     * */
    let token = store.getters.token
    console.log(token);
    let widthList = ['/', '/404']
    //   console.log(token,2);
    if (token) {
        if (to.path == '/') {
            next({ path: from.path })
        } else {
            let menuList = store.getters.menuList
            console.log(menuList, 'menuList');
            if (menuList && menuList.length > 0) {
                next()
            } else {
                let response = await store.dispatch('menu/getMenuList', router)
                console.log(response, 'response');
                // next()
                if (response) {
                    next({path:to.path})
                } else {
                    tokenKey.removeTokne()
                    next('/')
                }
            }
        }
    } else {
        if (widthList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/')
        }
    }
})