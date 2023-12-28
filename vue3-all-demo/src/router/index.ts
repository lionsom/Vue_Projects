import { createRouter, createWebHistory } from 'vue-router'
// 各个子模块路由
import RouterEchart from './router-echart.ts'

const allRouters = [
  // 重定向
  {
    path: '/',
    redirect: '/echart'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...allRouters,
    ...RouterEchart
  ]
})

export default router
