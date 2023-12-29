<template>
  <div>
    我是User

    <div @click="goLogin()">前往登录</div>

  </div>
</template>

<script>
export default {
  name: 'LayoutUserPage',
  methods: {
    goLogin () {
      this.$router.push('/shopping/login')
    }
  }
}
</script>
