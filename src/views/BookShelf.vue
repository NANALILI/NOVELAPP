<template>
  <div id="bookshelf">
    <van-nav-bar fixed title="我的书架" />
    <div class="bookshelf-list" @click="bookDetail()">
      <img
        src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
        alt="加载中"
      />
      <span class="booktitle">太古龙尊</span>
      <span class="bookstatus">连载 未读</span>
    </div>
    <div class="bookshelf-list">
      <img
        src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
        alt="加载中"
      />
      <span class="booktitle">太古龙尊</span>
      <span class="bookstatus">连载 未读</span>
    </div>
    <div class="bookshelf-list">
      <img
        src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
        alt="加载中"
      />
      <span class="booktitle">太古龙尊</span>
      <span class="bookstatus">连载 未读</span>
    </div>
    <div class="bookshelf-list">
      <img
        src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
        alt="加载中"
      />
      <span class="booktitle">太古龙尊</span>
      <span class="bookstatus">连载 未读</span>
    </div>
    <div class="bookshelf-add" @click="addBook()">
      <van-icon name="plus" size="60px" color="#d3d1d1" />
    </div>
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
    getBooks() {},
    addBook() {},
    bookDetail() {},
  },
};
</script>

<style lang="less" scoped>
#bookshelf {
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
  .bookshelf-add {
    width: 90px;
    height: 120px;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 0 20px;
  }
}
.bookshelf-list {
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 20px;
  img {
    width: 90px;
    height: 120px;
  }
  .bookstatus {
    font-size: 0.8rem;
    color: #000;
    opacity: 0.5;
  }
}
</style>
