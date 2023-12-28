import { createRouter, createWebHistory } from 'vue-router'
import LineCom from '@/views/line.vue'
import BarCom from '@/views/bar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/line',
      name: 'line',
      component: LineCom
    },
    {
      path: '/bar',
      name: 'bar',
      component: BarCom
    },
    {
      path: '/pie',
      name: 'pie',
      component: () => import('../views/pie.vue')
    },
    {
      path: '/radar',
      name: 'radar',
      component: () => import('../views/radar.vue')
    },
    {
      path: '/scatter',
      name: 'scatter',
      component: () => import('../views/scatter.vue')
    },
    {
      path: '/funnel',
      name: 'funnel',
      component: () => import('../views/funnel.vue')
    },
    {
      path: '/gauge',
      name: 'gauge',
      component: () => import('../views/gauge.vue')
    },
    {
      path: '/bar-strip-single',
      name: 'bar-strip-single',
      component: () => import('../views/bar-strip-single.vue')
    },
    {
      path: '/bar-strip-multi',
      name: 'bar-strip-multi',
      component: () => import('../views/bar-strip-multi.vue')
    },
    {
      
      path: '/bar-negative',
      name: 'bar-negative',
      component: () => import('../views/bar-negative.vue')
    }
  ]
})

export default router
