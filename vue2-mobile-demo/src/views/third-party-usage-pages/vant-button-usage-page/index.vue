<template>
  <div class="mainPage">

    <my-base-nav-bar title="Vant Button" :showLeftArrow="true" :isAutoBack="true" />

    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>

export default {
  name: 'vant-ui-page',
}
</script>

<style lang="scss" scoped>
.mainPage {
  .success-button {
    margin: 10px auto;
    background-color: darkblue;
    width: 100px;
    height: 80px;
  }
}
</style>
