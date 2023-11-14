<script setup lang="ts">
/* 在vue3 组合值API中
 *  1. 获取路由对象router  ->  useRouter
 *     const router = useRouter()
 *  2. 获取路由参数route   ->  useRoute
 *     const route = useRoute()
 */
import { useRouter, useRoute } from 'vue-router'
// pinia
import { useUserStore, useCounterStore } from '@/stores'

// router
const router = useRouter()
const route = useRoute()

// pinia
const userStore = useUserStore()
const counterStore = useCounterStore()

function goMe() {
  console.log(router, route)
  router.push('/me')
}
</script>

<template>
  <!-- 一级路由 展示窗口 -->
  <router-view></router-view>

  <h1>我是app</h1>

  <button @click="$router.push('/home')">首页</button>
  <button @click="$router.push('/list')">列表</button>
  <button @click="goMe">我的</button>

  <el-button @click="$router.push('/list')">列表</el-button>
  <el-button @click="$router.push('/list')">列表</el-button>

  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <p>{{ userStore.token }}</p>
  <el-row class="mb-4">
    <el-button type="primary" @click="userStore.setToken('123456')">
      登录
    </el-button>
    <el-button type="success" @click="userStore.removeToken()">
      退出
    </el-button>
  </el-row>

  {{ counterStore.count }}
  {{ counterStore.doubleCount }}
  <el-row class="mb-4">
    <el-button type="primary" @click="counterStore.increment()">
      计数器++
    </el-button>
  </el-row>
</template>

<style scoped>
button {
  margin-right: 10px;
}
</style>
