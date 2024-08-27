<template>
  <div class="main">
    <!-- 导航啦 -->
    <my-base-nav-bar title="css ::before ::after" :showLeftArrow="true" :isAutoBack="true" />

    <p class="one">伪元素 ::before</p>
    <p class="two">伪元素 ::before</p>
    <p class="three">伪元素 ::before</p>

    <span class="click-container" @click="close">点击区域扩大</span>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      console.log('点击了...')
    }
  }
}
</script>

<style src="./index.css" scoped></style>
