import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// 
import pc from './pc'
import mobile from './mobile'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    ...pc,
    ...mobile
  ]
})

/**
 * 全局路由守卫，路由跳转前的拦截
 */
// router.beforeEach((to, from, next) => {
//   // 登录校验
//   if (to.name !== 'login' &&!localStorage.getItem('token')) {
//     next({
//       name: 'login'
//     })
//   } else {
//     next()
//   }
// })

// 路由切换时
router.afterEach((to, from) => {
  console.log('router from: ', from);
  console.log('router to: ', to);
})

export default router
