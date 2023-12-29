
<script setup>
  // 1. reactive: 接收一个对象类型的数据，返回一个响应式的对象
  import { reactive } from 'vue';
  // 执行函数 传入参数 变量接收
  const stateee = reactive({
    name: 'java',
    count: 100,
    age: 22
  })
  const setCount = (more) => {
    // 修改数据更新视图
    stateee.count+=more
  }

  // 2. 普通数据示例，不自动变化
  let message = 'this is a message'
  const logMessage = (val) => {
    message+=val
  }
</script>

<template>
  <div>
    <div>{{ stateee.count }}</div>
    <button @click="setCount(10)">reactive响应式数据</button>

    <div>{{ message }}</div>
    <button @click="logMessage('a')">普通数据</button>
  </div>
</template>
