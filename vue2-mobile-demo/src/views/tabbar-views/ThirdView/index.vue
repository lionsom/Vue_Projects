<template>
  <div class="cartPage">

    <!-- title -->
    <!-- <cart-header>我是购物车</cart-header> -->
    <my-base-nav-bar title="购物车" />

    <!-- 列表 -->
    <div class="content">
      <cart-item v-for="item in [...list, ...list]" :key="item.id" :item="item"></cart-item>

      <van-divider>分割线</van-divider>
    </div>

    <!-- 底部 -->
    <cart-footer></cart-footer>

  </div>
</template>

<script>

import CartHeader from './components/cart-header.vue'
import CartFooter from './components/cart-footer.vue'
import CartItem from './components/cart-item.vue'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    CartHeader,
    CartFooter,
    CartItem
  },
  name: 'ThirdView', // 'cart-main-page',
  data() {
    return {

    }
  },
  created() {
    console.log('onCreate')
    this.$store.dispatch('cart/getList')
  },
  computed: {
    ...mapState(
      'cart', ['list']
    )
  },
  methods: {
    ...mapActions([])
  }
}
</script>

<style lang="scss" scoped>
.content {
  // margin-top: 50px;
  margin-bottom: 50px + 20px;
}
</style>
