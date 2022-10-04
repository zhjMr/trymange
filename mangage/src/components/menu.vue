<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#fff" text-color="#666"
            active-text-color="#167bd8" unique-opened router :collapse="isCollapse">
            <AppItem v-for="item in  MenuList" :key="item.id" :item="item"> </AppItem>
        </el-menu>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: "menus",
    components: {

        AppItem: () => import('./Item.vue')
    },
    props: {
        MenuList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters([
            'isCollapse'
        ])
    },
    methods: {

    }
}
</script>
<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
</style>