import Vue from 'vue'
import Vuex from 'vuex'
// modules
import user from './modules/user'
import setting from './modules/setting'
import cart from './modules/cart'
// Shopping Modules
import shoppingUser from './shopping/shopping-user'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 注册模块
  modules: {
    user,
    setting,
    cart,
    shoppingUser
  },

  // 严格模式。禁止在组件中修改数据，并提示报错。
  strict: true,
  //
  state: {
    title: '我是标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  getters: {
    // getters函数的第一个参数是 state
    // 必须要有返回值
    filterLList (state) {
      return state.list.filter(item => item > 5)
    }
  },
  // 方法，mutations必须是同步的
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
  // 处理异步操作
  // 注意：不能直接操作state，还是需要commit mutation操作state
  actions: {
    setAsyncCount (context, num) {
      setTimeout(() => {
        // 错误示范，不能直接操作state
        // this.state.count = num

        // 正确示范，commit操作state
        context.commit('changeCount', num)
      }, 2000)
    }
  }
})

export default store
