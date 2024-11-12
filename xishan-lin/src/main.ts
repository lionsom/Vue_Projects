import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/index.scss'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @element-plus/icons-vue
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// @element-plus/icons-vue - 注册icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
