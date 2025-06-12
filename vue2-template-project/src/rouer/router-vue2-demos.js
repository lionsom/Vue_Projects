
export default [
  {
    path: '/i18n-demo',
    component: I18nDemo
  },
  {
    path: '/iframe-container-page/:iframeUrl?',
    component: () => import('@/views/iframe-container-page') // iframe 路由页面
  },
]
