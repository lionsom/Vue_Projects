// i18n
import I18nDemo from '@/views/i18n-page'

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
