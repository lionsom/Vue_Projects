
<script setup>

import { provide, ref } from 'vue'
import centerCom from '@/demo-views/10-provied-center.vue';

// 1. 跨层传递普通数据
provide('theme-color', 'pink')

// 2. 跨层传递响应式数据
const count = ref(100)
provide('count', count)

setTimeout(() => {
  count.value = 500
}, 2000)

// 3. 跨层传递函数 => 给子孙后代传递可以修改数据的方法
provide('changeCount', (newCount) => {
  count.value = newCount
})

</script>

<template>
  <div class="main">
    <div>我是顶层</div>
    <centerCom></centerCom>
  </div>
</template>

<style scoped>

.main {
  background-color: antiquewhite;
  height: 100%;
  width: 100%;
}

</style>