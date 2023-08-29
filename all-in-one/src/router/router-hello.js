
// router注册拆分模块
// 此模块放路由测试页面路由

// Hello
import HomeView from '../views/HelloWorld/HomeView.vue'

export default [
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
  }
]
