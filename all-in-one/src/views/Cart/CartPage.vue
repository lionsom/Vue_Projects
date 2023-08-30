<template>
  <div class="cartPage">
    我是购物车
  </div>
</template>

<script>
export default {
  name: 'cart-main-page',
  data () {
    return {

    }
  },
  created () {
    console.log('onCreate')
    this.$store.dispatch('cart/getList', '21')
  }
}
</script>

<style>

</style>
