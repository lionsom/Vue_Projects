import Vue from 'vue'
import VueRouter from 'vue-router'
// 各个路由模块
import RouterTest from './router-test'
import RouterMianJing from './router-mianjing'
import RouterHello from './router-hello'
import RouterCart from './router-cart'
import RouterGlobalPart from './router-global-part'
import RouterVuex from './router-vuex'
import RouterVant from './router-vant'
import RouterShopping from './router-shopping'

// 路由主页
import RouterView from '@/views/RouterView/RouterView'
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
  // 404
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'hash', // 默认是hash, history
  routes: [
    ...routes,
    ...RouterTest,
    ...RouterMianJing,
    ...RouterHello,
    ...RouterCart,
    ...RouterGlobalPart,
    ...RouterVuex,
    ...RouterVant,
    ...RouterShopping
  ]
})

export default router
