<template>
  <div>注册</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RegisterPage',
  data() {
    return {}
  },
  mounted() {
    console.log('RegisterPage mounted')
  },
  methods: {
    login() {
      this.$router.push('/')
    }
  }
})
</script>

<style scoped></style>
