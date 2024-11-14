import '@/assets/styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 国际化
import myI18n from './language'

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
app.use(myI18n)

app.mount('#app')
