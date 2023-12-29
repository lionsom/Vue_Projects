import Vue from 'vue'
import VueI18n from 'vue-i18n'
//
import { getCurrentLocaleKey } from '@/utils/storage'
//
import myZh from './i18n-detail/zh'
import myEn from './i18n-detail/en'
import myJa from './i18n-detail/ja'

// i18n注册
Vue.use(VueI18n)

// 准备翻译的语言环境信息
const messages = {
  zh: myZh,
  en: myEn,
  ja: myJa
}

const myI18n = new VueI18n({
  locale: getCurrentLocaleKey(),
  messages
})

export default myI18n
