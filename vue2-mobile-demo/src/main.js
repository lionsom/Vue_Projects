// 文件核心作用：导入App.vue，基于App.vue创建结构渲染index.html
// 1. 导入 Vue 核心包
import Vue from 'vue'
// 2. 导入 App.vue 根组件
import App from './App.vue'
import router from './router'
import store from './store'
// Vant组件按需引入
import '@/utils/vant-ui'
// i18n
import myI18n from '@/utils/i18n-usage'
// 通用样式
import '@/assets/css/common.scss'
import '@/assets/iconfont/iconfont.css'
// 自制的npm包
import lxUI from 'lx-ui-vue2'
// 全局组件
import GlobalButton from '@/components/Global_Part_Comp/Global_Button'
import BaseNavBar from '@/components/BaseNavbar'
// 自定义插件
import MyPlugin01 from './plugins/js-plugins-usage'

// 提示：当前处于什么环境 (生产环境 / 开发环境)
Vue.config.productionTip = false

// 进行全局注册 → 在所有的组件范围内都能直接使用
// Vue.component(组件名，组件对象)
Vue.component('MyGlobalButton', GlobalButton);
Vue.component('MyBaseNavBar', BaseNavBar);

// 注册自定义插件
Vue.use(lxUI)
Vue.use(MyPlugin01)

// 自定义插件 - 全局方法
Vue.MyGlobalMethod()

/* mixin全局注册
Vue.mixin({
  created () {
    console.log('全局mixin created')
  }
})
*/

// 3. Vue实例化，提供render方法 → 基于App.vue创建结构渲染index.html
new Vue({
  router,
  store,
  i18n: myI18n,
  render: h => h(App)
}).$mount('#app')

/* 等价写法
new Vue({
  el: '#app', 作用：和$mount('选择器')作用一致，用于指定Vue所管理容器
  // render: h => h(App),
  render: (createElement) => {
    // 基于App创建元素结构
    return createElement(App)
  }
})
*/
