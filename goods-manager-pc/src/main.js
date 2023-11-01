import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 通用css
import '@/assets/css/base.less'
// iconfont
import '@/assets/font/iconfont.css'
// plugins
import '@/plugins/element-ui'
import '@/plugins/moment'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
