<template>
  <footer class="nav-footer">
    <div class="nav-title" @click="goToRoot">导航</div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FooterView',
  data() {
    return {}
  },
  methods: {
    goToRoot() {
      this.$router.push({ path: '/' })
    }
  }
})
</script>

<style lang="scss" scoped>
.nav-footer {
  display: flex;
  justify-content: space-between;

  height: 160px;
  background: lightcoral;
  display: flex;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
  color: #fff;

  .nav-title {
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
