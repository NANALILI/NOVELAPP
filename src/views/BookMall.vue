<template>
  <div id="bookmall">
    <van-nav-bar fixed title="我的书城" />
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3" :border="false" clickable>
      <van-grid-item icon="apps-o" text="分类" to="/classification" />
      <van-grid-item icon="send-gift-o" text="免费" to="/free" />
      <van-grid-item icon="sign" text="完结" to="/completed" />
    </van-grid>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="我也是有底线的"
        @load="onLoad"
      >
        <li>
          <div class="list-header">
            <span class="header-left">精品汇聚</span>
            <div class="header-right">
              <span>换一换</span>
              <van-icon name="replay" @click="change()" />
            </div>
          </div>
          <div class="bookmall-lists">
            <div class="bookmall-list" @click="bookDetail()">
              <img
                src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
                alt="加载中"
              />
              <span class="booktitle">太古龙尊</span>
              <span class="bookautho">天蚕土豆</span>
            </div>
            <div class="bookmall-list" @click="bookDetail()">
              <img
                src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
                alt="加载中"
              />
              <span class="booktitle">太古龙尊</span>
              <span class="bookautho">天蚕土豆</span>
            </div>
            <div class="bookmall-list" @click="bookDetail()">
              <img
                src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
                alt="加载中"
              />
              <span class="booktitle">太古龙尊</span>
              <span class="bookautho">天蚕土豆</span>
            </div>
            <div class="bookmall-list" @click="bookDetail()">
              <img
                src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
                alt="加载中"
              />
              <span class="booktitle">太古龙尊</span>
              <span class="bookautho">天蚕土豆</span>
            </div>
            <div class="bookmall-list" @click="bookDetail()">
              <img
                src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
                alt="加载中"
              />
              <span class="booktitle">太古龙尊</span>
              <span class="bookautho">天蚕土豆</span>
            </div>
            <div class="bookmall-list" @click="bookDetail()">
              <img
                src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
                alt="加载中"
              />
              <span class="booktitle">太古龙尊</span>
              <span class="bookautho">天蚕土豆</span>
            </div>
            <div class="bookmall-list" @click="bookDetail()">
              <img
                src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
                alt="加载中"
              />
              <span class="booktitle">太古龙尊</span>
              <span class="bookautho">天蚕土豆</span>
            </div>
            <div class="bookmall-list" @click="bookDetail()">
              <img
                src="http://img-tailor.11222.cn/bcv/big/1170156568764.jpg"
                alt="加载中"
              />
              <span class="booktitle">太古龙尊</span>
              <span class="bookautho">天蚕土豆</span>
            </div>
          </div>
        </li>
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      </van-list>
    </van-pull-refresh>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

import Footer from "../components/Footer";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      images: [
        "https://img-tailor.11222.cn/cms/upload/img/1583389997554636-369.jpg",
        "https://img-tailor.11222.cn/cms/upload/img/1583389997554636-369.jpg",
        "https://img-tailor.11222.cn/cms/upload/img/1583389997554636-369.jpg",
      ],
    };
  },
  methods: {
    change() {},
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>

<style lang="less" scoped>
#bookmall {
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
  .van-swipe {
    position: relative;
    overflow: hidden;
    -webkit-user-select: none;
    user-select: none;
    height: 160px;
    width: 92%;
    margin: 0 4%;
    .van-swipe__track img {
      width: 100%;
      height: 160px;
    }
  }
  .van-grid {
    width: 100%;
    height: 90px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .van-pull-refresh {
    width: 100%;
    overflow: hidden;
    -webkit-user-select: none;
    user-select: none;
    padding: 0 10px;
    .list-header {
      // height: 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-left {
        margin-left: 8px;
      }
      .header-left::before {
        content: "";
        width: 0.2rem;
        height: 1.2rem;
        display: inline-block;
        background: #00c98d;
        position: absolute;
        top: 0.09rem;
        left: 0px;
      }
      .header-right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70px;
      }
    }
    .bookmall-lists {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .bookmall-list {
        width: 20%;
        display: flex;
        flex-direction: column;
        padding: 20px 0 0 4%;
        img {
          width: 100%;
          height: 100px;
        }
        .bookautho {
          font-size: 0.8rem;
          color: #000;
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
