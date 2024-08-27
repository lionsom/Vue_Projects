<template>
  <div class="main">

    <my-base-nav-bar title="自定义指令" :showLeftArrow="true" :isAutoBack="true" />

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
