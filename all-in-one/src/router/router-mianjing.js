// router注册拆分模块
// 此模块放路由测试页面路由

// View
import MJMainViewAAAAA from '@/views/MianJing/MJ_MainView'
import MJDetailAAA from '@/views/MianJing/MJ_Detail'
// Compnent
import MJArticleBBB from '@/views/MianJing/MJ_Article'
import MJCollectBBB from '@/views/MianJing/MJ_Collect'
import MJLikeBBB from '@/views/MianJing/MJ_Like'
import MJUserBBB from '@/views/MianJing/MJ_User'

export default [
  {
    path: '/',
    component: MJMainViewAAAAA,
    // redirect: '/collect',   // 重定向也可以写在这
    // 通过 children 配置项，可以配置嵌套子路由
    // 1. 在children配置项中，配规则
    // 2. 准备二级路由出口
    children: [
      {
        path: '/article',
        component: MJArticleBBB
      },
      {
        path: '/collect',
        component: MJCollectBBB
      },
      {
        path: '/like',
        component: MJLikeBBB
      },
      {
        path: '/user',
        component: MJUserBBB
      }
    ]
  },
  {
    path: '/detail/:iddddd',
    component: MJDetailAAA
  }
]
