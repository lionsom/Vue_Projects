<template>
    <div>

      <!-- 导航栏 -->
      <van-nav-bar>
        <!-- 插槽，自定义标题 -->
        <template #title>
          <!-- 能正常显示title，但会有警告 -->
          <!-- <div> {{ pageInfo.params.title }} </div> -->
          <div>智慧商城</div>
        </template>
      </van-nav-bar>

      <!-- 搜索框 -->
      <van-search
        v-if="isShowSearch"
        v-model="searchKey"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        @click="goSearch"
        @search="onSearch"
        @cancel="onCancel"
      />

      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="2000" style="height: 200px;">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" alt="image error"/>
          </van-swipe-item>
      </van-swipe>

      <van-swipe class="my-swipe" :autoplay="2000" style="height: 200px;" indicator-color="orange">
        <van-swipe-item v-for="item in bannerList" :key="item.imgUrl">
          <img v-lazy="item.imgUrl" alt="image error"/>
          </van-swipe-item>
      </van-swipe>

      <!-- Grid导航 -->
      <van-grid :column-num="5">
        <van-grid-item v-for="(item, index) in navList" :key="item.imgUrl"
        :icon="item.imgUrl"
        :text="item.text"
        @click="gridClick(item, index)"
        />
      </van-grid>

      <!-- 主会场 -->
      <div class="main">
        <img src="@/assets/main.png" alt="">
      </div>

      <!-- 猜你喜欢 -->
      <div class="mainContent">
        <p class="guess-title">—— 猜你喜欢 ——</p>
        <div class="goods-list">
          <goods-item v-for="(item, index) in proList"
          :key="index"
          :goodsIdnex="index"
          :itemData="item"
          @click.native="openProductDetail(item)"
          />
        </div>
      </div>

    </div>
  </template>

<script>
// 请求
import { getHomeData } from '@/api/shopping/home'
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
      pageInfo: {}, // 页面配置
      bannerList: [], // 轮播
      navList: [], // 导航
      proList: [] // 商品
    }
  },
  computed: {
    isShowSearch () {
      return true
    }
  },
  async created () {
    // 缓存组件，无序每次进来都加载
    const { data: { pageData } } = await getHomeData()
    this.pageInfo = pageData.page
    this.bannerList = pageData.items[1].data
    this.navList = pageData.items[3].data
    this.proList = pageData.items[6].data
    console.log(pageData)
  },
  activated () {
    console.log('activated Home组件被激活了，看到页面了')
  },
  deactivated () {
    console.log('deactivated Home组件失活，离开页面了')
  },
  methods: {
    // Search
    goSearch () {
      this.$router.push('/shopping/search')
    },
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
    },
    gridClick (item, index) {
      console.log(item)
      console.log(index)
      // query传参
      this.$router.push('/shopping/category?index=' + item.text)
    },
    openProductDetail (item) {
      console.log(item.goods_id)
      this.$router.push('/shopping/productdetail/' + item.goods_id)
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
