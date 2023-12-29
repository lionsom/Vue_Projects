<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import LeftContent from './left-content.vue'
import RightContent from './right-content.vue'
import TopContent from './top-content.vue'

defineOptions({
  name: "layout-home"
})

</script>

<template>

  <!-- element-plus Container 布局容器 -->
  <div class="common-layout">
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside width="200px">
        <LeftContent />
      </el-aside>
      <!-- 右侧内容 -->
      <el-container>
        <!-- 头部 -->
        <el-header>
          <TopContent />
        </el-header>
        <!-- 主体 -->
        <el-main>
          <RightContent />
        </el-main>
      </el-container>
    </el-container>
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
.common-layout {
  background-color: orange;
}
</style>