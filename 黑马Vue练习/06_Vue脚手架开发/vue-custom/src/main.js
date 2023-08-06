import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LxButton from './components/Global/LxButton.vue'

Vue.config.productionTip = false

// 组件 全局注册
Vue.component('LxButton', LxButton)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
