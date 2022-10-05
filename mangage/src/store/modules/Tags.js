
export default {
    namespaced: true,
    state: {
        editableTabsValue: 'user',
        editableTabs: [
            {
                title: "首页",
                name: "user",
            }
        ],
    },
    mutations: {
        // 添加
        newTitle(state, data) {
            console.log(data, 'data');
            state.editableTabs.push(data)
        },
        // 设置 editableTabsValue
        setTabsValue(state, val) {
            console.log(val);
            state.editableTabsValue = val
        },
        seteditableTabs(state, data) {
            state.editableTabs = data
        }

    },
    actions: {
    },
}