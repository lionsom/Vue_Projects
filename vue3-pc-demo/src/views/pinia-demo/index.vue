<template>
  <div class="main">
    <Count/>
    <br>
    <LoveTalk/>
  </div>
</template>

<script setup lang="ts" name="App">
  import Count from './components/Count.vue'
  import LoveTalk from './components/LoveTalk.vue'
</script>

<style scoped lang="scss">

.main {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  margin: 10px 10px;
}

</style>