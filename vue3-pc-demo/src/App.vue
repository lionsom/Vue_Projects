<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <!-- 路由视图窗口 -->
    <RouterView/>
  </div>
</template>

<style scoped lang="scss">
.app {
    width: 100vw;
    height: 100vh;
}
</style>
