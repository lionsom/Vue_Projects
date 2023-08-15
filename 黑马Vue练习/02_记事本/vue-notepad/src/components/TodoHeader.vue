<template>
  <div>

    <h1>记事本</h1>

    <input type="text" placeholder="请输入待办" @keyup.enter="handlerAddddd" v-model="todoName">

    <button @click="handlerAddddd">添加任务</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      todoName: ''
    }
  },
  methods: {
    handlerAddddd () {
      this.$emit('addd', this.todoName)
      this.todoName = ''
    }
  }
}
</script>

<style>

</style>
