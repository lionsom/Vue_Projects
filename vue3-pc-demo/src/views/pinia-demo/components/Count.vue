<template>
  <div class="count">
    <h3>欢迎来到:{{ school }}，坐落于：{{ address }}，大写：{{ upperSchool }}</h3>
    <h2>当前求和为：{{ countStore.sum }}, 放大10倍后: {{ bigSum }}</h2>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from "vue";
import { useCountStore } from '@/stores'
import { storeToRefs } from 'pinia'

let n = ref(1) // 用户选择的数字

// 使用useCountStore，得到一个专门保存count相关的store
let countStore = useCountStore()

// 借助`storeToRefs`将`store`中的数据转为`ref`对象，方便在模板中使用。
// storeToRefs只会关注sotre中数据，不会对方法进行ref包裹
const { school, address } = storeToRefs(countStore)
const { bigSum, upperSchool } = storeToRefs(countStore)

// 以下两种方式都可以拿到state中的数据
// console.log('@@@',countStore.sum)
// console.log('@@@',countStore.sum.value) // 错误，无需解包 
// console.log('@@@',countStore.$state.sum)

/* 响应式数据中读取响应式数据，无需解包
let obj = reactive({
  a:1,
  b:2,
  c:ref(3)
})
let x = ref(9)
console.log(obj.a)
console.log(obj.b)
console.log(obj.c) // 3 正确
console.log(obj.c.value) // undefined，无需解包 
*/



// 方法
function add() {
  // 第一种修改方式
  // countStore.sum += 1

  // 第二种修改方式
  /* countStore.$patch({
    sum:888,
    school:'尚硅谷',
    address:'北京'
  }) */

  // 第三种修改方式
  countStore.increment(n.value)
}
function minus() {
  countStore.decrease(n.value)
}
</script>

<style scoped lang="scss">
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>