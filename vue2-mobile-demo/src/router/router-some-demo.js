// 自定义指令
import CustomDirective from '@/views/CustomDirectivePage/custom-directive-page'
// 插槽
import SlotDemo from '@/views/slot-demo'
// v-model原理
import VModelDemo from '@/views/v-model-theory/v-model-demo'
// mixin
import MixinDemo from '@/views/mixin-demo'
// i18n
import I18nDemo from '@/views/i18n-view'
// iconfont
import IconfontUsage from '@/views/iconfont-usage/iconfont-usage'
// 常量
import ConstantUsage from '@/views/constant-uasge/index'
// CSS伪元素
import CSSBeforeAfter from '@/views/css-before-after'
// 本地缓存
import LocalStorageDemo from '@/views/local-storage-demo'
// 过滤器 filters
import FiltersDemo from '@/views/filters-usage'
// env 使用
import EnvDemo from '@/views/env-usage'
// js-usage
import JsUsage from '@/views/js-usage'

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
    path: '/i18n-demo',
    component: I18nDemo
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
  }
]
