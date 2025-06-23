import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from './router/index'
import store from './store'
// 通用样式
import '@/assets/css/common.scss'
// 导入 mock 文件
import '@/server/mock/mock';
//
import '@/plugins/element-ui'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
