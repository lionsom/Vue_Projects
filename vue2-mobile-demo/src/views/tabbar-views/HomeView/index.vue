<template>
  <div>
    <router-view></router-view>

    <!-- tabbar遮住内容 -->
    <div style="height: 50px;"></div>

    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000000">
      <van-tabbar-item icon="home-o" to="/home/first-view">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/home/second-view">知识库</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/home/third-view">其他</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/home/fourth-view">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>

const path = this.$route;

export default {
  name: 'MainView',
  data() {
    return {
      active: 0,
    };
  },
  created() {

  },
  watch(path) {
    console.log(this.$route.path);
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped></style>