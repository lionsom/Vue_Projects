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
  }
]
