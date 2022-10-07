<template>
    <fragment>
        <el-submenu :index="item.path" v-if="item.children&&item.children.length>0">
            <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.label}}</span>
            </template>
            <AppItem v-for="(ele,index) in item.children" :key="ele.id" :item="ele"></AppItem>
        </el-submenu>
        <el-menu-item :index="item.path" v-if="!item.children||item.children.length==0">
            <i :class="item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
    </fragment>
</template>
<script>
export default {
    name: "AppItem",
    props: {
        item: {
            type: Object,
            default: () => { }
        }
    },
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