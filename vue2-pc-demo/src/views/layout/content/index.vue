<template>
  <div class="content">

  <!-- 顶部导航 -->
  <div class="header">
    <Header></Header>
  </div>

  <!-- 二级路由出口 -->
  <div class="home">
    <router-view></router-view>
  </div>

  </div>
</template>

<script>

import Header from './header/content-header.vue'

export default {
  name: 'layout-content-view',
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>

.content {
  background-color: orange;
}

</style>
