import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 严格模式。禁止在组件中修改数据，并提示报错。
  strict: true,
  //
  state: {
    title: '我是标题',
    count: 100
  },
  getters: {
  },
  // 方法
  mutations: {
    addCount (state) {
      state.count++
    },
    addNum (state, n) {
      state.count = state.count + n
    },
    addMany (state, obj) {
      console.log(obj)
      console.log(obj.count)
      console.log(obj.msg)
      console.log(obj.arr)
      state.count += obj.count
    },
    subMany (state, obj) {
      console.log(obj)
      console.log(obj.numbber)
      state.count -= obj.numbber
    },
    changeCount (state, newCount) {
      state.count = newCount
    },
    changeCount11 (state, newCount) {
      state.count = newCount
    }
  },
  // 处理异步操作,
  // 注意：不能直接操作state，还是需要commit mutation操作state
  actions: {
  },
  modules: {
  }
})

export default store
