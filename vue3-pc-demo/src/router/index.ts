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
    component: () => import('@/views/layout/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/layout/login/index.vue')
  },
  // 404
  // { 
  //   path: '*', 
  //   component: () => import('@/layout/404/404.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...allRouters,
    ...RouterEchart
  ]
})

/**
 * 全局路由守卫，路由跳转前的拦截
 */
// router.beforeEach((to, from, next) => {
//   // 登录校验
//   if (to.name!== 'login' &&!localStorage.getItem('token')) {
//     next({
//       name: 'login'
//     })
//   } else {
//     next()
//   }
// })

// 路由切换时，清空缓存
router.afterEach((to, from) => {
  // 路由切换时，清空缓存
  // localStorage.clear()
  console.log('router from: ', from);
  console.log('router to: ', to);
})

export default router
