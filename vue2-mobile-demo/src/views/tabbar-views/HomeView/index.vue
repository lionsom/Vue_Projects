<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000000">
      <van-tabbar-item icon="home-o" to="/home/first-view">Vue2</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/home/second-view">Vue3</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/home/third-view">其他</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/home/fourth-view">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
  name: 'MainView',
  data() {
    return {
      active: 0,
    };
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped></style>