
<script setup>

import {ref, watch} from 'vue'

const count = ref(0)
const nickname = ref('jack')

const changeCount = () => {
  count.value++
}

const changeNickName = () => {
  nickname.value = 'petter'
}

// 1. 监视单个数据的变化
watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal)
}) 

// 2. 监视多个数据的变化
watch([count, nickname],  (newVal, oldVal) => {
  console.log(newVal, oldVal)
}) 

// 3. immediate 立刻执行
watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue)
}, {
  // 在侦听器创建时立即出发回调，响应式数据变化之后继续执行回调
  immediate: true
})

// --------------------------------------------

// 4. deep 深度监视, 默认 watch 进行的是 浅层监视
//    const ref1 = ref(简单类型) 可以直接监视
//    const ref2 = ref(复杂类型) 监视不到复杂类型内部数据的变化
const userInfo = ref({
  name: 'zs',
  age: 18
})
const setUserInfo1 = () => {
  // 修改了 userInfo.value 修改了对象的地址，才能监视到
  userInfo.value = { name: 'ls', age: 50 }
}
const setUserInfo2 = () => {
  // 修改对象内部属性
  userInfo.value.age++
}

// deep 深度监视
watch(userInfo, (newValue, oldValue) => {
  console.log(newValue, oldValue)
}, {
  deep: true
})

// --------------------------------------------

// 5. 对于对象中的单个属性，进行监视
watch(()=> userInfo.value.age, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

</script>


<template>

<div>{{ count }}</div>

<div>{{ nickname }}</div>

<button @click="changeCount">更改Count</button>

<button @click="changeNickName">更改名字</button>

<div> =========== 深层监听 ===========</div>

<button @click="setUserInfo1">给对象赋值</button>
<button @click="setUserInfo2">给对象内部属性修改</button>

</template>