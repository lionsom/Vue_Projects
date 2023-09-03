import axios from 'axios'

const state = {
  list: [] // 购物车数据源
}

const mutations = {
  updateList (state, newList) {
    state.list = newList
  },
  updateCount (state, newData) {
    console.log(newData)
    // 方法一：find
    const goods = state.list.find(item => item.id === newData.id)
    goods.count = newData.newCount

    // 方法二：遍历
    state.list.forEach(element => {
      if (element.id === newData.id) {
        element.count = newData.newCount
      }
    })
  }
}

const actions = {
  // 异步请求数据
  async getList (context) {
    const res = await axios.get('http://localhost:3000/cart')
    console.log(res.data)
    context.commit('updateList', res.data)
  },
  // 发送请求更新服务器上商品数量
  async updateCountAsync (context, obj) {
    const res = await axios.patch(`http://localhost:3000/cart/${obj.id}`, { count: obj.newCount })
    console.log(obj)
    console.log(res)
    // 成功后。将数据同步到本地Vuex
    if (res.status === 200) {
      context.commit('updateCount', {
        id: obj.id,
        newCount: obj.newCount
      })
    } else {
      alert('更新服务器失败')
    }
  }
}

const getters = {
  // 获取所有已选商品的数量
  total (state) {
    return state.list.reduce((sum, item) => sum + item.count, 0)
  },
  // 计算购物车总价
  totalPrice (state) {
    return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
  }
}

export default {
  namespaced: true, // 子模块的映射，需要开启命名空间
  state,
  mutations,
  actions,
  getters
}
