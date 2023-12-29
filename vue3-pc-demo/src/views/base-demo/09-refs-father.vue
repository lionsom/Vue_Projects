<script setup>

import { ref, onMounted } from 'vue';
import SonCom from '@/demo-views/09-refs-son.vue'

// 模板引用(可以获取dom，也可以获取组件)
// 1. 调用ref函数，生成一个ref对象
// 2. 通过ref标识，进行绑定
// 3. 通过ref对象.value即可访问到绑定的元素(必须渲染完成后，才能拿到)
const inp = ref(null)

// 生命周期钩子onMounted
// 获取模板引用的时机：组件挂载完毕
onMounted(() => {
  console.log(inp.value)
  // inp.value.focus()
})
const clickFn = () => {
  inp.value.focus()
}

// ---------------- 获取子组件 -----------------
const sonRef = ref(null)
const getCom = () => {
  console.log(sonRef.value.count)
  sonRef.value.sayHi()
}

</script>

<template>
  <div>
    <input ref="inp" type="text">
    <button @click="clickFn">点击让输入框聚焦</button>
  </div>

  <!-- 子组件 -->
  <SonCom ref="sonRef"></SonCom>
  <button @click="getCom">获取组件</button>
</template>