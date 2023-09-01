<template>
  <div>我是layout

    <!-- 二级路由出口 -->
    <router-view name="naaa">11</router-view>

    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item to="/shopping/home" icon="star-o">首页</van-tabbar-item>
      <van-tabbar-item to="/shopping/category" icon="apps-o">分类页</van-tabbar-item>
      <van-tabbar-item to="/shopping/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/shopping/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
import RouterView from '@/views/RouterView/RouterView.vue'
export default {
  components: { RouterView },
  name: 'LayoutIndex'
}
</script>

<style>

</style>
