<template>
  <div class="card-box">
    <el-card class="card">
      <h3>系统登录</h3>
      <el-form ref="form" :model="LoginForm" label-width="40px" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model.trim="LoginForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            show-password
            v-model.trim="LoginForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="flax">
          <el-input
            v-model.trim="LoginForm.code"
            placeholder="请输入验证码"
            class="code"
          ></el-input>
          <img :src="imgCodeUrl" alt="" class="img" @click="codeImg" />
        </el-form-item>
      </el-form>
      <div class="auto">
        <el-button type="primary" class="login" @click="PostLogin"
          >登录</el-button
        >
        <el-button class="clear" @click="clear">重置</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
import LoginApi from "../api/login";
export default {
  data() {
    return {
      imgCodeUrl: "", //图片路径
      LoginForm: {
        //表单数据
        username: "admin",
        password: "1234",
        code: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  created() {
    // this.PostLogin()
    this.LoginImg();
  },
  methods: {
    //登录
    async PostLogin() {
      const { username, password, code } = this.LoginForm;
      if (username == "" || password == "" || code == "") {
        this.$refs["form"].validate((valid) => {
          if (!valid) return;
        });
      } else {
        try {
          const response = await LoginApi.LoginUser(this.LoginForm);
          if (response.data.code == 200) {
            this.$message.success("登录成功");
            localStorage.setItem("token", response.data.token);
          } else if (response.data.code == 500) {
            this.$message.error(response.data.msg);
          }
          console.log(response);
        } catch (e) {
          console.log(e);
        }
      }
    },
    //验证码
    async LoginImg() {
      const response = await LoginApi.LoginImg();
      console.log(response);
      this.imgCodeUrl = window.URL.createObjectURL(response.data);
      console.log(this.imgCodeUrl);
    },
    //验证码切换
    codeImg() {
      this.LoginImg();
    },
    //重置
    clear() {
      this.$refs["form"].resetFields();
    },
  },
};
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
