// 自定义指令
import CustomDirective from '@/views/usage-pages/custom-directive-page'
// 插槽
import SlotDemo from '@/views/usage-pages/slot-demo'
// v-model原理
import VModelDemo from '@/views/usage-pages/v-model-theory/v-model-demo'
// mixin
import MixinDemo from '@/views/usage-pages/mixin-demo'
// iconfont
import IconfontUsage from '@/views/usage-pages/iconfont-usage/iconfont-usage'
// 常量
import ConstantUsage from '@/views/usage-pages/constant-uasge/index'
// CSS伪元素
import CSSBeforeAfter from '@/views/usage-pages/css-before-after-usage-page'
// 本地缓存
import LocalStorageDemo from '@/views/usage-pages/local-storage-demo'
// 过滤器 filters
import FiltersDemo from '@/views/usage-pages/filters-usage'
// env 使用
import EnvDemo from '@/views/usage-pages/env-usage'
// js-usage
import JsUsage from '@/views/usage-pages/js-usage'
// 全局组件 - 局部组件
import GlobalPartPage from '@/views/usage-pages/global-part-comp-usage-page'
// Vue2.x官网demo
import Vue2xDemos from '@/views/usage-pages/vue2.x-official-demos';
// Vue2 4小时快速入门
import Vue24hoursDemos from '@/views/usage-pages/vue2-4hours-demos'

export default [
  {
    path: '/custom-directive',
    component: CustomDirective
  },
  {
    path: '/slot-demo',
    component: SlotDemo
  },
  {
    path: '/vmodel-demo',
    component: VModelDemo
  },
  {
    path: '/mixin-demo',
    component: MixinDemo
  },
  {
    path: '/iconfont-usage',
    component: IconfontUsage
  },
  {
    path: '/constant-usage',
    component: ConstantUsage
  },
  {
    path: '/css-before-after',
    component: CSSBeforeAfter
  },
  {
    path: '/local-storage-usage',
    component: LocalStorageDemo
  },
  {
    path: '/filters-demo',
    component: FiltersDemo
  },
  {
    path: '/env-demo',
    component: EnvDemo
  },
  {
    path: '/js-usage',
    component: JsUsage
  },
  {
    path: '/global-part-comp',
    component: GlobalPartPage
  },
  {
    path: '/vue2.x-official-demo',
    component: Vue2xDemos
  },
  {
    path: '/vue2-4hours-demo',
    component: Vue24hoursDemos
  }
]
