<script setup lang="ts">
// 导入
import { ref, computed } from 'vue';
// 数组
const list = [1,2,3,4,5,6]
// ref -> 对象
const listref = ref(list)
// 计算属性
const filterList = computed(() => {
  return listref.value.filter(item => item > 2)
})
// 
const addFun = (val) => {
  listref.value.push(val)
}
// 计算属性：Set Get
const filterList22 = computed({
    set: (val) => {
        listref.value.push(...val)
    },
    get: () => {
        return listref.value.filter(item => item > 3)
    }
})
const addFun22 = (val) => {
  // 计算属性Set
  filterList22.value = val
}

</script>

<template>

<div>
  <div>原始数据：{{ listref }}</div>
  <div>计算属性数据：{{ filterList }}</div>
  <button @click="addFun(3)" type="button">修改</button>

  <div>计算属性Get = {{ filterList22 }}</div>
  <button @click="addFun22(444)">计算属性Set</button>
</div>
</template>