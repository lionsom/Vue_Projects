import Vue from 'vue'
// Hello
import VueRouter from 'vue-router'
import HomeView from '../views/HelloWorld/HomeView.vue'
// 面经
// View
import MJMainViewAAAAA from '@/views/MianJing/MJ_MainView'
import MJDetailAAA from '@/views/MianJing/MJ_Detail'
// Compnent
import MJArticleBBB from '@/views/MianJing/MJ_Article'
import MJCollectBBB from '@/views/MianJing/MJ_Collect'
import MJLikeBBB from '@/views/MianJing/MJ_Like'
import MJUserBBB from '@/views/MianJing/MJ_User'

Vue.use(VueRouter)

const routes = [
  /* ===== hello ===== */
  {
    path: '/hello_home',
    name: 'hello_home',
    component: HomeView
  },
  {
    path: '/hello_about',
    name: 'hello_about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HelloWorld/AboutView.vue')
  },
  /* ===== 面经 ===== */
  {
    // 重定向
    path: '/',
    redirect: '/article'
  },
  {
    path: '/',
    component: MJMainViewAAAAA,
    // redirect: '/collect',   // 重定向也可以写在这
    // 通过 children 配置项，可以配置嵌套子路由
    // 1. 在children配置项中，配规则
    // 2. 准备二级路由出口
    children: [
      {
        path: '/article',
        component: MJArticleBBB
      },
      {
        path: '/collect',
        component: MJCollectBBB
      },
      {
        path: '/like',
        component: MJLikeBBB
      },
      {
        path: '/user',
        component: MJUserBBB
      }
    ]
  },
  {
    path: '/detail/:iddddd',
    component: MJDetailAAA
  }
]

const router = new VueRouter({
  routes
})

export default router
