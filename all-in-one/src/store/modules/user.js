const state = {
  UserInfo: {
    name: 'linx',
    age: 33,
    favr: 'food'
  }
}

const mutations = {
  setUser (state, newUserInfo) {
    state.UserInfo = newUserInfo
  }
}

const actions = {

}

const getters = {
  // 分模块后，state指代子模块的state
  UpperCaseName (state) {
    return state.UserInfo.name.toUpperCase()
  }
}

export default {
  namespaced: true, // 子模块的映射，需要开启命名空间
  state,
  mutations,
  actions,
  getters
}
