import { createRouter, createWebHistory } from 'vue-router'
import LineCom from '@/views/echart-demo/line.vue'
import BarCom from '@/views/echart-demo/bar.vue'

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
      component: () => import('../views/echart-demo/pie.vue')
    },
    {
      path: '/radar',
      name: 'radar',
      component: () => import('../views/echart-demo/radar.vue')
    },
    {
      path: '/scatter',
      name: 'scatter',
      component: () => import('../views/echart-demo/scatter.vue')
    },
    {
      path: '/funnel',
      name: 'funnel',
      component: () => import('../views/echart-demo/funnel.vue')
    },
    {
      path: '/gauge',
      name: 'gauge',
      component: () => import('../views/echart-demo/gauge.vue')
    },
    {
      path: '/bar-strip-single',
      name: 'bar-strip-single',
      component: () => import('../views/echart-demo/bar-strip-single.vue')
    },
    {
      path: '/bar-strip-multi',
      name: 'bar-strip-multi',
      component: () => import('../views/echart-demo/bar-strip-multi.vue')
    },
    {
      
      path: '/bar-negative',
      name: 'bar-negative',
      component: () => import('../views/echart-demo/bar-negative.vue')
    }
  ]
})

export default router
