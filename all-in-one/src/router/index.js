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
// Store
import store from '@/store'

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

// 所有的路由在真正被访问到之前(解析渲染对应组件页面前)，都会先经过全局前置守卫
// 只有全局前置守卫放行了，才会到达对应的页面

// 全局前置导航守卫
// to:   到哪里去，到哪去的完整路由信息对象 (路径，参数)
// from: 从哪里来，从哪来的完整路由信息对象 (路径，参数)
// next(): 是否放行
// (1) next()     直接放行，放行到to要去的路径
// (2) next(路径)  进行拦截，拦截到next里面配置的路径

// 定义一个数组，专门用户存放所有需要权限访问的页面
const authUrls = ['/shopping/pay', '/shopping/myorder']

router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  if (!authUrls.includes(to.path)) {
    // 非权限页面，直接放行
    next()
    return
  }
  // 权限页面，需要判断是否有token，即是否已经登录
  // 直接取 store中-》shoppingUser模块-》userInfo.token
  const token = store.state.shoppingUser.userInfo.token
  if (token && token.length > 0) {
    next()
  } else {
    next('/shopping/login')
  }
})

export default router
