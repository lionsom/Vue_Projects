const pc = [
  {
    path: '/p',
    name: 'p',
		component: () => import('@/views/pc/IndexView/index.vue')
  },
  {
    path: '/demo',
    name: 'demo',
		component: () => import('@/views/pc/DemoView/index.vue')
  },
  {
    path: '/demo-vueuse',
    name: 'demo-vueuse',
		component: () => import('@/views/pc/DemoView/vueuse-demo.vue')
  },
  {
    path: '/pdf-once-view',
    name: 'pdf-once-view',
		component: () => import('@/views/pc/PDFOnceView/index.vue')
  },
  {
    path: '/pdf-all-view',
    name: 'pdf-all-view',
		component: () => import('@/views/pc/PDFAllView/index.vue')
  }
]

export default pc;