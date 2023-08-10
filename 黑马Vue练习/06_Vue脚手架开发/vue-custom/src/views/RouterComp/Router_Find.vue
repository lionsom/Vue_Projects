<template>
  <div>
    我的发现组件!!!
    查询参数传参：
    <p> {{ $route.query.key }}</p>

  </div>
</template>

<script>
export default {
  created () {
    // 在created中，获取路由参数
    // this.$route.query.参数名 获取
    console.log(this.$route.query.key)
  }
}
</script>

<style>

</style>
