import { createRouter, createWebHistory } from 'vue-router'
// 各个子模块路由
import RouterEchart from './router-echart.ts'

const allRouters = [
  // 重定向
  {
    path: '/',
    redirect: '/home'
  },
  // 主页
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/router-view/MainRouter.vue')
  },
  // 404
  { 
    path: '*', 
    component: () => import('@/views/router-view/NotFound.vue')
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
