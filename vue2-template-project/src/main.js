import Vue from 'vue'
import App from './App.vue'
import router from './rouer'
// 通用样式
import '@/assets/css/common.scss'
// 导入 mock 文件
import './my-http/mock/mock';
// 
import '@/utils/import-element-ui.js'


Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App),
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