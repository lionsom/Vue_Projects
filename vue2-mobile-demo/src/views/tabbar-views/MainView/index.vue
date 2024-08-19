<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000000">
      <van-tabbar-item icon="home-o" to="/shopping/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/shopping/search">搜索</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/shopping/cart">购物车</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MainView',
  created() {

  },
  data() {
    return {

    }
  },
  methods: {

  }


}
</script>

<style lang="scss" scoped></style>