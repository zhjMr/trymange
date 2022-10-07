import api from '../../api/menu'
export default {
    namespaced: true,
    state: {
        isCollapse: false,
        menuList: [],
        authList:[],
        routerList:[],
        routerAllList:[]

    },
    mutations: {
        // 判断 侧边栏显示隐藏
        MapCollapse(state) {
            state.isCollapse = !state.isCollapse
        },
        // 菜单数据
        menuList(state, data) {
            state.menuList = data
        },
    //   权限
        setAuthlist(state,authList){
            state.authList=authList
        },
        routerList(state,routerList){
            state.routerList=routerList
        },
        routerAll(state,router){
            state.routerAllList=router
            console.log(router,'router');
            let routerList= state.routerList
            console.log(routerList);
            routerList.forEach(item=>{
                console.log(item,'12344');
                let obj={
                    path:item.path,
                    name:item.path.substr(1),
                    component:resolve=>require([`@/views${item.path}.vue`],resolve),
                    meta:{
                        title:item.label,
                        path:item.path,
                    name:item.path.substr(1),
                    }
                }
console.log(obj);

                router.addRoute('user',obj)
            })
        }
    },
    actions: {
        async getMenuList({ commit },router) {
            let response = await api.Menu()
            let {authList,menuList,routerList}=response.data.data
            commit("setAuthlist",authList)
            commit("menuList",menuList)
            commit("routerList",routerList)
            commit("routerAll",router)
            return response
        }

    },
}