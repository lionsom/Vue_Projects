// router注册拆分模块
// 此模块放路由测试页面路由

import RouterUsageHomePage from '@/views/usage-pages/router-usage-page'
//
import RouterLinkQuery from '@/views/usage-pages/router-usage-page/test-pages/link_query.vue'
import RouterLinkDynamic from '@/views/usage-pages/router-usage-page/test-pages/link_dynamic'
//
import RouterPathQuery from '@/views/usage-pages/router-usage-page/test-pages/path_query'
import RouterPathDynamic from '@/views/usage-pages/router-usage-page/test-pages/path_dynamic'
//
import RouterNameQuery from '@/views/usage-pages/router-usage-page/test-pages/name_query'
import RouterNameDynamic from '@/views/usage-pages/router-usage-page/test-pages/name_dynamic'

export default [
  {
    path: '/how-to-use-router',
    component: RouterUsageHomePage,
    // redirect: '/collect',   // 重定向也可以写在这
    // 通过 children 配置项，可以配置嵌套子路由
    // 1. 在children配置项中，配规则
    // 2. 准备二级路由出口
    children: [
      // 声明式导航 - <router-link></router-link> - query传参
      {
        path: '/link_query',
        component: RouterLinkQuery
      },
      // 声明式导航 - <router-link></router-link> - 动态传参
      {
        path: '/link_dynamic/:keyWords?', // ?可有可无
        component: RouterLinkDynamic
      },
      // 编程式导航 - path - query
      {
        path: '/path_query',
        component: RouterPathQuery
      },
      // 编程式导航 - path - dynamic
      {
        path: '/path_dynamic/:keykeyWords?',
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
  }
]
