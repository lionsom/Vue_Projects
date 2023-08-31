import axios from 'axios'

const state = {
  list: [] // 购物车数据源
}

const mutations = {
  updateList (state, newList) {
    state.list = newList
  }
}

const actions = {
  // 异步请求数据
  async getList (context) {
    const res = await axios.get('http://localhost:3000/cart')
    console.log(res.data)
    context.commit('updateList', res.data)
  }
}

const getters = {

}

export default {
  namespaced: true, // 子模块的映射，需要开启命名空间
  state,
  mutations,
  actions,
  getters
}
