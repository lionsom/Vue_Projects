import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// routes
import routerMyVerification from './router-my-verification'
import RouterVue2Demos from './router-vue2-demos'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/modules/homes/home-page.vue')
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
