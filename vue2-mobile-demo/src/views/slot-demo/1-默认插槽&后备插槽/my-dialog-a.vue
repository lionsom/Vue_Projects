<template>
  <div class="dialog">

    <div class="dialog-header">
      <h3>友情提示</h3>
      <span class="close" @click="closeClick">✖️</span>
    </div>

    <div class="dialog-content">
      <!-- 1. 在需要定制的位置，使用slot占位 -->
      <slot>我是后备内容！</slot>
    </div>

    <div class="dialog-footer">
      <button @click="cancelClick">取消</button>
      <button @click="confirmClick">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialog-a',
  data () {
    return {

    }
  },
  methods: {
    closeClick () {
      console.log('子组件closeClick')
      this.$emit('close_click')
    },
    cancelClick () {
      console.log('子组件cancelClick')
      this.$emit('cancel_click')
    },
    confirmClick () {
      console.log('子组件confirmClick')
      this.$emit('confirm_click')
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.dialog {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  background-color: greenyellow;
  margin: 10px auto;
  border-radius: 5px;
}
.dialog-header {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.dialog-header .close {
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
}
.dialog-content {
  height: auto;
  font-size: 18px;
  padding: 15px 0;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
.dialog-footer button {
  width: 65px;
  height: 35px;
  background-color: rebeccapurple;
  border: 1px solid #e1e3e9;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  border-radius: 3px;
}
.dialog-footer button:last-child {
  background-color: #007acc;
  color: #fff;
}
</style>
