
// 常量Key
// eslint-disable-next-line camelcase
const Shopping_Info_Key = 'lx_shopping_info'

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
