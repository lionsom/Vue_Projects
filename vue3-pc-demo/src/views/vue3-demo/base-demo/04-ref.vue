<script setup lang="ts">
// 2. ref: 接收简单类型 或 复杂类型，返回一个响应式的对象
//    本质：是在原有传入数据的基础上，外层包了一层对象，包成了复杂类型
//    底层，包成复杂类型之后，再借助 reactive 实现的响应式
//    注意点：
//    1. 脚本中访问数据，需要通过 .value
//    2. 在template中，.value不需要加 (帮我们扒了一层)

// 推荐：以后声明数据，统一用 ref => 统一了编码规范
import { ref } from 'vue';
const count = ref(11)
const setCount = (val) => {
  count.value+=val
}
</script>

<template>
  <div>
    <div> {{ count }} </div>
    <button @click="setCount(1)">ref点击</button>
  </div>
</template>
