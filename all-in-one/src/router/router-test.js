// router注册拆分模块
// 此模块放路由测试页面路由

import RouterLinkQuery from '@/views/RouterTestView/RouterTestView01'
import RouterLinkDynamic from '@/views/RouterTestView/RouterTestView02'

export default [
  {
    path: '/router_test_link_query',
    component: RouterLinkQuery
  },
  {
    path: '/router_test_link_dynamic/:keyWords?', // ?可有可无
    component: RouterLinkDynamic
  }
]
