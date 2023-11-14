import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

/*
 * createRouter创建路由实例
 * 配置 history 路由模式
 *  1. history模式：createWebHistory       地址栏不带#
 *  2. hash模式：   createWebHashHistory   地址栏带#
 */
// import.meta.env.BASE_URL: 是vite中的环境变量，就是 vite.config.ts 中base选项的值。可以在vite.config.ts中配置
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

export default router
