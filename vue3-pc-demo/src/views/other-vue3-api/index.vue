<template>
  <div class="main-content">
    <div class="top">
      <ul>
        <li><router-link to="/api-shallowRef-shallowReactive">1.shallowRef-shallowReactive</router-link></li>
        
        <li><router-link to="/api-readonly-shallowReadonly">2.readonly-shallowReadonly</router-link></li>
        
        <li><router-link to="/api-toRaw-markRaw">3.toRaw-markRaw</router-link></li>

        <li><router-link to="/api-customRef">4.customRef</router-link></li>

        <li><router-link to="/api-Teleport">5.Teleport</router-link></li>

        <li><router-link to="/api-Suspense">6.Suspense</router-link></li>
      </ul>
    </div>

    <div class="view">
      <!-- 视图窗口 -->
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

.main-content {
  width: 100%;
  .top {
    background-color: antiquewhite;
    width: 100%;
    height: auto;
  }
  .view {
    background-color: greenyellow;
    margin-left: 10px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}

</style>