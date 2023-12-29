<template>
  <div id="app">
    <!-- 包裹了keep-alive 一级路由匹配的组件都会被缓存
         LayoutPage组件(被缓存) - 多两个生命周期钩子
          - actived 激活时，组件被看到时触发
          - deactived 失活时，离开页面组件看不见触发
         ArticleDetailPage组件(未被缓存)

         需求：只希望Layout被缓存，include配置
         :include="组件名数组"
    -->
    <keep-alive :include="keepArr">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// 导出的是当前组件的配置项
// 里面可以提供 data(特殊) methods computed watch 生命周期八大钩子
export default {
  data () {
    return {
      // 缓存组件名的数组
      keepArr: ['MJ-MainPage', 'LayoutIndex']
    }
  }
}

</script>

<style scoped>

* {
  margin: 0px;
  padding: 0px;
}

/* #app {
  margin: 0 auto;

  width: 100%;
  background: rgb(240, 219, 178);
} */

</style>
