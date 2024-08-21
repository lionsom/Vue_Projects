<template>
  <div>
    <!-- 样式 -->
    <my-base-nav-bar :title="mytitle" />
  </div>
</template>

<script>
export default {
  name: 'SecondView',
  data() {
    return {
      mytitle: '知识库'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped></style>