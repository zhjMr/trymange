<template>
  <el-container>
    <el-header> <APPheader></APPheader> </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  components: {
    APPheader: () => import("../container/Appheader"),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.el-container {
  height: 100%;
  padding: 0;
}
.el-header {
  background-color: #167bd8;
  color: #333;
}

.el-aside {
  background-color: #fff;
  color: #333;
  border-right: 1px solid #ccc;
}

.el-main {
  height: 50px;
  background-color: #fff;
  color: #333;
}
</style>
