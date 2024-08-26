// router注册拆分模块
// 此模块放路由测试页面路由

import RouterUsageHomePage from '@/views/usage-pages/router-usage-page'
//
import RouterLinkQuery from '@/views/usage-pages/router-usage-page/test-pages/link_query.vue'
import RouterLinkDynamic from '@/views/usage-pages/router-usage-page/test-pages/link_dynamic.vue'
//
import RouterPathQuery from '@/views/usage-pages/router-usage-page/test-pages/path_query.vue'
import RouterPathDynamic from '@/views/usage-pages/router-usage-page/test-pages/path_dynamic.vue'
//
import RouterNameQuery from '@/views/usage-pages/router-usage-page/test-pages/name_query.vue'
import RouterNameDynamic from '@/views/usage-pages/router-usage-page/test-pages/name_dynamic.vue'

export default [
  {
    path: '/how-to-use-router',
    component: RouterUsageHomePage,
  },
  // 声明式导航 - <router-link></router-link> - query传参
  {
    name: '123AAA',
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
