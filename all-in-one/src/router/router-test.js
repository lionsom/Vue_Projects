// router注册拆分模块
// 此模块放路由测试页面路由

import RouterLinkQuery from '@/views/RouterTestView/RouterTestView01'
import RouterLinkDynamic from '@/views/RouterTestView/RouterTestView02'

export default [
  {
    path: '/routerTest/link_query',
    component: RouterLinkQuery
  },
  {
    path: '/routerTest/link_dynamic',
    component: RouterLinkDynamic
  }
]
