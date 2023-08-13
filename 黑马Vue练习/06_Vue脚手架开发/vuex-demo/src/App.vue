<template>
  <div id="app">

    <h1>根组件 - Vuex仓库数据 - {{ $store.state.title }}</h1>
    <h1>根组件 - Vuex仓库数据 - {{ count }}</h1>
    <input :value="count" @input="handleInput" type="text">
    <br/>
    <input :value="count" @input="handleInput11" type="text">
    <br/>

    <button @click="changeCount11(11)">+11</button>
    <Son1></Son1>
    <hr>
    <Son2></Son2>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Son1 from './components/demo01/Son1.vue'
import Son2 from './components/demo01/Son2.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    // 映射给计算属性
    ...mapState(['title', 'count'])
  },
  components: {
    Son1,
    Son2
  },
  created () {
    console.log(this.$store)
    console.log(this.$store.state.count)
  },
  methods: {
    // 映射方法到methods
    ...mapMutations(['changeCount11']),
    // 输入框事件，形参e
    handleInput (e) {
      console.log(e)
      console.log(e.target)
      console.log(+e.target.value)
      const cc = +e.target.value
      this.$store.commit('changeCount', cc)
    },
    handleInput11 (e) {
      this.changeCount11(+e.target.value)
    }
  }
}

</script>

<style lang="scss">
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
