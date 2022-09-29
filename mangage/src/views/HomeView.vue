<template>
  <div class="card-box">
    <el-card class="card">
      <h3>系统登录</h3>
      <el-form ref="form" :model="LoginForm" label-width="40px">
        <el-form-item prop="username">
          <el-input v-model="LoginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="LoginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="flax">
          <el-input v-model="LoginForm.code" placeholder="请输入验证码" class="code"></el-input>
          <img :src="imgCodeUrl" alt="" class="img">
        </el-form-item>
      </el-form>
      <div class="auto">
        <el-button type="primary" class="login" @click="PostLogin">登录</el-button>
        <el-button class="clear" @click="clear">重置</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
import LoginApi from '../api/login'
export default {
  data() {
    return {
      imgCodeUrl: "",
      LoginForm: {
        username: "",
        password: "",
        code: ""
      }
    };
  },
  created() {
    // this.PostLogin()
    this.LoginImg()
  },
  methods: {
    async PostLogin() {
      try {
        const response = await LoginApi.LoginUser(this.LoginForm)
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },

    async LoginImg() {

      const response = await LoginApi.LoginImg()
      console.log(response);
      this.imgCodeUrl = window.URL.createObjectURL(response.data)
      console.log(this.imgCodeUrl);

    },

    clear() {
      this.$refs['form'].resetFields()
    },
  },

}
</script>
<style scoped lang="scss">
.card-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .flax {
    display: flex;

    .code {
      width: 200px;
    }

    .img {
      vertical-align: middle;
      width: 100px;
      height: 30px;
      margin-left: 5px;
    }
  }

  .card {
    width: 35%;

    h3 {
      font-size: 24px;
      padding-bottom: 20px;
      text-align: center;
    }

    .auto {
      .login {
        width: 150px;
        margin-left: 50px;
      }

      .clear {
        width: 150px;
      }
    }

  }
}
</style>