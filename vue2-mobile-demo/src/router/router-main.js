// i18n
import I18nDemo from '@/views/i18n-page'
// iframe 路由页面
import IframeContainerPage from '@/views/iframe-container-page'

export default [
  {
    path: '/i18n-demo',
    component: I18nDemo
  },
  {
    path: '/iframe-container-page/:iframeUrl?',
    component: IframeContainerPage
  },
]
