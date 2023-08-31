<template>
  <div class="cartPage">

    <cart-header>我是购物车</cart-header>

    <cart-item v-for="item in list" :key="item.id" :item="item"></cart-item>

    <cart-footer>123</cart-footer>

  </div>
</template>

<script>

import CartHeader from '@/components/Cart/cart-header.vue'
import CartFooter from '@/components/Cart/cart-footer.vue'
import CartItem from '@/components/Cart/cart-item.vue'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    CartHeader,
    CartFooter,
    CartItem
  },
  name: 'cart-main-page',
  data () {
    return {

    }
  },
  created () {
    console.log('onCreate')
    this.$store.dispatch('cart/getList')
  },
  computed: {
    ...mapState(
      'cart', ['list']
    )
  },
  methods: {
    ...mapActions()
  }
}
</script>

<style>

</style>
