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

// import { loadEnv } from 'vite';


const app = createApp(App)

// @element-plus/icons-vue - 注册icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


console.log('import.meta.env =', import.meta.env);
console.log('import.meta.env.BASE_URL =', import.meta.env.BASE_URL);
console.log('VITE_BASE_API_URL =', import.meta.env.VITE_BASE_API_URL);
console.log('process.env.NODE_ENV =', import.meta.env.MODE);


app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(myI18n)

app.mount('#app')
