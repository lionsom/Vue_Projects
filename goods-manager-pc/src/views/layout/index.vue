<template>
  <div class="layout">
    <!-- 按钮列 -->
    <div class="layout-menu" :class="{ 'layout-menu-small': menuIsCollapse }">
      <!-- 添加属性方式传值 -->
      <Menu :isCollapse="menuIsCollapse"></Menu>
    </div>

    <!-- 右侧内容 -->
    <div class="layout-content" :class="{ 'layout-content-small-padding': menuIsCollapse }">
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Menu from './menu/index.vue'
import Content from './content/index.vue'
import Bus from '@/event-bus'

export default {
  data() {
    return {
      // 当前左侧按钮是否折叠
      menuIsCollapse: false
    }
  },
  name: 'layout-page',
  components: {
    Menu,
    Content
  },
  mounted() {
    Bus.$on('menuCollapseStatus', (val) => {
      this.menuIsCollapse = val
    })
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
