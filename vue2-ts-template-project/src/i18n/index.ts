import Vue from 'vue'
import VueI18n from 'vue-i18n'
//
// import { getCurrentLocaleKey } from '@/utils/storage'
//
import myZh from './lang/zh'
import myEn from './lang/en'
import myJa from './lang/ja'

// i18n注册
Vue.use(VueI18n)

// 准备翻译的语言环境信息
const messages = {
  zh: myZh,
  en: myEn,
  ja: myJa
}

// ---------------------------------------

// 当前语言
const LocaleKey_CurrentLang = 'lx_current_i18n_locale'

export const getCurrentLocaleKey = () => {
  const res = localStorage.getItem(LocaleKey_CurrentLang)
  return res === null ? 'zh' : res
}

export const setCurrentLocaleKey = (obj: string) => {
  localStorage.setItem(LocaleKey_CurrentLang, obj)
}

// ---------------------------------------

const myI18n = new VueI18n({
  locale: getCurrentLocaleKey(),
  messages
})

export default myI18n
