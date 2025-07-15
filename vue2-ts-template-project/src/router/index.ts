import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// routes
import routerHome from './router-home'
import routerDemos from './router-demos'
import routerOfficalApiDemos from './router-offical-api-demos'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(
  location: Parameters<VueRouter['push']>[0],
  onResolve?: Parameters<VueRouter['push']>[1],
  onReject?: Parameters<VueRouter['push']>[2]
) {
  if (onResolve || onReject) {
    return (originalPush as any).call(this, location, onResolve, onReject)
  }
  return (originalPush as any).call(this, location).catch((err: any) => {
    if (err.name === 'NavigationDuplicated') {
      return this.currentRoute
    }
    throw err
  })
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(
  location: Parameters<VueRouter['replace']>[0],
  onResolve?: Parameters<VueRouter['replace']>[1],
  onReject?: Parameters<VueRouter['replace']>[2]
) {
  if (onResolve || onReject) {
    return (originalReplace as any).call(this, location, onResolve, onReject)
  }
  return (originalReplace as any).call(this, location).catch((err: any) => {
    if (err.name === 'NavigationDuplicated') {
      return this.currentRoute
    }
    throw err
  })
}

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'AppHome',
    component: () => import('@/views/layouts/AppHome.vue'),
    children: [...routerHome]
  }
  // NotFound
  // {
  //   path: '*',
  //   component: () => import('@/views/modules/errors/NotFound.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes, ...routerDemos, ...routerOfficalApiDemos]
})

export default router
