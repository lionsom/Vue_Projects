<template>
  <div>
    <!-- 导航头 -->
    <my-base-nav-bar :title="mytitle" :left="true" @click-left="onClickLeft" @click-right="onClickRight" />

  </div>
</template>

<script>

export default {
  name: 'FirstView',
  created() {

  },
  data() {
    return {
      mytitle: '我是老大'
    }
  },
  methods: {

  }


}
</script>

<style lang="scss" scoped></style>