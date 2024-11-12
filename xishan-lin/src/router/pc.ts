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
    path: '/pdfview',
    name: 'pdfview',
		component: () => import('@/views/pc/PDFView/index.vue')
  }
]

export default pc;