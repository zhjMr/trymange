<template>
    <div class="box-icon">
        <i :class="[isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']" class="arrow-icon" @click="handelMap"></i>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: "menuicon",
    data() {
        return {

        };
    },
    created() {
        console.log(this.isCollapse);
    },
    computed: {
        ...mapGetters(['isCollapse'])
    },
    methods: {
        ...mapMutations({ MapCollapse: 'menu/MapCollapse' }),

        handelMap() {
            this.MapCollapse()
        }
    }
}
</script>
<style scoped lang="scss">
.box-icon {
    background: #eaedf1;
    border: 1px solid transparent;
    font-size: 23px;
    height: 39px;
    line-height: 39px !important;
    width: 40px;
    text-align: center;
}

</style>