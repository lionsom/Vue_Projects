const MyPlugin01 = {}

MyPlugin01.install = function (Vue, options) {
  console.log('MyPlugins01 - 注册成功')

  // 1.全局方法
  Vue.MyGlobalMethod = function () {
    console.log('MyPlugins01 - 全局方法')
  }

  // 2.全局指令
  Vue.directive('my-plugin01-directive', {
    bind() {
      console.log('MyPlugins01 - 指令绑定成功')
    }
  })

  // 3.全局混入
  Vue.mixin({
    created() {
      // console.log('MyPlugins01 - 全局混入 - created')
    }
  })

  // 4.实例方法
  Vue.prototype.$myPluginMethod = function (logStr) {
    console.log('MyPlugins01 - 实例方法 - 外部参数：' + logStr)
  }
}

export default MyPlugin01
