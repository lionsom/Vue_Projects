<template>
  <div class="main-page">
    <select :value="selectId" @change="selectCity">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>

    <select :value="value" @change="selectCity">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'v-model-base-select',
  props: {
    selectId: String, /* 自定义props传值 */
    value: String /* v-model默认通过value传值 */
  },
  methods: {
    selectCity (e) {
      this.$emit('changeCity', e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">

.main-page {
  margin: 100px auto;

  text-align: center;
  font-weight: 800;
}

</style>
