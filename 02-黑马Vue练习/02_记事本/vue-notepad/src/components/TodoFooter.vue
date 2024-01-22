<template>
  <div class="footerView">

    <p> 总计：{{ MyCurrnetListNumber }} 条</p>

    <button @click="clearAlllll">全部清除</button>
  </div>
</template>

<script>
export default {
  props: ['MyCurrnetListNumber'],
  methods: {
    clearAlllll () {
      console.log('clearAlllll')
      this.$emit('clearAll', 'null')
    }
  }
}
</script>

<style scoped>

.footerView {
  display: flex;
  justify-content: space-between;
}

p {
  flex: 3;

  text-align: left;
  margin-left: 20px;
}

button {
  flex: 1;

  margin-right: 20px;
}

</style>
