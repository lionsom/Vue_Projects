<template>
  <div class="main">
    <p>当前环境: {{ currentEnv }}</p>

    <!-- 全局常量 -->
    <p>全局env - VUE_APP_NAME = {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'env-usage-demo',
  data() {
    return {
      currentEnv: process.env.NODE_ENV,
      name: process.env.VUE_APP_NAME
    }
  }
}
</script>
