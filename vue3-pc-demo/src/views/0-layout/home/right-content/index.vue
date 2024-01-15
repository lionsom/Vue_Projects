<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <!-- 路由视图窗口 -->
    <RouterView/>
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
