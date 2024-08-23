<template>
  <div>
    编程式导航 - path路径跳转 - 动态路由传参  <br/><br/>

    接受参数的方式依然是：$route.params.参数名 <br/><br/>

    我是参数：{{ $route.params.keykeyWords }} <br/>

  </div>
</template>

<script>
export default {
  name: 'router-test-path-dynamic-param',
  created () {
    // 在created中，获取路由参数
    // this.$route.query.参数名 获取查询参数
    // this.$route.params.参数名 获取动态路由参数
    console.log(this.$route.params.keykeyWords)
  }
}
</script>

<style>

</style>
