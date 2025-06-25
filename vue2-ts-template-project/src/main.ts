import Vue from 'vue'
import App from '@/views/layouts/App.vue'
import router from './router'
import store from './store'
// 通用样式
import '@/assets/css/common.scss'
// 导入 mock 文件
import '@/server/mock/mock'
//
import '@/plugins/element-ui'
import '@/utils/vue-config-setting'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
