<script setup lang="ts">
import LeftMenu from './left-menu/index.vue'
// import RightContent from './right-content/index.vue'
import TopHeader from './top-header/index.vue'

defineOptions({
  name: "layout-home"
})

</script>

<template>
  <div class="main">
    <!-- 左 -->
    <div class="left-content">
      <LeftMenu />
    </div>

    <!-- 右 -->
    <div class="right-content">
      <!-- header -->
      <div class="top-header">
        <TopHeader />
      </div>

      <!-- content -->
      <div class="right-content-content">
        <!-- <RightContent /> -->

        <router-view></router-view>
      </div>
    </div>
  </div>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" 
      @click="$router.push('/line')"
    />

    <div class="wrapper">
      <nav>
        <RouterLink to="/echart/line">line 折线图</RouterLink>
        <RouterLink to="/echart/bar">bar 柱状图</RouterLink>
        <RouterLink to="/echart/pie">pie 饼图</RouterLink>
        <RouterLink to="/echart/radar">radar 雷达图</RouterLink>
        <RouterLink to="/echart/scatter">scatter 雷达图</RouterLink>
        <RouterLink to="/echart/funnel">funnel 漏斗图</RouterLink>
        <RouterLink to="/echart/gauge">仪表图</RouterLink>
        <RouterLink to="/echart/bar-strip-single">横向 单个 柱状图</RouterLink>
        <RouterLink to="/echart/bar-strip-multi">横向 多个 柱状图</RouterLink>
        <RouterLink to="/echart/bar-negative">负数 柱状图</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- 三级路由 -->
  <!-- <RouterView /> -->
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.left-content {
  width: 200px;
  background-color: #4680ff;
  overflow: hidden;
}

.right-content {
  flex: 1;
  overflow: hidden;

  .top-header {
    height: 60px;
    background-color: yellowgreen;
  }

  .right-content-content {
    background-color: orange;
    height: 100%;
  }
}

</style>