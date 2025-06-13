import Vue from 'vue'
import VueRouter from 'vue-router'
//
import RouterVue2Demos from './router-vue2-demos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('@/pages/home/home-page.vue')
  },
  {
    path: '/demos',
    component: () => import('@/pages/home/demo-list-page.vue')
  },
  // 404
  { path: '*', component: () => import('@/pages/others/404.vue') }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    ...RouterVue2Demos,
  ],
})


// 解决重复导航错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    // 解决：NavigationDuplicated: Avoided redundant navigation to current location
    if (err.name === 'NavigationDuplicated') {
      return Promise.resolve() // 返回一个已解决的Promise
    }
    // 其他错误处理
    return Promise.reject(err)
  })
}

export default router
