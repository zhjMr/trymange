<template>
    <div class="card">
        <div class="lift">
            <el-tree ref="Tree" :data="depData" :props="defaultProps" @node-click="handleNodeClick" default-expand-all
                :expand-on-click-node="false" node-key="id">
                <div slot-scope="{ node,data }">
                    <span v-if="data.children.length === 0">
                        <i class="el-icon-document" style="margin-right: 3px"></i>
                    </span>
                    <span v-else @click="handleOpenBtn(data)">
                        <i v-if="data.open" class="iconfont icon-jia"></i>
                        <i v-else class="iconfont icon-jian"></i>
                    </span>
                    <span>{{ node.label }}</span>
                </div>
            </el-tree>
        </div>
        <div class="right">
            43
        </div>
    </div>
</template>
<script>
import deparList from '../api/depar'
export default {
    data() {
        return {
            depData: [],
            defaultProps: {
                children: 'children',
                label: 'name'
            },
        };
    },
    created() {
        this.deparTerr()
    },
    methods: {
        handleOpenBtn(data) {
            data.open = !data.open
            this.$refs['Tree'].store.nodesMap[data.id].expanded = !data.open
        },
        async deparTerr() {
            try {
                const response = await deparList.deparTerr()
                console.log(response, 'Tree');
                this.depData = response.data.data
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>
<style scoped lang="scss">
.card {
    height: 100%;
    display: flex;
    // background-color: pink;

    .lift {
        width: 20%;
        height: 100%;
        border-right: 1px solid #ccc;
    }

    .right {
        width: 80%;
        height: 100%;
    }
}

::v-deep .el-tree {
    .el-tree-node {
        position: relative;
        padding-left: 10px;

    }

    .el-tree-node__children {
        padding-left: 20px;
        transition: all 0.5s;
    }

    .el-tree-node :last-child:before {
        height: 40px;
    }

    .el-tree>.el-tree-node:before {
        border-left: none;
    }

    .el-tree>.el-tree-node:after {
        border-top: none;
    }

    .el-tree-node:before,
    .el-tree-node:after {
        content: "";
        left: -4px;
        position: absolute;
        right: auto;
        border-width: 1px;
    }

    .tree :first-child .el-tree-node:before {
        border-left: none;
    }

    // 竖线
    .el-tree-node:before {
        border-left: 1px dotted #d9d9d9;
        bottom: 0px;
        height: 100%;
        top: -25px;
        width: 1px;
    }

    //横线
    .el-tree-node:after {
        border-top: 1px dotted #d9d9d9;
        height: 20px;
        top: 14px;
        width: 24px;
    }

    .el-tree-node__expand-icon.is-leaf {
        width: 8px;
    }

    .el-tree-node__content>.el-tree-node__expand-icon {
        display: none;
    }

    //每一行的高度
    .el-tree-node__content {
        line-height: 30px;
        height: 30px;
        padding-left: 10px !important;
    }
}

//去掉最上级的before  after 即是去电最上层的连接线
::v-deep .el-tree>div {
    &::before {
        display: none;
    }

    &::after {
        display: none;
    }
}
</style>