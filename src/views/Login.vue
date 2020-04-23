<template>
  <div id="login">
    <div class="login_header">
      <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <div class="login_content">
      <van-tabs v-model="activeName">
        <van-tab title="手机验证码" name="tel">
          <van-cell-group>
            <van-field
              v-model="phone"
              label="手机号"
              placeholder="请输入手机号"
            />
            <van-field
              v-model="sms"
              center
              clearable
              label="验证码"
              placeholder="请输入短信验证码"
            >
              <van-button slot="button" size="small" type="primary"
                >发送验证码</van-button
              >
            </van-field>
            <van-button type="primary" size="large">登录</van-button>
          </van-cell-group>
          <span class="login_footer" @click="registerByPhone">手机号注册</span>
        </van-tab>
        <van-tab title="账户密码" name="pwd">
          <van-cell-group>
            <van-field
              v-model="username"
              label="账号"
              placeholder="请输入手机号"
            />
            <van-field
              v-model="password"
              label="密码"
              placeholder="请输入密码"
            />
            <van-button type="primary" size="large">登录</van-button>
          </van-cell-group>
          <div class="login_footer_contener">
            <span class="login_footer" @click="registerByPhone"
              >手机号注册</span
            >
            <span class="login_footer" @click="forgetPwd">忘记密码</span>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "tel",
      phone: "",
      sms: "",
      username: "",
      password: ""
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    registerByPhone() {
      this.$router.push("/register");
    },
    forgetPwd() {
      this.$router.push("/findpwd");
    }
  }
};
</script>

<style lang="less">
#login {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .login_header {
    width: 100vw;
    height: 50px;
    .van-nav-bar__left {
      left: 4px;
    }
  }
  .login_content {
    width: 100vw;
  }
}
.login_footer_contener {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login_footer {
  color: #9fa5ac;
  font-size: 14px;
  margin: 10px 5%;
  display: inline-block;
}
.van-nav-bar .van-icon {
  color: #596472 !important;
  font-size: 1.5rem;
}
.van-tabs__line {
  position: absolute;
  width: 50% !important;
  bottom: 15px;
  left: 0;
  z-index: 1;
  height: 3px;
  background-color: #41c13a !important;
  border-radius: 3px;
}
.van-cell-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.van-cell-group .van-button--large {
  width: 90%;
  height: 50px;
  border-radius: 5px;
  line-height: 48px;
  margin-top: 30px;
}
</style>
