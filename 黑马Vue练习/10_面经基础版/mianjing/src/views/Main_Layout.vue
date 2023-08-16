<template>
  <div class='h5-wrap'>
    <div class="content">
      <router-view></router-view>
    </div>
    <nav class='tabbar'>
    <!-- 导航高亮
      1. 将a标签，替换成router-link (to)
      2. 结合高亮类名实现高亮效果 (router-link-active 模糊匹配)
    -->
    <router-link>首页</router-link>
    <router-link>首页</router-link>
    <router-link>首页</router-link>
    <router-link>首页</router-link>
  </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
