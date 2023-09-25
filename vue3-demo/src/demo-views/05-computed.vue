<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->


<script setup>
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
        listref.value.push(val)
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