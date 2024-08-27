// router注册拆分模块
// 此模块放路由测试页面路由

// 路由组件
import RouterUsageHomePage from '@/views/usage-pages/router-usage-page'
// 声明式导航 - 接收参数页面
import RouterLinkGetParams from '@/views/usage-pages/router-usage-page/test-pages/link_get_param.vue'
// 编程式导航 - 接收参数页面
import ProgramGetParam from '@/views/usage-pages/router-usage-page/test-pages/program_get_param.vue'

export default [
  {
    path: '/how-to-use-router',
    component: RouterUsageHomePage,
  },
  // 声明式导航 - <router-link></router-link>
  {
    name: 'JJJAAA',
    path: '/router_link_JJJAAA/:keyWords?', // ?可有可无
    component: RouterLinkGetParams
  },
  // 编程式导航
  {
    name: 'PPPAAA',
    path: '/router_program_PPPAAA/:keyWords?',
    component: ProgramGetParam
  }
]
