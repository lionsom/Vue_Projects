import LineCom from '@/views/echart-demo/demos/line.vue'
import BarCom from '@/views/echart-demo/demos/bar.vue'

// 懒加载，避免内存过大
const PieCom = () => import('@/views/echart-demo/demos/pie.vue')

const subRouter = [
  {
    path: '/echart-demo/line',
    name: 'line',
    component: LineCom
  },
  {
    path: '/echart-demo/bar',
    name: 'bar',
    component: BarCom
  },
  {
    path: '/echart-demo/pie',
    name: 'pie',
    component: PieCom
  },
  {
    path: '/echart-demo/radar',
    name: 'radar',
    component: () => import('@/views/echart-demo/demos/radar.vue')
  },
  {
    path: '/echart-demo/scatter',
    name: 'scatter',
    component: () => import('../views/echart-demo/demos/scatter.vue')
  },
  {
    path: '/echart-demo/funnel',
    name: 'funnel',
    component: () => import('../views/echart-demo/demos/funnel.vue')
  },
  {
    path: '/echart-demo/gauge',
    name: 'gauge',
    component: () => import('../views/echart-demo/demos/gauge.vue')
  },
  {
    path: '/echart-demo/bar-strip-single',
    name: 'bar-strip-single',
    component: () => import('../views/echart-demo/demos/bar-strip-single.vue')
  },
  {
    path: '/echart-demo/bar-strip-multi',
    name: 'bar-strip-multi',
    component: () => import('../views/echart-demo/demos/bar-strip-multi.vue')
  },
  {
    path: '/echart-demo/bar-negative',
    name: 'bar-negative',
    component: () => import('../views/echart-demo/demos/bar-negative.vue')
  }
]

export default subRouter
