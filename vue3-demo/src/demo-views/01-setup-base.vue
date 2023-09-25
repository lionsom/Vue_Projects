<script>
// setup
// 1. 执行时机，比beforeCreate还要早
// 2. setup函数中，获取不到this (this是undefined)
// 3. 数据 和 函数，需要在 setup 最后 return，才能模板中应用
//    问题：每次都要return，好麻烦？
// 4. 通过 setup 语法糖简化代码
export default {
  setup () {
    // 此时this=undefine，因为太早了
    console.log('setup函数', this)
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
  name: 'setup-base-page',
  beforeCreate () {
    console.log('beforeCreate函数')
  }
}
</script>

