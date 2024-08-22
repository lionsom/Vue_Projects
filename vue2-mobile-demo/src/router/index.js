import Vue from 'vue'
import VueRouter from 'vue-router'
// 主页面
import HomeView from '@/views/tabbar-views/HomeView'
import FirstView from '@/views/tabbar-views/FirstView'
import SecondView from '@/views/tabbar-views/SecondView'
import ThirdView from '@/views/tabbar-views/ThirdView'
import FourthView from '@/views/tabbar-views/FourthView'
// 各个路由模块
import RouterRouterTest from './router-router-test'
import RouterMianJing from './router-mianjing'
import RouterHelloWorld from './router-helloworld'
// import RouterCart from './router-cart'
import RouterShopping from './router-shopping'
import RouterUsage from './router-usage'
import RouterMain from './router-main'

// 路由主页 - old
import RouterView from '@/views/OldRouterView/RouterView'
// 404
import NotFound from '@/views/404'
// Store
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/home/first-view'
  },
  // 主页面
  {
    path: '/home',
    name: HomeView,
    component: HomeView,
    children: [
      { path: 'first-view', component: FirstView },
      { path: 'second-view', component: SecondView },
      { path: 'third-view', component: ThirdView },
      { path: 'fourth-view', component: FourthView }
    ]
  },
  // 路由主页 - old
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
    ...RouterMain,
    ...RouterUsage,
    ...RouterHelloWorld,
    ...RouterRouterTest,
    ...RouterMianJing,
    // ...RouterCart,
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
