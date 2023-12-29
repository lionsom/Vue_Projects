<template>
    <div>
      我是Category
    </div>
  </template>

<script>
export default {
  name: 'LayoutCategoryPage',
  created () {
    // 在created中，获取路由参数
    // this.$route.query.参数名 获取查询参数
    // this.$route.params.参数名 获取动态路由参数
    console.log('传递的query参数 = ' + this.$route.query.index)
  }
}

</script>
