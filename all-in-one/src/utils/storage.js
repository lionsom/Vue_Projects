
// 常量Key
// eslint-disable-next-line camelcase
const Shopping_Info_Key = 'lx_shopping_info'
// eslint-disable-next-line camelcase
const Shopping_Search_History_Key = 'lx_shopping_search_history'
// 当前语言
// eslint-disable-next-line camelcase
const Current_I18n_Locale_Key = 'lx_current_i18n_locale'

// ---------------------------------------

// 获取个人信息
export const getInfo = () => {
  const defaultObj = { userId: '', token: '' }
  const res = localStorage.getItem(Shopping_Info_Key)
  // 字符串 => 对象
  return res ? JSON.parse(res) : defaultObj
}

export const setInfo = (obj) => {
  // 对象 => 字符串
  localStorage.setItem(Shopping_Info_Key, JSON.stringify(obj))
}

export const remvoeInfo = () => {
  localStorage.remvoeInfo(Shopping_Info_Key)
}

// ---------------------------------------

// 获取搜索历史
export const getSearchHistory = () => {
  const defaultObj = []
  const res = localStorage.getItem(Shopping_Search_History_Key)
  // 字符串 => 对象
  return res ? JSON.parse(res) : defaultObj
}

// 设置搜索历史
export const setSearchHistory = (obj) => {
  localStorage.setItem(Shopping_Search_History_Key, JSON.stringify(obj))
}

// ---------------------------------------

export const getCurrentLocaleKey = () => {
  const res = localStorage.getItem(Current_I18n_Locale_Key)
  return res === null ? 'zh' : res
}

export const setCurrentLocaleKey = (obj) => {
  localStorage.setItem(Current_I18n_Locale_Key, obj)
}
