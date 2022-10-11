<template>
  <el-container>
    <el-header>
      <APPheader></APPheader>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <Appasside></Appasside>
      </el-aside>
      <el-container>
        <el-main>
          <Appmain></Appmain>
        </el-main>
        <el-footer>
          <Appfooter></Appfooter>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "user",
  components: {
    APPheader: () => import("../container/Appheader"),
    Appasside: () => import("../container/Appaside"),
    Appmain: () => import('../container/Appmin'),
    Appfooter: () => import('../container/Appfooter')
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
  height: 100%;
  cursor: pointer;
  letter-spacing: 0.2em;
  transition: all 1s;
}

.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  border-bottom: 1px solid #ccc;
  // background-color: #fff;
  // background-color: pink;
  color: #333;
  padding: 0;
}
</style>
