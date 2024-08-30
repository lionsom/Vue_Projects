<template>
  <div id="app">
    <my-base-nav-bar title="vue2 黑马-记事本" :showLeftArrow="true" :isAutoBack="true" />

    <TodoHeader @addd="add"></TodoHeader>

    <todo-main :currentList="list" @delOne="del">22</todo-main>

    <todo-footer :MyCurrnetListNumber="list.length" @clearAll="clear"></todo-footer>

  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {

  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data() {
    return {
      list: [],
      storeKey: 'myLocalList'
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  watch: {
    list: {
      deep: true, // 深度监听
      handler(newValue) {
        console.log(newValue)
        localStorage.setItem(this.storeKey, JSON.stringify(newValue))
      }
    }
  },
  methods: {
    getList() {
      const localData = localStorage.getItem(this.storeKey)
      console.log(localData)
      this.list = JSON.parse(localData)
    },
    add(newCont) {
      console.log(newCont)
      this.list.unshift({
        id: +new Date(),
        name: newCont
      })
    },
    del(id) {
      console.log(id)
      this.list = this.list.filter((item) => item.id !== id)
    },
    clear() {
      this.list = []
    }
  }

}
</script>

<style lang="scss" scoped>
#app {
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
