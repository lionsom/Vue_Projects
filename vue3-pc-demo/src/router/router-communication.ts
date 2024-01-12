const routers = [
		{
			path: '/props',
      name: '',
      component: () => import('@/views/communication-demo/pages/01_props/Father.vue')
		},
		{
			path: '/event',
      component: () => import('@/views/communication-demo/pages/02_custom-event/Father.vue')
		},
		{
			path: '/mitt',
      component: () => import('@/views/communication-demo/pages/03_mitt/Father.vue')
		},
		{
			path: '/model',
      component: () => import('@/views/communication-demo/pages/04_v-model/Father.vue')
		},
		{
			path: '/attrs',
      component: () => import('@/views/communication-demo/pages/05_$attrs/Father.vue')
		},
		{
			path: '/ref-parent',
      component: () => import('@/views/communication-demo/pages/06_$refs-$parent/Father.vue')
		},
		{
			path: '/provide-inject',
      component: () => import('@/views/communication-demo/pages/07_provide-inject/Father.vue')
		},
];

export default routers;