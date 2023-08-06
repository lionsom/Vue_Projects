<template>
  <div id="app">

    <lx-header-vue></lx-header-vue>

    <lx-main-vue></lx-main-vue>

    <lx-footer-vue></lx-footer-vue>

  </div>
</template>

<script>

import LxFooterVue from './components/Part/LxFooter.vue'
import LxHeaderVue from './components/Part/LxHeader.vue'
import LxMainVue from './components/Part/LxMain.vue'

export default {

  components: {
    // 组件名: 组件对象
    LxHeaderVue: LxHeaderVue,
    LxMainVue, // 缩写
    LxFooterVue
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
