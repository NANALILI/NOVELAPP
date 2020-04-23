<template>
  <div id="profile">
    <van-nav-bar fixed title="个人中心" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
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
}
</style>
