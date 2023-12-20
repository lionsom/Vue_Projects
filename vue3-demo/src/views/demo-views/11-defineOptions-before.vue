<script>
export default {
  setup () {
    // 数据
    const message = 'hello Vue3'
    // 函数
    const logMessage = () => {
      console.log(message)
    }
    return {
      message,
      logMessage
    }
  },

  // 与setup同一级别
  name: 'setup-base-page',

  beforeCreate () {
    console.log('beforeCreate函数')
  }
}
</script>

