export default [
  {
    path: '/i18n-demo',
    component: () => import('@/views/modules/i18n-page/index.vue')
  },
  {
    path: '/vue2-offical-keyCodes',
    component: () => import('@/views/demos/vue2-offical-verification/vue-config-keyCodes-demo.vue')
  },
  {
    path: '/vue2-offical-vue-extend',
    component: () => import('@/views/demos/vue2-offical-verification/vue-global-config-vue-extend.vue')
  }
]
