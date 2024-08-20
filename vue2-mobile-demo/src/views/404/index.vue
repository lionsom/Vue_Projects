<template>
  <div>
    <van-nav-bar title="404未找到" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />

    <div class="main-page">
      <h1>404 Not Found</h1>
    </div>
  </div>

</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
}
</script>

<style scoped lang="scss">
.main-page {
  margin: 100px auto;

  text-align: center;
  font-weight: 800;
}
</style>
