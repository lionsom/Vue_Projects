<template>
  <div class="home-page">
    <h1>欢迎来到demoslist</h1>

    <router-link to="/i18n-demo">前往i18n设置页面</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DemoListPage',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #f5f7fa;

  h1 {
    color: #2c3e50;
    margin-bottom: 16px;
    font-size: 2.5rem;
  }

  p {
    color: #606266;
    font-size: 1.2rem;
  }
}
</style>
