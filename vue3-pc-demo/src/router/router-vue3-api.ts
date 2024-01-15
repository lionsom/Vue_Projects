const routers = [
  {
    path: '/api-shallowRef-shallowReactive',
		component: () => import('@/views/other-vue3-api/1-shallowRef-shallowReactive/index.vue')
  },
  {
    path: '/api-readonly-shallowReadonly',
		component: () => import('@/views/other-vue3-api/2-readonly-shallowReadonly/index.vue')
  },
  {
    path: '/api-toRaw-markRaw',
		component: () => import('@/views/other-vue3-api/3-toRaw-markRaw/index.vue')
  },
  {
    path: '/api-customRef',
		component: () => import('@/views/other-vue3-api/4-customRef/index.vue')
  },
];

export default routers;