import request from "@/utils/request";


const userList = (id, page, size) => {
    return request({
        url: `/user/list/${id}/${page}/${size}`,
        method: "GET"
    })
}
export default {
    userList,
}