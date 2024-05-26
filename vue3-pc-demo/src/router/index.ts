import { createRouter, createWebHistory } from 'vue-router'
// 各个子模块路由
import RouterVue3Base from './router-vue3-base.js'
import RouterEchart from './router-echart.js'
import RouterDemo from './router-demo.js'
import RouterCommunication from './router-communication.js'
import RouterSlot from './router-slot.js'
import RouterAPI from './router-vue3-api.js'

const allRouters = [
  // 重定向
  {
    path: '/index',
    redirect: '/'
  },
  // 主页
  {
    path: '/',
    component: () => import('@/views/0-layout/home/index.vue'),
    children: [
      {
        path: 'vue3-demo',
        name: 'vue3-demo',
        component: () => import('@/views/vue3-demo/index.vue'),
        children: RouterVue3Base
      },
      {
        path: 'echart-demo',
        name: 'echart-demo',
        component: () => import('@/views/echart-demo/index.vue'),
        children: RouterEchart
      },
      {
        path: 'router-demo',
        name: 'router-demo',
        component: () => import('@/views/router-demo/index.vue'),
        children: RouterDemo
      },
      {
        path: 'pinia-demo',
        name: 'pinia-demo',
        component: () => import('@/views/pinia-demo/index.vue')
      },
      {
        path: 'communication-demo',
        name: 'communication-demo',
        component: () => import('@/views/communication-demo/index.vue'),
        children: RouterCommunication
      },
      {
        path: 'slot-demo',
        name: 'slot-demo',
        component: () => import('@/views/slot-demo/index.vue'),
        children: RouterSlot
      },
      {
        path: 'vue3-api',
        name: 'vue3-api',
        component: () => import('@/views/vue3-demo/other-vue3-api/index.vue'),
        children: RouterAPI
      },
      {
        path: 'lodash-demo',
        name: 'lodash-demo',
        component: () => import('@/views/lodash-demo/index.vue'),
        children: RouterAPI
      },
      {
        path: 'request-demo',
        name: 'request-demo',
        component: () => import('@/views/request-demo/index.vue'),
        children: []
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/0-layout/login/index.vue')
  }
  // 404
  // { 
  //   path: '*', 
  //   component: () => import('@/0-layout/404/404.vue')
  // },
]

/**
 * 路由主体
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...allRouters
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
