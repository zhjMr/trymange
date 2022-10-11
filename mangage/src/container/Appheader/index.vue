<template>
  <div class="box">
    <h3>Vue、Element Ul权限管理系统开发实战</h3>
    <div class="div">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="../../assets/下载.jpg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personal">个人中心</el-dropdown-item>
          <el-dropdown-item command="Restore">还原数据</el-dropdown-item>
          <el-dropdown-item command="quit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div>
        <p>欢迎您，王自大</p>
        <p>{{ date }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import TokenKey from '../../utils/auth'
import Logout from "../../api/login";
import "moment/locale/zh-cn";
export default {
  data() {
    return {
      date: null,
    };
  },
  methods: {
    handleCommand(val) {
      console.log(val, 1);
      if (val == "personal") {
        this.handlePersonal();
      } else if (val == "Restore") {
        this.handleRestore();
      } else {
        this.handleQuit();
      }
    },
    //个人中心
    handlePersonal() {
      console.log("个人中心");
    },
    //还原数据
    handleRestore() {
      console.log("还原数据");
    },
    //退出
    async handleQuit() {
      const response = await Logout.LoginOut();
      console.log(response);
      TokenKey.removeTokne()
      this.$router.go(0)
    },
    timer() {
      this.timer = setInterval(() => {
        this.date = moment().format("YYYY.MM.D  h:mm:ss  dddd");
      });
    },
  },
  computed: {},
  created() {
    this.timer();
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
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
      margin-right: 10px;
    }
  }
}
</style>
