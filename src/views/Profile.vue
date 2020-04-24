<template>
  <div id="profile">
    <van-nav-bar fixed title="个人中心" />
    <div class="profile-header">
      <van-image
        round
        width="4rem"
        height="4rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <span class="profile-login" @click="login()">登录/注册</span>
    </div>
    <van-divider />
    <van-cell title="消息" is-link icon="chat-o" to="/message" />
    <van-cell title="收藏" is-link icon="star-o" to="/collection" />
    <van-cell title="书评" is-link icon="comment-o" to="/bookcomments" />
    <van-cell title="意见反馈" is-link icon="comment-o" to="/bookcomments" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
#profile {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 30px;
  margin-bottom: 50px;
  .van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #323233;
    font-weight: 600;
    font-size: 16px;
  }
  .profile-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 20px 0 20px 10px;
  }
  .van-image {
    margin-right: 10px;
  }
  .van-cell__left-icon {
    margin-right: 5px;
    font-size: 25px;
  }
}
</style>
