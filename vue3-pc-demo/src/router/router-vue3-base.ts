const routers = [
  {
    path: '/vue3-demo/001',
		component: () => import('@/views/vue3-demo/demos/01-vue2.vue')
  },
  {
    path: '/vue3-demo/002',
		component: () => import('@/views/vue3-demo/demos/02-vue3.vue')
  },
  {
    path: '/vue3-demo/003',
		component: () => import('@/views/vue3-demo/demos/03-2-vs-3.vue')
  },
  {
    path: '/vue3-demo/004',
		component: () => import('@/views/vue3-demo/demos/04-setup-suger.vue')
  },
  {
    path: '/vue3-demo/005',
		component: () => import('@/views/vue3-demo/demos/05-ref-base.vue')
  },
  {
    path: '/vue3-demo/006',
		component: () => import('@/views/vue3-demo/demos/06-ref-object.vue')
  },
  {
    path: '/vue3-demo/007',
		component: () => import('@/views/vue3-demo/demos/07-reactive-object.vue')
  },
  {
    path: '/vue3-demo/008',
		component: () => import('@/views/vue3-demo/demos/08-ref-vs-reactive.vue')
  },
  {
    path: '/vue3-demo/009',
		component: () => import('@/views/vue3-demo/demos/09-toRefs-toRef.vue')
  },
  {
    path: '/vue3-demo/010',
		component: () => import('@/views/vue3-demo/demos/10-computed.vue')
  },
  {
    path: '/vue3-demo/011',
		component: () => import('@/views/vue3-demo/demos/11-watch-ref-base.vue')
  },
  {
    path: '/vue3-demo/012',
		component: () => import('@/views/vue3-demo/demos/12-watch-ref-object.vue')
  },
  {
    path: '/vue3-demo/013',
		component: () => import('@/views/vue3-demo/demos/13-watch-reactive-object.vue')
  },
  {
    path: '/vue3-demo/014',
		component: () => import('@/views/vue3-demo/demos/14-watch-property.vue')
  },
  {
    path: '/vue3-demo/015',
		component: () => import('@/views/vue3-demo/demos/15-watch-mix.vue')
  },
  {
    path: '/vue3-demo/016',
		component: () => import('@/views/vue3-demo/demos/16-watchEffect.vue')
  },
  {
    path: '/vue3-demo/017',
		component: () => import('@/views/vue3-demo/demos/17-ref-father.vue')
  },
  {
    path: '/vue3-demo/018',
		component: () => import('@/views/vue3-demo/demos/18-typescript.vue')
  },
  {
    path: '/vue3-demo/019',
		component: () => import('@/views/vue3-demo/demos/19-props-father.vue')
  },
  {
    path: '/vue3-demo/020',
		component: () => import('@/views/vue3-demo/demos/20-lifecycle-father.vue')
  },
  {
    path: '/vue3-demo/021',
		component: () => import('@/views/vue3-demo/demos/21-hooks.vue')
  },
];

export default routers;