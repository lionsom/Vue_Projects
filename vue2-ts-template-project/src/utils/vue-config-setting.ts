import Vue from 'vue'

/**
 * 取消 Vue 所有的日志与警告。
 */
Vue.config.silent = true

/**
 * 设置为 false 以阻止 vue 在启动时生成生产提示。
 */
Vue.config.productionTip = false

/**
 * 指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。
 */
Vue.config.errorHandler = function (err: any, vm: any, info: any) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.log('================>> errorHandler ======>>')
  console.log(err, vm, info)
  console.log('<<================')
}

/**
 * 为 Vue 的运行时警告赋予一个自定义处理函数。注意这只会在开发者环境下生效，在生产环境下它会被忽略。
 */
Vue.config.warnHandler = function (msg: any, vm: any, trace: any) {
  // `trace` 是组件的继承关系追踪
  console.log('================>> warnHandler ======>>')
  console.log(msg, vm, trace)
  console.log('<<================')
}

Vue.config.keyCodes = {
  // 86实际上是v，g实际上是51
  g: 86,
  f1: 112,
  // camelCase 不可用
  // 取而代之的是 kebab-case 且用双引号括起来
  'media-play-pause': 179,
  up: [38, 87]
}
