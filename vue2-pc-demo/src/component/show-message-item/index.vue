<template>
  <div class="main">
    <div class="header">标题：{{ name }}</div>

    <div class="center-content">{{ total }}</div>

    <div class="sepline"></div>

    <div class="footer">今日 {{ today }} 额</div>
  </div>
</template>

<script>
export default {
  name: 'show-message-cell-view',
  props: ['name', 'total', 'today']
}
</script>

<style lang="less" scoped>
.main {
  // 背景渐变
  background: linear-gradient(pink, darkcyan);
  width: 300px;
  height: 120px;

  // 圆角
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid green;

  .header {
    width: 100%;
    height: 30%;
    margin-left: 10px;
    background-color: transparent;
    line-height: 120 * 0.3px;
  }

  .center-content {
    width: 100%;
    height: 40%;
    margin-left: 30px;
    background-color: transparent;
    line-height: 120 * 0.4px;
    //
    font-size: 30px;
  }

  .sepline {
    width: 100%;
    height: 1px;
    background-color: #fff;
  }
  .footer {
    width: 100%;
    height: 30%;
    margin-left: 30px;
    background-color: transparent;
    line-height: 120 * 0.3px;

    font-size: 15px;
    color: #fff;
  }
}
</style>
