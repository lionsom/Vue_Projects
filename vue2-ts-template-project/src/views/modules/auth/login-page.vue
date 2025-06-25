<template>
  <div>登录</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
  data() {
    return {}
  },
  mounted() {
    console.log('LoginPage mounted')
  },
  methods: {
    login() {
      this.$router.push('/')
    }
  }
})
</script>

<style scoped></style>
