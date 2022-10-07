<template>
    <div>
        权限管理
        <el-button v-button="'sys:user:add'">添加</el-button>
        <el-button v-button="'sys:user:edit'">编辑</el-button>
        <el-button v-button="'sys:user:delete'">删除</el-button>
        <el-button v-button="'sys:user:assign'">分配角色</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>
<style scoped lang="scss">

</style>