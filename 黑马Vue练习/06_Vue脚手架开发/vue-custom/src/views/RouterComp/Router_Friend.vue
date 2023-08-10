<template>
  <div>
    我的朋友组件!!!
    动态路由传参：
    <p> {{ $route.params.keyparam }}</p>
  </div>
</template>

<script>
export default {
  created () {
    // 在created中，获取路由参数
    // this.$route.params.参数名 获取
    console.log(this.$route.params.keyparam)
  }
}
</script>

<style>

</style>
