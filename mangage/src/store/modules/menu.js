
export default {
    namespaced: true,
    state: {
        isCollapse: false,
    },
    mutations: {
        MapCollapse(state) {
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {
    },
}