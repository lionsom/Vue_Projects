<template>
  <div>
    <my-base-nav-bar title="404" :showLeftArrow="true" :isAutoBack="true" />

    <div class="main-page">
      <h1>404 Not Found</h1>
      <van-button class="main-btn" type="primary" size="large" @click="onClickBackHome">返回首页</van-button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    onClickBackHome() {
      this.$router.push({ path: '/' })
    }
  },
}
</script>

<style scoped lang="scss">
.main-page {
  margin: 100px auto;

  text-align: center;
  font-weight: 800;

  .main-btn {
    margin-top: 50px;
    width: 200px;
    height: 50px;
    border-radius: 10px;
  }
}
</style>
