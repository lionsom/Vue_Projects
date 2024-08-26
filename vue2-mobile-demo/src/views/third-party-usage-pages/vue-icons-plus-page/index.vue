<template>
  <div>
    <my-base-nav-bar title="Vue Icons Plus" :showLeftArrow="true" :isAutoBack="true" />

    <!-- <link rel="stylesheet" href="https://vue-icons.com/icons/"> -->

    <van-button type="primary" url="https://vue-icons.com/">Vue Icons Plus:
      https://vue-icons.com/</van-button>

    <br />
    <AiFillAlipayCircle color="green" size="50" />
    <Bs0SquareFill color="blue" size="40" />
  </div>
</template>

<script>
import { AiFillAlipayCircle } from 'vue-icons-plus/ai'
import { Bs0SquareFill } from 'vue-icons-plus/bs'

export default {
  name: 'VueIconsPlusUsagePage',
  components: {
    AiFillAlipayCircle,
    Bs0SquareFill
  },
  data() {
    return {
      mytitle: '我是老大'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped></style>