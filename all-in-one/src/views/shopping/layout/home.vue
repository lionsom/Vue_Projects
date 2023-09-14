<template>
    <div>

      <!-- 导航栏 -->
      <van-nav-bar
        title="商城首页"
      />

      <!-- 搜索框 -->
      <van-search
        v-model="searchKey"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />

      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="2000" style="height: 200px;">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" alt="image error"/>
          </van-swipe-item>
      </van-swipe>

      <!-- Grid导航 -->
      <!-- <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid> -->

      <van-grid :column-num="5">
        <van-grid-item v-for="value in 10" :key="value" icon="photo-o" text="文字" />
      </van-grid>

      <!-- 主会场 -->
      <div class="main">
        <img src="@/assets/main.png" alt="">
      </div>

      <!-- 猜你喜欢 -->
      <div class="mainContent">
        <p class="guess-title">—— 猜你喜欢 ——</p>
        <div class="goods-list">
          <goods-item />
        </div>
      </div>

    </div>
  </template>

<script>

// 导入组件
import GoodsItem from '@/components/Shopping/shopping-goods-item'

export default {
  name: 'LayoutHomePage',
  components: {
    GoodsItem
  },
  data () {
    return {
      searchKey: '',
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ],
      bannerList: [], // 轮播
      navList: [], // 导航
      proList: [] // 商品
    }
  },
  created () {
    // 缓存组件，无序每次进来都加载
    console.log('created 请求获取数据')
  },
  methods: {
    // Search
    onSearch (val) {
      this.$toast(val)
      console.log('onSearch。。。。')
    },
    onCancel () {
      console.log('onCancel.....')
    },
    onSwipeChange (index) {
      // this.$toast('当前 Swipe 索引：' + index)
      console.log('当前 Swipe 索引：' + index)
    }
  }
}

</script>

<style scoped lang="scss">

// 轮播
.my-swipe img {
  width: 100%;
  height: 100%;
}

// 主会场
.main img {
  display: block;
  width: 100%;
}

// 猜你喜欢
.guess-title {
  text-align: center;
  font-size: 15px;
  color: gray;

  height: 30px;
  line-height: 30px;

  background-color: aqua;
}

goods-item {
  width: 100%;
  height: 200px;
}

</style>
