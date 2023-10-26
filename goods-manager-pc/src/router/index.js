import Vue from 'vue'
import VueRouter from 'vue-router'
//
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import ContentHome from '@/views/layout/content/home/content-home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: ContentHome
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
