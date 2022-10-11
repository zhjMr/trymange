export default {
    isCollapse: state => state.menu.isCollapse,
    menuList: state => state.menu.menuList,
    editableTabsValue: state => state.Tags.editableTabsValue,
    editableTabs: state => state.Tags.editableTabs,
    token: state => state.user.token,
    authList: state => state.menu.authList,
    routerList: state => state.menu.routerList,
}
