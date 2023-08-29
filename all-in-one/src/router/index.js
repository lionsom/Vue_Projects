import Vue from 'vue'
import VueRouter from 'vue-router'
// 各个路由模块
import RouterTest from './router-test'
import RouterMianJing from './router-mianjing'
import RouterHello from './router-hello'

// 路由主页
import RouterView from '@/views/RouterView/RouterView'
// VuexDemo
import VuexDemoView from '@/views/VuexDemo/VuexDemoView'
// 404
import NotFound from '@/views/404/NotFound'

Vue.use(VueRouter)

const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/routerview'
  },
  // 路由主页
  {
    path: '/routerview',
    name: RouterView,
    component: RouterView
  },
  // VuexDemo
  {
    path: '/vuexdemo',
    component: VuexDemoView
  },
  // 404
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'hash', // 默认是hash, history
  routes: [
    ...routes,
    ...RouterTest,
    ...RouterMianJing,
    ...RouterHello
  ]
})

export default router
