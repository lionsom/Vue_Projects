<template>
  <div class="main-div">
    <h1>
      Vue2 官方链接：
      <a href="https://v2.cn.vuejs.org/v2/api/#keyCodes" target="_blank">https://v2.cn.vuejs.org/v2/api/#keyCodes</a>
    </h1>

    <input type="text" @keyup.g="handleG" placeholder="按下 V 键" />
    <input type="text" @keyup.up="handleUp" placeholder="按下向上键" />
    <p>按键信息: {{ keyInfo }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      keyInfo: ''
    }
  },
  watch: {
    keyInfo(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.keyInfo = ''
        }, 3000)
      }
    }
  },
  methods: {
    handleG() {
      this.keyInfo = '点击了v，实际上是g'
    },
    handleUp() {
      this.keyInfo = '你按下了向上键'
    }
  }
})
</script>

<style lang="scss" scoped>
.main-div {
  input {
    margin: 20px auto;
    display: block;
  }
}
</style>
