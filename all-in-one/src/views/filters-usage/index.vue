<template>
  <div class="main">
    <!-- 导航啦 -->
    <van-nav-bar
      safe-area-inset-top
      title="iconfont的使用"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>

    <input type="text" v-model="inputValue" />
    <!-- 转大小 + 分隔符 -->
    <div class="show">{{ inputValue | toBigger | sep }}</div>
  </div>
</template>

<script>
export default {
  name: 'filters-usage-demo',
  data() {
    return {
      inputValue: '123'
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  filters: {
    // 大写
    toBigger(value) {
      return value.toUpperCase() ?? value
    },
    // 分隔符
    sep(value) {
      return value.split('').join('-')
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  background-color: antiquewhite;

  width: 100vw;
  height: 100vh;
}
</style>
