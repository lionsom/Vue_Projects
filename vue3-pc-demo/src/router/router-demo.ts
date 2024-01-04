
const subRouter = [
  {
    path: '/echart/line',
    name: 'line',
    component: LineCom
  },
  {
    path: '/echart/bar',
    name: 'bar',
    component: BarCom
  },
  {
    path: '/echart/pie',
    name: 'pie',
    component: PieCom
  },
  {
    path: '/echart/radar',
    name: 'radar',
    component: () => import('@/views/echart-demo/radar.vue')
  },
  {
    path: '/echart/scatter',
    name: 'scatter',
    component: () => import('../views/echart-demo/scatter.vue')
  },
  {
    path: '/echart/funnel',
    name: 'funnel',
    component: () => import('../views/echart-demo/funnel.vue')
  },
  {
    path: '/echart/gauge',
    name: 'gauge',
    component: () => import('../views/echart-demo/gauge.vue')
  },
  {
    path: '/echart/echart/bar-strip-single',
    name: 'bar-strip-single',
    component: () => import('../views/echart-demo/bar-strip-single.vue')
  },
  {
    path: '/echart/bar-strip-multi',
    name: 'bar-strip-multi',
    component: () => import('../views/echart-demo/bar-strip-multi.vue')
  },
  {
    path: '/echart/bar-negative',
    name: 'bar-negative',
    component: () => import('../views/echart-demo/bar-negative.vue')
  }
]

export default subRouter
