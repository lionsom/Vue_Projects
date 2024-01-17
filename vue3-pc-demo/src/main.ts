import { createApp } from 'vue'
import App from './App.vue'

// 通用css
import '@/styles/index.scss'

// 引入三方库
import { createPinia } from 'pinia'
import router from './router'
import initHighlightJS from '@/plugins/highlight-init' // 减少main.ts体积，抽离出去

const app = createApp(App)

// 三方库初始化
app.use(createPinia())
app.use(router)
initHighlightJS(app)

// 挂载
app.mount('#app')
