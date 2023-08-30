const state = {
  Setting: {
    theme: 'dark',
    desc: '暗黑主题，还不错哦！'
  }
}

const mutations = {
  setTheme (state, newTheme) {
    state.Setting.theme = newTheme
  }
}

const actions = {

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
