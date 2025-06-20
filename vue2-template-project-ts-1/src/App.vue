<template>
  <div class="container">
    <HeaderView />
    <div class="main-div">
      <!-- 路由 -->
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderView from '@/pages/header/header.vue'

export default {
  name: 'App',
  components: {
    HeaderView
  }
}
</script>

<style>
.container {
  display: grid;
  grid-template-rows: 90px 1fr; /* 第一行90px，第二行自适应 */
  height: 100vh;

  .main-div {
    background-color: antiquewhite;
  }
}
</style>
