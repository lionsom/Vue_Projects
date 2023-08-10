<template>
  <div>
    <div id="sss">我是son，父亲传递过来的值是：{{ dataFromFa }}</div>
    <div id="sss">我是son，父亲传递过来的值是2：{{ dataFromFa2.name }} , {{ dataFromFa2.age }} 岁</div>

    <input type="text" v-model="mssg">
  </div>
</template>

<script>
export default {
  name: 'rename-son',
  props: ['dataFromFa', 'dataFromFa2'],
  data () {
    return {
      mssg: ''
    }
  },
  watch: {
    mssg (newValue) {
      console.log('变化了', newValue)
      // 向父亲传值
      this.$emit('dataFromSon', newValue)
    }
  }
}
</script>

<style>

</style>
