import Vue from 'vue'

// 1. 安装VueRouter
// 2. 引入VueRouter
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RouterMy from '../views/RouterComp/Router_My.vue'
import RouterFinddd from '../views/RouterComp/Router_Find.vue'
import RouterFriendddd from '../views/RouterComp/Router_Friend.vue'

// 3. 安装注册VueRouter
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/router_my',
    name: 'myyyyy',
    component: RouterMy
  },
  {
    path: '/router_find',
    name: 'finddddd',
    component: RouterFinddd
  },
  {
    path: '/router_friend/:keyparam',
    name: 'frienddddd',
    component: RouterFriendddd
  },
  {
    path: '/a', // 重定向，方式一
    redirect: '/router_my'
  }, {
    path: '/b', // 重定向，方式二
    component: RouterFriendddd
  },
  {
    path: '*', // 最后走这个规则
    component: RouterFriendddd
  }
]

// 4. 创建路由对象
const router = new VueRouter({
  mode: 'hash', // 默认是hash
  routes
})

// 5. 暴露给main.js调用
export default router
