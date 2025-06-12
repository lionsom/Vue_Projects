import Vue from 'vue'
import VueRouter from 'vue-router'
//
import RouterVue2Demos from './router-vue2-demos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/index.vue')
  },
  {
    path: '/index',
    component: () => import('@/pages/home/home-page.vue')
  },
  // 404
  { path: '*', component: ()  => import('@/pages/404.vue') }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    ...RouterVue2Demos,
  ]
})

export default router
