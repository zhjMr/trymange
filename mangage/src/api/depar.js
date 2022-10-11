import request from "@/utils/request";

const deparList = () => {
    return request({
        url: "/department/list",
        method: "GET"
    })
}
//terr 选择上级机构
const deparTerr = () => {
    return request({
        url: "/department/parent",
        method: "GET"
    })
}
//添加
const deparAdd = (data) => {
    return request({
        url: "/department",
        method: "POST",
        data
    })
}
//编辑
const deparEdit = (data) => {
    return request({
        url: "/department",
        method: "PUT",
        data
    })
}
//删除
const deparDel = (id) => {
    return request({
        url: `/department/${id}`,
        method: "DELETE",
    })
}
export default {
    deparList,
    deparTerr,
    deparAdd,
    deparEdit,
    deparDel,
}