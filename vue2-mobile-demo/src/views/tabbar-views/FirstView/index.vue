<template>
  <div>
    <!-- 导航头 -->
    <my-base-nav-bar :title="mytitle" :showLeftArrow="false" :isAutoBack="false" @click-right="onClickRight">
      <!-- slot left -->
      <van-icon slot="my-left" name="search" color="DoderBlue" size="20px" @click="customLeftClick" />
      <!-- slot right -->
      <van-icon slot="my-right" name="scan" color="DoderBlue" size="20px" />
    </my-base-nav-bar>

    <van-grid :column-num="4" square>
      <van-grid-item icon="shop" text="shopping" to="/shopping/home" />
      <van-grid-item icon="fire" text="面经" to="/article" />
      <van-grid-item icon="shield-o" text="HelloWorld" to="/hello_home" />
      <van-grid-item icon="link-o" text="百度" url="https://www.baidu.com" />
    </van-grid>

    <van-divider>分割线</van-divider>

    <!-- 轮播图 -->
    <van-swipe :autoplay="2000" style="height: 200px;" indicator-color="orange">
      <van-swipe-item v-for="(image, index) in images" :key="index" @click="onSwipeItemClick(index)">
        <!-- 图片 -->
        <van-image width="100%" height="100%" fit="cover" lazy-load :src="image" />
      </van-swipe-item>
    </van-swipe>

    <van-divider>分割线</van-divider>

  </div>
</template>

<script>

export default {
  name: 'FirstView',
  created() {

  },
  data() {
    return {
      mytitle: '首页',
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    }
  },
  methods: {
    customLeftClick() {
      console.log('点击搜索');
    },
    onClickRight(param) {
      console.log('点击了扫一扫', param);
    },
    onSwipeItemClick(index) {
      console.log('点击了轮播图', index);
    }
  }
}
</script>

<style lang="scss" scoped></style>