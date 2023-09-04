<template>
    <div>我是Login</div>
  </template>

<script>

// import request from '@/utils/request'
import { getPicCode } from '@/api/login'

export default {
  name: 'LoginIndex',
  created () {
    // this.getCapthcaImage()
    this.$toast('哈哈哈')
  },
  methods: {
    async getCapthcaImage () {
      // Before
      // const res = await request.get('/captcha/image')
      // After
      const { data: { base64, key } } = await getPicCode()
      console.log(key)
      console.log(base64)
    }
  }
}
</script>

  <style>

  </style>
