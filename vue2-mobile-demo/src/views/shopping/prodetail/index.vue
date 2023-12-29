<template>
    <div>我是ProductDetail = {{ id }}</div>
  </template>

<script>
export default {
  name: 'ProductDetailIndex',
  data () {
    return {
      id: Number
    }
  },
  created () {
    this.id = this.$route.params.id
  }
}
</script>
