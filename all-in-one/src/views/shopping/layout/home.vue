<template>
    <div>

      <div @click="goLogin()">前往登录</div>

    </div>
  </template>

<script>
export default {
  name: 'LayoutHomePage',
  methods: {
    goLogin () {
      this.$router.push('/shopping/login')
    }
  }
}

</script>

<style>

</style>
