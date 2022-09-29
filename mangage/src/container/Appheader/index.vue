<template>
  <div class="box">
    <h3>Vue、Element Ul权限管理系统开发实战</h3>
    <div class="div">
      <img src="../../assets/下载.jpg" alt="" />
      <div>
        <p>欢迎您，张明</p>
        <p>1231</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: null,
    };
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang="scss">
.box {
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-weight: 400;
  }
  .div {
    align-items: center;
    display: flex;
    img {
      vertical-align: middle;
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
