<script setup lang="ts">

import { inject } from 'vue'

// 普通数据
const themeColor = inject('theme-color')

// 响应数据
const count = inject('count')

// 传递方法
const changeCount = inject('changeCount')
const clickFn = () => {
  changeCount(1000)
}

</script>

<template>

  <div class="main">我是底层 = {{ themeColor }} - {{ count }}</div>
  <button @click="clickFn">更新count</button>

</template>

<style scoped>
.main {
  background-color: cyan;
  height: 100%;
  width: 100%;
}
</style>