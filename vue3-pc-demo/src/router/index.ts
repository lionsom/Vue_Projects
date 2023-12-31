import { createRouter, createWebHistory } from 'vue-router'
// 各个子模块路由
import RouterEchart from './router-echart.js'
import RouterDemo from './router-demo.js'

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
        path: '/vue3-demo',
        name: '路由测试',
        component: () => import('@/views/vue3-demo/index.vue')
      },
      {
        path: '/echart-demo',
        name: 'echart-demo',
        component: () => import('@/views/echart-demo/index.vue'),
        children: RouterEchart
      },
      {
        path: '/router-demo',
        name: 'router-demo',
        component: () => import('@/views/router-demo/index.vue'),
        children: RouterDemo
      }
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
