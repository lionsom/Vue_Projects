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
export default {}
</script>

<style scoped lang="scss">

.tabbar {
  display: flex;
  justify-content: space-around;

  position: absolute;
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
