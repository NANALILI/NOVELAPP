<template>
  <div id="footer">
    <router-view />

    <van-tabbar route active-color="#07c160" inactive-color="#000">
      <van-tabbar-item replace to="/bookshelf" icon="label-o">
        书架
      </van-tabbar-item>
      <van-tabbar-item replace to="/" icon="shop-o">
        书城
      </van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="friends-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped></style>
