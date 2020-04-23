<template>
  <div id="pwdForgeter">
    <div class="pwdForgeter_header">
      <van-nav-bar
        title="找回密码"
        left-arrow
        @click-left="onClickLeft"
        fixed
      />
    </div>
    <van-cell-group class="pwdForgeter_content">
      <van-field v-model="phone" label="手机号" placeholder="手机号" />
      <van-field
        v-model="sms"
        center
        clearable
        label="验证码"
        placeholder="输入验证码"
      >
        <van-button slot="button" size="small" type="primary"
          >发送验证码</van-button
        >
      </van-field>
      <van-button type="primary" size="large">下一步</van-button>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      sms: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less">
#pwdForgeter {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .pwdForgeter_header {
    width: 100vw;
    height: 50px;
    .van-nav-bar__left {
      left: 4px;
    }
  }
  .pwdForgeter_content {
    width: 100vw;
  }
}
</style>
