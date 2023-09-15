<template>
  <div>
    <div class="topContent">

      <keep-alive :include="keepArr">
        <!-- 二级路由出口 -->
        <router-view></router-view>
      </keep-alive>

    </div>

    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item to="/shopping/home" icon="star-o">首页</van-tabbar-item>
      <van-tabbar-item to="/shopping/category" icon="apps-o">分类页</van-tabbar-item>
      <van-tabbar-item to="/shopping/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/shopping/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      // 缓存组件名的数组
      keepArr: ['LayoutHomePage']
    }
  },
  // 组件缓存了，就不会执行组件的created，mounted，destroyed等钩子
  // 所以提供了 actived 和 deactived
  created () {
    console.log('created 组件被加载了')
  },
  mounted () {
    console.log('mounted dom渲染完了')
  },
  destroyed () {
    console.log('destroyed 组件被销毁了')
  },
  //
  activated () {
    // alert('你好，欢迎回到首页')
    console.log('activated 组件被激活了，看到页面了')
  },
  deactivated () {
    console.log('deactivated 组件失活，离开页面了')
  }
}
</script>

<style lang="scss" scoped>

.topContent {
  background: transparent;

  margin-bottom: 50px;
}

</style>
