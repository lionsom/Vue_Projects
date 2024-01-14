const routers = [
  {
    path: '/slot-none',
		component: () => import('@/views/slot-demo/pages/09_slot/Father.vue')
  },
  {
    path: '/slot-default',
		component: () => import('@/views/slot-demo/pages/09_slot_默认插槽/Father.vue')
  },
  {
    path: '/slot-name',
		component: () => import('@/views/slot-demo/pages/09_slot_具名插槽/Father.vue')
  },
  {
    path: '/slot-scope',
		component: () => import('@/views/slot-demo/pages/09_slot_作用域插槽/Father.vue')
  },
];

export default routers;