import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// routes
import routerMyVerification from './router-my-verification'
import RouterVue2Demos from './router-vue2-demos'

// 保存原始方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch((err) => {
    if (err.name === 'NavigationDuplicated') {
      // 重复导航，静默处理
      return this.currentRoute
    }
    // 其他错误继续抛出
    throw err
  })
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject)
  }
  return originalReplace.call(this, location).catch((err) => {
    if (err.name === 'NavigationDuplicated') {
      return this.currentRoute
    }
    throw err
  })
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'AppHome',
    component: () => import('@/views/layouts/AppHome.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/modules/homes/home-page.vue')
      }
    ]
  },
  {
    path: 'demos-home',
    name: 'demos',
    component: () => import('@/views/modules/homes/demo-list-page.vue')
  },
  // NotFound
  {
    path: '*',
    component: () => import('@/views/modules/errors/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes, ...RouterVue2Demos, ...routerMyVerification]
})

export default router
