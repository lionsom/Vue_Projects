const routers = [
  {
    path: '/001',
		component: () => import('@/views/vue3-demo/demos/01-vue2.vue')
  },
  {
    path: '/002',
		component: () => import('@/views/vue3-demo/demos/02-vue3.vue')
  },
  {
    path: '/003',
		component: () => import('@/views/vue3-demo/demos/03-2-vs-3.vue')
  },
  {
    path: '/004',
		component: () => import('@/views/vue3-demo/demos/04-setup-suger.vue')
  },
  {
    path: '/005',
		component: () => import('@/views/vue3-demo/demos/05-ref-base.vue')
  },
  {
    path: '/006',
		component: () => import('@/views/vue3-demo/demos/06-ref-object.vue')
  },
  {
    path: '/007',
		component: () => import('@/views/vue3-demo/demos/07-reactive-object.vue')
  },
  {
    path: '/008',
		component: () => import('@/views/vue3-demo/demos/08-ref-vs-reactive.vue')
  },
  {
    path: '/009',
		component: () => import('@/views/vue3-demo/demos/09-toRefs-toRef.vue')
  },
  {
    path: '/010',
		component: () => import('@/views/vue3-demo/demos/10-computed.vue')
  },
  {
    path: '/011',
		component: () => import('@/views/vue3-demo/demos/11-watch-ref-base.vue')
  },
  {
    path: '/012',
		component: () => import('@/views/vue3-demo/demos/12-watch-ref-object.vue')
  },
  {
    path: '/013',
		component: () => import('@/views/vue3-demo/demos/13-watch-reactive-object.vue')
  },
  {
    path: '/014',
		component: () => import('@/views/vue3-demo/demos/14-watch-property.vue')
  },
  {
    path: '/015',
		component: () => import('@/views/vue3-demo/demos/15-watch-mix.vue')
  },
  {
    path: '/016',
		component: () => import('@/views/vue3-demo/demos/16-watchEffect.vue')
  },
  {
    path: '/017',
		component: () => import('@/views/vue3-demo/demos/17-ref-father.vue')
  },
  {
    path: '/018',
		component: () => import('@/views/vue3-demo/demos/18-typescript.vue')
  },
  {
    path: '/019',
		component: () => import('@/views/vue3-demo/demos/19-props-father.vue')
  },
  {
    path: '/020',
		component: () => import('@/views/vue3-demo/demos/20-lifecycle-father.vue')
  },
  {
    path: '/021',
		component: () => import('@/views/vue3-demo/demos/21-hooks.vue')
  },
];

export default routers;