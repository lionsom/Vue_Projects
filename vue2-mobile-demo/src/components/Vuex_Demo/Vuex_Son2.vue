<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label></label>
    <br />
    <button @click="sub(1)">值 - 1</button>
    <button @click="sub(5)">值 - 5</button>
    <button @click="sub(10)">值 - 10</button>
  </div>
</template>

<script>
export default {
  name: 'Son2Com',
  methods: {
    sub (num) {
      this.$store.commit('subMany', {
        numbber: num
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 3px solid #ccc;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
