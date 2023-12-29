<template>
  <div class='h5-wrap'>
    <div class="content">
      <!-- 二级路由出口 -->
      <router-view></router-view>
    </div>
    <nav class='tabbar'>
    <!-- 导航高亮
      1. 将a标签，替换成router-link (to)
      2. 结合高亮类名实现高亮效果 (router-link-active 模糊匹配)
    -->
    <router-link to="/article">面经</router-link>
    <router-link to="/collect">收藏</router-link>
    <router-link to="/like">喜欢</router-link>
    <router-link to="/user">我的</router-link>
  </nav>
  </div>
</template>

<script>
export default {
  // 组件名(如果没有配置 name，才会找文件名作为组件名)
  name: 'MJ-MainPage',
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

<style scoped lang="scss">

.content {
  margin-bottom: 61px;
}

.tabbar {
  display: flex;
  justify-content: space-around;

  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 60px;

  a {
  flex: 1;
  text-align: center;
  line-height: 60px;

  background: green;
  border: 1px solid rebeccapurple;
  }
  a.router-link-active {
    background: orange;
  }
}

</style>
