export default [
  {
    path: 'home',
    component: () => import('@/views/modules/homes/home-hello.vue')
  },
  {
    path: 'demos',
    component: () => import('@/views/modules/homes/home-demos.vue')
  }
]
