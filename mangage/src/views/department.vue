<template>
    <!-- 查询 -->
    <div class="bix-TF">
        <div class="queryFrom">
            <el-form ref="queryFrom" :inline="true" :model="queryFrom" class="demo-form-inline" size="mini">
                <el-form-item prop="user">
                    <el-input v-model="queryFrom.user" placeholder="请输入部门名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button icon="el-icon-search">查询</el-button>
                    <el-button icon="el-icon-close" style="color: red;" @click="restest">重置</el-button>
                    <el-button type="primary" icon="el-icon-plus" @click="handleOpenDialog">新增</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 表格数据 -->
        <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all
            height="630px" stripe :tree-props="{children: 'children', hasChildren: 'hasChildren'}" class="table">
            <el-table-column prop="name" label="部门名称">
            </el-table-column>
            <el-table-column prop="deptCode" label="部门编码">
            </el-table-column>
            <el-table-column prop="deptPhone" label="部门电话">
            </el-table-column>
            <el-table-column prop="deptAddress" label="部门地址">
            </el-table-column>
            <el-table-column prop="orderNum" label="序号">
            </el-table-column>
            <el-table-column label="操作" width="200px">
                <template slot-scope="scope">
                    <el-button size="mini" icon="el-icon-edit-outline" type="primary" @click="DeparEdit(scope.row)">编辑
                    </el-button>
                    <el-button size="mini" icon="el-icon-close" type="danger" @click="DeparDel(scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 对话框 新增 编辑 -->
        <DiaLog :visible="addDiaLogFrom.visible" @close="cancel" @confirm="handelSubmit" :title="addDiaLogFrom.title"
            :width="addDiaLogFrom.width">
            <div slot="content">
                <el-form ref="DialogForm" :rules="rulesFrom" :inline="true" :model="departmentDialogForm"
                    label-width="80px" size="small">
                    <el-form-item label="上级部门" prop="parentName">
                        <el-input v-model="departmentDialogForm.parentName" @click.native="AddFrom">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="部门名称" prop="name">
                        <el-input v-model="departmentDialogForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="部门编码" prop="deptCode">
                        <el-input v-model="departmentDialogForm.deptCode"></el-input>
                    </el-form-item>
                    <el-form-item label="部门电话" prop="deptPhone">
                        <el-input v-model="departmentDialogForm.deptPhone"></el-input>
                    </el-form-item>
                    <el-form-item label="部门经理" prop="manager">
                        <el-input v-model="departmentDialogForm.manager"></el-input>
                    </el-form-item>
                    <el-form-item label="部门地址" prop="deptAddress">
                        <el-input v-model="departmentDialogForm.deptAddress"></el-input>
                    </el-form-item>
                    <el-form-item label="部门序号" prop="orderNum">
                        <el-input v-model="departmentDialogForm.orderNum"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </DiaLog>
        <!-- 对话框 机构-->
        <DiaLog :visible="InstDiaLogFrom.visible" @close="handelCancel" @confirm="handelOk"
            :title="InstDiaLogFrom.title" :width="InstDiaLogFrom.width">
            <div slot="content">
                <el-tree ref="Tree" :data="depData" :props="defaultProps" @node-click="handleNodeClick"
                    default-expand-all :expand-on-click-node="false" node-key="id">
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

        </DiaLog>
    </div>
</template>
<script>
import deparList from '../api/depar'
import _ from 'lodash'
import DiaLog from '../components/DiaLog.vue'
export default {
    components: {
        DiaLog,
    },
    data() {
        return {
            rulesFrom: {
                parentName: [
                    { required: true, message: '请输入上级部门', trigger: 'brue' },
                ],
                name: [
                    { required: true, message: '请选择部门名称', trigger: 'brue' }
                ],
            },
            defaultProps: {
                children: 'children',
                label: 'name'
            },
            depData: [],
            tableData: [],
            departmentDialogForm: {
                parentName: '',
                name: '',
                deptCode: '',
                deptPhone: '',
                manager: '',
                deptAddress: '',
                orderNum: '',
                id: '',
                pid: '',
                editType: "0",
            },
            InstDiaLogFrom: {
                visible: false,
                title: "选择上级机构",
                width: "300px"
            },
            addDiaLogFrom: {
                visible: false,
                title: "新增部门",
                width: "600px"
            },
            queryFrom: {}
        };
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
            this.departmentDialogForm.parentName = data.name
            this.departmentDialogForm.pid = data.id
        },
        handleOpenBtn(data) {
            data.open = !data.open
            this.$refs['Tree'].store.nodesMap[data.id].expanded = !data.open
        },
        //删除
        DeparDel(row) {
            try {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async () => {
                    const response = await deparList.deparDel(row.id)
                    console.log(response);
                    if (response.data.code == 200) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.deparList()
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            } catch (e) {
                console.log(e);
            }
        },
        //树形穿透
        AddFrom() {
            this.InstDiaLogFrom.visible = true
        },
        //新增
        handleOpenDialog() {
            this.departmentDialogForm = {
                parentName: '',
                name: '',
                deptCode: '',
                deptPhone: '',
                manager: '',
                deptAddress: '',
                orderNum: '',
                id: '',
                pid: '',
                editType: "0",
            },
                this.addDiaLogFrom.visible = true
            this.addDiaLogFrom.title = '新增部门'
        },
        //取消
        cancel() {
            this.addDiaLogFrom.visible = false
        },
        //确定
        async handelSubmit() {
            this.$refs['DialogForm'].validate(valid => {
                if (!valid) return
            })
            //新增确定
            if (this.departmentDialogForm.editType == '0') {
                try {
                    const response = await deparList.deparAdd(this.departmentDialogForm)
                    console.log(response);
                    if (response.data.code == 200) {
                        this.$message.success('新增成功')
                        this.deparList()
                    }
                    this.addDiaLogFrom.visible = false
                } catch (e) {
                    console.log(e);
                }
                //编辑确定
            } else {
                try {
                    const response = await deparList.deparEdit(this.departmentDialogForm)
                    console.log(response);
                    if (response.data.code == 200) {
                        this.$message.success('更新成功')
                        this.deparList()
                    }
                    this.addDiaLogFrom.visible = false
                } catch (e) {
                    console.log(e);
                }
            }

        },
        //编辑
        DeparEdit(row) {
            const data = _.cloneDeep(row)
            this.addDiaLogFrom.title = '编辑部门'
            this.addDiaLogFrom.visible = true
            this.departmentDialogForm.editType = '1'
            this.departmentDialogForm = data
        },
        //机构取消
        handelCancel() {
            this.InstDiaLogFrom.visible = false
        },
        //机构确定
        handelOk() {
            this.InstDiaLogFrom.visible = false
        },
        //重置
        restest() {
            this.$refs['queryFrom'].resetFields()
        },
        //获取机构列表数据
        async deparList() {
            try {
                const response = await deparList.deparList()
                console.log(response);
                if (response.data.code == 200) {
                    this.tableData = response.data.data
                }
            } catch (e) {
                console.log(e);
            }
        },
        //获取Tree数据
        async deparTerr() {
            try {
                const response = await deparList.deparTerr()
                console.log(response, 'Tree');
                this.depData = response.data.data
            } catch (e) {
                console.log(e);
            }
        }
    },
    created() {
        this.deparList()
        this.deparTerr()
    },
}
</script>
<style scoped lang="scss">
.bix-TF {
    padding: 0 20px;
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