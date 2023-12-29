import lxAxios from '@/plugins/axios-request'
import base from '@/api/base'

// 公共请求统一管理
const api = {
  // 登录
  login() {
    return lxAxios.get(base.login)
  },

  totalInfo() {
    return lxAxios.get(base.totalInfo)
  }
}

export default api
