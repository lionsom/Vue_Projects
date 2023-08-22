<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label></label>
    <br>
    <button @click="add">值 + 1</button>
    <button @click="addFive">值 + 5</button>
    <button @click="addObj">值 + 11</button>

    <button @click="asyncCount">2秒后，变更数字</button>

  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    add () {
      this.$store.commit('addCount')
    },
    // mutation传参
    addFive () {
      this.$store.commit('addNum', 5)
    },
    // mutation传递多个参数
    addObj () {
      this.$store.commit('addMany', {
        count: 11,
        msg: '哈哈',
        arr: ['11', '22', '33']
      })
    },
    asyncCount () {
      this.$store.dispatch('setAsyncCount', 888)
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  border: 3px solid #ccc;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
