<template>
  <div>
    编程式导航 - path路径跳转 - query传参 <br/><br/>

    接受参数的方式依然是：$route.query.参数名 <br/><br/>

    我是简易版本参数1：{{ $route.query.canshu1 }} <br/>
    我是简易版本参数2：{{ $route.query.canshu2 }} <br/>

    <br/><br/>

    我是完整版本参数3：{{ $route.query.canshu3 }} <br/>
    我是完整版本参数4：{{ $route.query.canshu4 }} <br/>

  </div>
</template>

<script>
export default {
  name: 'router-test-path-query-param',
  created () {
    // 在created中，获取路由参数
    // this.$route.query.参数名 获取查询参数
    // this.$route.params.参数名 获取动态路由参数
    console.log(this.$route.params.canshu3)
  }
}
</script>

<style>

</style>
