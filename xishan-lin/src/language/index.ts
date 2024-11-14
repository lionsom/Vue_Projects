// 初始化i18n
import { createI18n } from 'vue-i18n'
import zh from './locales/zh'
import en from './locales/en'

// 引入的不同语言文件
const messages = {
  'zh': zh,
  'en': en,
}

// 
const myI18n = createI18n({
  legacy: false, // 使用 Composition API 模式，则需要将其设置为false
  globalInjection: true, // 全局注入，全局生效$t，默认true
  locale: 'zh', // 设置默认语言
  fallbackLocale: 'zh', // 设置后备语言
  messages: messages, // 设置语言包
})

export default myI18n;
