
export default {
    namespaced: true,
    state: {
        editableTabsValue: 'one',
        editableTabs: [
            {
                title: "首页",
                name: "one",
            }
        ],
    },
    mutations: {
        // 添加
        newTitle(state, data) {
            state.editableTabs.push(data)
        },
        // 设置 editableTabsValue
        setTabsValue(state, val) {
            state.editableTabsValue = val
        },
        seteditableTabs(state, data) {
            console.log(data);
            state.editableTabs = data
        }

    },
    actions: {
    },
}