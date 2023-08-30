// router注册拆分模块
// 此模块放路由测试页面路由

import RouterLinkQuery from '@/views/RouterTestView/RouterTestView_link_query'
import RouterLinkDynamic from '@/views/RouterTestView/RouterTestView_link_dynamic'
//
import RouterPathQuery from '@/views/RouterTestView/RouterTestView_path_query'
import RouterPathDynamic from '@/views/RouterTestView/RouterTestView_path_dynamic'
//
import RouterNameQuery from '@/views/RouterTestView/RouterTestView_name_query'
import RouterNameDynamic from '@/views/RouterTestView/RouterTestView_name_dynamic'

export default [
  // 声明式导航 - <router-link></router-link> - query传参
  {
    path: '/router_test_link_query',
    component: RouterLinkQuery
  },
  // 声明式导航 - <router-link></router-link> - 动态传参
  {
    path: '/router_test_link_dynamic/:keyWords?', // ?可有可无
    component: RouterLinkDynamic
  },
  // 编程式导航 - path - query
  {
    path: '/router_test_path_query',
    component: RouterPathQuery
  },
  // 编程式导航 - path - dynamic
  {
    path: '/router_test_path_dynamic/:keykeyWords?',
    component: RouterPathDynamic
  },
  // 编程式导航 - name，适合长路径
  {
    name: 'RouterTest_Name_NO_Param', // 路由名
    path: '/router_test/name/no_param', // 长路径
    component: RouterNameQuery
  },
  {
    name: 'RouterTest_Name_Query', // 路由名
    path: '/router_test/name/query', // 长路径
    component: RouterNameQuery
  },
  {
    name: 'RouterTest_Name_Dynamic', // 路由名
    path: '/router_test/name/dynamic/:kkeyWWord?', // 长路径
    component: RouterNameDynamic
  }
]
