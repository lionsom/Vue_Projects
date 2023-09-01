import Layout from '@/views/shopping/layout'
import Login from '@/views/shopping/login'
import Search from '@/views/shopping/search'
import SearchList from '@/views/shopping/search/list'
import MyOrder from '@/views/shopping/myorder'
import ProductDetail from '@/views/shopping/prodetail'
import Pay from '@/views/shopping/pay'

// 二级路由
import Home from '@/views/shopping/layout/home'
import Category from '@/views/shopping/layout/category'
import Cart from '@/views/shopping/layout/cart'
import User from '@/views/shopping/layout/user'

export default [
  {
    path: '/shopping',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'category', component: Category },
      { path: 'cart', component: Cart },
      { path: 'user', component: User }
    ]
  },
  {
    path: '/shopping/login',
    component: Login
  },
  {
    path: '/shopping-search',
    component: Search
  },
  {
    path: '/shopping-searchlist',
    component: SearchList
  },
  {
    path: '/shopping-myorder',
    component: MyOrder
  },
  {
    path: '/shopping-productdetail/:id',
    component: ProductDetail
  },
  {
    path: '/shopping-pay',
    component: Pay
  }
]
