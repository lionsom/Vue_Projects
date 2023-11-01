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

const Order = () => import('@/views/layout/content/order/index.vue')
const OrderList = () => import('@/views/layout/content/order/list/index.vue')
const OrderCollect = () => import('@/views/layout/content/order/collect/index.vue')

const Advert = () => import('@/views/layout/content/advert/index.vue')
const AdvertList = () => import('@/views/layout/content/advert/list/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: ContentHome
      },
      {
        path: '/product',
        name: 'product',
        component: Product,
        children: [
          {
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
      },
      {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
          {
            path: 'list', // 访问路径 /order/list
            name: 'list',
            component: OrderList
          },
          {
            path: 'collect', // 访问路径 /order/category
            name: 'collect',
            component: OrderCollect
          }
        ]
      },
      {
        path: '/advert',
        name: 'advert',
        component: Advert,
        children: [
          {
            path: 'list', // 访问路径 /order/list
            name: 'list',
            component: AdvertList
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
