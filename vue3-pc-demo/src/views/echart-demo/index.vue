<script setup lang="ts">

import { RouterView } from 'vue-router'

</script>


<template> 
  <div class="wrapper">
    <h2>我是EChart</h2>
    
    <ol>
      <li><RouterLink to="/echart-demo/line">line 折线图</RouterLink></li>
      <li><RouterLink to="/echart-demo/bar">bar 柱状图</RouterLink></li>
      <li><RouterLink to="/echart-demo/pie">pie 饼图</RouterLink></li>
      <li><RouterLink to="/echart-demo/radar">radar 雷达图</RouterLink></li>
      <li><RouterLink to="/echart-demo/scatter">scatter 雷达图</RouterLink></li>
      <li><RouterLink to="/echart-demo/funnel">funnel 漏斗图</RouterLink></li>
      <li><RouterLink to="/echart-demo/gauge">仪表图</RouterLink></li>
      <li><RouterLink to="/echart-demo/bar-strip-single">横向 单个 柱状图</RouterLink></li>
      <li><RouterLink to="/echart-demo/bar-strip-multi">横向 多个 柱状图</RouterLink></li>
      <li><RouterLink to="/echart-demo/bar-negative">负数 柱状图</RouterLink></li>
    </ol>
    
    <!-- 三级路由 -->
    <RouterView />
  </div>

</template>


<style scoped lang="scss">
.wrapper {
  background-color: transparent;
  width: 100%;

  ol {
    margin-left: 10px;
    list-style: circle inside;
  }
}
</style>