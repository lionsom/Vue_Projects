<template>
  <div>
    编程式导航 - name命名路由跳转 - query传参<br/><br/>

    接受参数的方式依然是：$route.query.参数名 <br/><br/>

    我是参数1：{{ $route.query.canshu1 }} <br/>
    我是参数2：{{ $route.query.canshu2 }} <br/>

  </div>
</template>

<script>
export default {
  name: 'router-test-name-query-param',
  created () {
    // 在created中，获取路由参数
    // this.$route.query.参数名 获取查询参数
    // this.$route.params.参数名 获取动态路由参数
    console.log(this.$route.query.canshu1)
    console.log(this.$route.query.canshu2)
  }
}
</script>

<style>

</style>
