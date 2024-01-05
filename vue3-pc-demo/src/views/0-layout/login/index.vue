<script setup lang="ts">

import router from '@/router';

function handleLogin() {
  router.push('/')
}

</script>

<template>
  <div class="main">
    <div class="title">
      Login 登录页面
    </div> 
    <div class="login-btn">
      <el-button @click="handleLogin">登 录</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">

.main {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 40px;
    color: #333;
    margin-bottom: 20px;
  }

  .login-btn {
    background-color: antiquewhite;
  }
}

</style>
