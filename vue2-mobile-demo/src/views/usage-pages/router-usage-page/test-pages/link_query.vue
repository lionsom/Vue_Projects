<template>
  <div>
    <my-base-nav-bar title="声明式导航 - 查询参数传参" :showLeftArrow="true" :isAutoBack="true" />

    声明式导航 - 查询参数传参 <br />

    <!-- 固定用法：$route.query.参数名 -->
    路由传递参数1：{{ $route.query.canshu1 }} <br />
    路由传递参数2：{{ $route.query.canshu2 }}
  </div>
</template>

<script>
export default {
  name: 'router-test-link-query-param',
  created() {
    // 在created中，获取路由参数
    // this.$route.query.参数名 获取
    console.log(this.$route.query.canshu1)
    console.log(this.$route.query.canshu2)
  }
}
</script>

<style></style>
