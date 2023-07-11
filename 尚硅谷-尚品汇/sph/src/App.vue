<template>
  <div>
    <Header>我是Header非路由组件</Header>

    <!-- 路由组件的调用出口 -->
    <router-view></router-view>

    <Footer> 我是Footer非路由组件 </Footer>
  </div>
</template>


<script>
// 引入
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>