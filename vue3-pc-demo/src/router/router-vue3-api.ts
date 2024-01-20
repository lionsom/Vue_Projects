const routers = [
  {
    path: '/api-shallowRef-shallowReactive',
		component: () => import('@/views/vue3-demo/other-vue3-api/1-shallowRef-shallowReactive/index.vue')
  },
  {
    path: '/api-readonly-shallowReadonly',
		component: () => import('@/views/vue3-demo/other-vue3-api/2-readonly-shallowReadonly/index.vue')
  },
  {
    path: '/api-toRaw-markRaw',
		component: () => import('@/views/vue3-demo/other-vue3-api/3-toRaw-markRaw/index.vue')
  },
  {
    path: '/api-customRef',
		component: () => import('@/views/vue3-demo/other-vue3-api/4-customRef/index.vue')
  },
  {
    path: '/api-Teleport',
		component: () => import('@/views/vue3-demo/other-vue3-api/5-Teleport/index.vue')
  },
  {
    path: '/api-Suspense',
		component: () => import('@/views/vue3-demo/other-vue3-api/6-Suspense/index.vue')
  },
];

export default routers;