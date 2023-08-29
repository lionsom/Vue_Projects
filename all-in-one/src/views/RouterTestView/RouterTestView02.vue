<template>
  <div>
    声明式导航 - 动态路由传参 <br/>

    <!-- 固定用法：$route.query.参数名 -->
    <p>搜索关键字: {{ $route.params.keyWords }} </p>
  </div>
</template>

<script>
export default {
  name: 'router-test-link-dynamic-param',
  created () {
    // 在created中，获取路由参数
    // this.$route.query.参数名 获取查询参数
    // this.$route.params.参数名 获取动态路由参数
    console.log(this.$route.params.words)
  }
}
</script>

<style>

</style>
