<template>
  <div class="layout">
    <!-- 按钮列 -->
    <div class="layout-menu">
      <Menu></Menu>
    </div>

    <!-- 右侧内容 -->
    <div class="layout-content">
      <Content></Content>
    </div>
  </div>
</template>

<script>

import Menu from './menu/index.vue'
import Content from './content/index.vue'

export default {
  name: 'layout-page',
  components: {
    Menu,
    Content
  }
}
</script>

<style lang="less" scoped>

@import './index.less';

</style>
