<template>
  <div>
    我是登录路由组件

    <input type="text" v-model="searchKey" />

    <button
      class="sui-btn btn-xlarge btn-danger"
      type="button"
      @click="goSearch1"
    >
      搜索
    </button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      searchKey: "",
    };
  },
  methods: {
    // 搜索按钮的回调函数，需要向search路由进行跳转
    goSearch1() {
      // 路由传参
      // 方式一：字符串
      //   this.$router.push(
      //     "/search" + "/" + this.searchKey + "?kk=" + this.searchKey.toUpperCase()
      //   );

      // 方式二：模板字符串
    //   this.$router.push(
    //     `/search/${this.searchKey}?kk=${this.searchKey.toUpperCase()}`
    //   );

      // 方式三：对象 (常用)
      this.$router.push({
        name: "name_search",
        params: { key: this.searchKey },
        query: { kk: this.searchKey.toUpperCase() },
      });
    },
  },
};
</script>

<style>
</style>