import Vue from 'vue'
import VueRouter from 'vue-router'
// View
import MainLayouttt from '@/views/Main_Layout'
import ArticleDetailll from '@/views/Article_Detail'
// Compnent
import Article from '@/components/Second_Article'
import Collect from '@/components/Second_Collect'
import Like from '@/components/Second_Like'
import User from '@/components/Second_User'

Vue.use(VueRouter)

const routes = [
  {
    // 重定向
    path: '/',
    redirect: '/article'
  },
  {
    path: '/',
    component: MainLayouttt,
    // 通过 children 配置项，可以配置嵌套子路由
    // 1. 在children配置项中，配规则
    // 2. 准备二级路由出口
    children: [
      {
        path: '/article',
        component: Article
      },
      {
        path: '/collect',
        component: Collect
      },
      {
        path: '/like',
        component: Like
      },
      {
        path: '/user',
        component: User
      }
    ]
  },
  {
    path: '/detail/:iddddd',
    component: ArticleDetailll
  }
]

const router = new VueRouter({
  routes
})

export default router
