<template>
    <div>
        <el-dialog :title="title" :visible.sync="visible" :width="width" :before-close="beforeClose">
            <div>
                <slot name="content"></slot>
            </div>
            <span slot="footer">
                <el-button @click="beforeClose">取 消</el-button>
                <el-button type="primary" @click="handleConfirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        };
    },
    created() {

    },
    methods: {
        beforeClose() {
            this.$emit('close')
        },
        handleConfirm() {
            this.$emit('confirm')
        }
    }
}
</script>
<style scoped lang="scss">
.el-dialog__wrapper {
    ::v-deep .el-dialog {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;

        .el-dialog__header {
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            background-color: #1890ff;

            .el-dialog__title {
                color: #fff;
                font-size: 16px;
                font-weight: 600;
            }

            .el-dialog__close {
                color: #fff;
            }
        }

        .el-dialog__body {
            padding: 10px;
        }

        .el-dialog__footer {
            border-top: 1px solid #e8eaec !important;
            padding: 10px;
        }
    }
}
</style>