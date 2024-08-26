<template>
  <div>
    <!-- 包裹了keep-alive 一级路由匹配的组件都会被缓存
         LayoutPage组件(被缓存) - 多两个生命周期钩子
          - actived 激活时，组件被看到时触发
          - deactived 失活时，离开页面组件看不见触发
         ArticleDetailPage组件(未被缓存)

         需求：只希望Layout被缓存，include配置
         :include="组件名数组"
    -->
    <div class="main-container">

      <keep-alive :include="keepArr">
        <router-view></router-view>
      </keep-alive>

      <!-- tabbar遮住内容 -->
      <div style="height: 50px;"></div>
    </div>

    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000000" :fixed="true" :placeholder="true">
      <van-tabbar-item icon="home-o" to="/first-view">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/second-view">知识库</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/third-view">其他</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/fourth-view">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'MainView',
  data() {
    return {
      active: 0,
      // 缓存组件名的数组
      keepArr: ['FirstView', 'SecondView', 'ThirdView', 'FourthView']
    }
  },
  created() {
    const a = window.location.hash
    /* 解决进入二级路由返回默认选中首页tab的问题 */
    if (a === '#/first-view') {
      this.active = 0
    } else if (a === '#/second-view') {
      this.active = 1
    } else if (a === '#/third-view') {
      this.active = 2
    } else if (a === '#/fourth-view') {
      this.active = 3
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: calc(100vh - 50px);
  background-color: transparent;
}
</style>
