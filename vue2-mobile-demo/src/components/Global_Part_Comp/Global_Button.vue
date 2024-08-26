<template>
  <button class="hm-button" @click="onClick()">通用按钮</button>
</template>

<script>
import { Toast } from 'vant';

export default {
  methods: {
    onClick() {
      Toast('点击了按钮')
    }
  }
}
</script>

<style>
.hm-button {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  background-color: #3bae56;
  border-radius: 5px;
  color: white;
  border: none;
  vertical-align: middle;
  cursor: pointer;
}
</style>
