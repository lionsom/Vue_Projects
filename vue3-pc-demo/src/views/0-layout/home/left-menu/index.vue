<script lang='ts'>
  export default {
    name: "left-content-menu"
  }
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  HomeFilled,
  Setting,
  Bicycle,
  Box,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>


<template>
  <el-menu
    default-active="$route.path"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    background-color="#4680ff"
    text-color="#fff"
    active-text-color="#ebe234"
    router
  >
    <!-- 首页 -->
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
        <el-icon><HomeFilled /></el-icon>
      <span slot="title">首 页</span>
    </el-menu-item>

    <!-- 1 -->
    <el-menu-item index="/vue3-demo">
      <el-icon><icon-menu /></el-icon>
      <template #title>禺神 Vue3 Demo</template>
    </el-menu-item>

    <!-- 2 -->
    <el-menu-item index="/echart-demo">
        <el-icon><Bicycle /></el-icon>
        <template #title>Echart 样例</template>
    </el-menu-item>
    
    <!-- 2 -->
    <el-menu-item index="/router-demo">
      <el-icon><icon-menu /></el-icon>
      <template #title>Router Demo</template>
    </el-menu-item>

    <!-- 3 -->
    <el-menu-item index="/pinia-demo">
      <el-icon><Box /></el-icon>
      <template #title>Pinia Demo</template>
    </el-menu-item>

    <!-- 4 -->
    <el-menu-item index="/communication-demo">
      <el-icon><Box /></el-icon>
      <template #title>组件通信Demo</template>
    </el-menu-item>
    

    <!-- 3 -->
    <el-menu-item index="3" >
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    
    <!-- 4 -->
    <el-menu-item index="4" disabled>
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>

</template>


<style scoped lang="scss">

.menu-list {
  overflow: hidden;
}

// 从控制台中找到css类
.el-menu {
  border-right-width: 0px;
}

// 再找到
.is-active {
  background-color: #1e78bf !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>
