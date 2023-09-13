import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true, // 开启命名空间，与其他模块独立
  state () {
    return {
      // 个人信息，从storage缓存中取
      userInfo: getInfo()
    }
  },
  mutations: {
    // 所有mutations第一个参数，都是state
    setUserInfo (state, obj) {
      state.userInfo = obj
      // storage缓存
      setInfo(obj)
    }
  },
  actions: {

  },
  getters: {

  }
}
