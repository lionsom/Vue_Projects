import Vue from 'vue'
import VueRouter from 'vue-router'
//
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import ContentHome from '@/views/layout/content/home/content-home.vue'

// 懒加载，避免内存过大
const Product = () => import('@/views/layout/content/product/index.vue')
const ProductList = () => import('@/views/layout/content/product/list/index.vue')
const ProductCategory = () => import('@/views/layout/content/product/category/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home-name',
        component: ContentHome
      },
      {
        path: '/product',
        name: 'product-name',
        component: Product,
        children: [{
          path: 'list', // 访问路径 /product/list
          name: 'list',
          component: ProductList
        },
        {
          path: 'category', // 访问路径 /product/category
          name: 'category',
          component: ProductCategory
        }
        ]
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
