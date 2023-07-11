<template>
  <header>
    <img src="./images/header_logo.png" alt="" />


    <a href="">AAA</a>

    <!-- 
      声明式导航：务必要有to属性
     -->
    <router-link class="" to="/register">注册</router-link>


    <!-- 
      编程式导航
     -->
    <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
      搜索
    </button>

  </header>
</template>

<script>

export default {
  name: "",
  methods: {
    // 搜索按钮的回调函数，需要向search路由进行跳转
    goSearch() {
      this.$router.push('/search')
    }
  },
};

</script>

<style></style>