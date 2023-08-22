<template>
  <div class="main-page">

    <h1>根组件 - Vuex仓库数据 - {{ $store.state.title }}</h1>
    <h1>根组件 - Vuex仓库数据 - {{ count }}</h1>
    <input :value="count" @input="handleInput" type="text">
    <br/>
    <input :value="count" @input="handleInput11" type="text">
    <br/>

    <button @click="changeCount11(11)">= 11</button>

    <button @click="setAsyncCount(666)">异步 2秒后 666</button>

    <div>{{ $store.getters.filterLList }}</div>

    <div>{{ filterLList }}</div>

    <Son1 id="id_son1"></Son1>
    <hr>
    <Son2 id="id_son2">></Son2>

  </div>
</template>

<script>

import Son1 from '@/components/Vuex_Demo/Vuex_Son1.vue'
import Son2 from '@/components/Vuex_Demo/Vuex_Son2.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'VuexDemoPage',
  components: {
    Son1,
    Son2
  },
  computed: {
    // 映射给计算属性
    ...mapState(['title', 'count']),
    //
    ...mapGetters(['filterLList'])
  },
  created () {
    console.log(this.$store)
    console.log(this.$store.state.count)
  },
  methods: {
    // 映射方法到methods
    ...mapMutations(['changeCount11']),
    ...mapActions(['setAsyncCount']),
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

<style scoped lang="scss">

.main-page {
  width: 90%;
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

#id_son1 {
  background: lightcyan;
  margin: 30px auto;
}

#id_son2 {
  background: lightblue;
  margin: 20px auto;
}

</style>
