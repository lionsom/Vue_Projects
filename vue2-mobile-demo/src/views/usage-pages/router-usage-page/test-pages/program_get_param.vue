<template>
  <div>
    <my-base-nav-bar title="编程式导航 - 接收参数" :showLeftArrow="true" :isAutoBack="true" />

    <van-divider>获取query参数</van-divider>

    <!-- 固定用法：$route.query.参数名 -->
    路由传递参数query1：{{ $route.query.canshu1 }} <br />
    路由传递参数query2：{{ $route.query.canshu2 }} <br />

    <van-divider>获取params参数</van-divider>

    params参数：{{ $route.params.keyWords }} <br />
  </div>
</template>

<script>
export default {
  name: 'program_get_param',
  created() {
    // this.$route.query.参数名 获取查询参数
    console.log(this.$route.query.canshu1)
    console.log(this.$route.query.canshu2)
    // this.$route.params.参数名 获取动态路由参数
    console.log(this.$route.params.keyWords)
  }
}
</script>

<style></style>
