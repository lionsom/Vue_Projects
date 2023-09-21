// 自定义指令
import CustomDirective from '@/views/CustomDirectivePage/custom-directive-page'
// 插槽
import SlotDemo from '@/views/slot-demo'
// v-model原理
import VModelDemo from '@/views/v-model-theory/v-model-demo'
// mixin
import MixinDemo from '@/views/mixin-demo'

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
  }
]
