<template>
  <div>
    <input type="text" @keyup.media-play-pause="inputClick" />
    撒点金坷垃水电费空间
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      
    }
  },
  methods: {
    inputClick(event: KeyboardEvent) {
      console.log('按下的键:', event.key);      // 打印键名，如 "a"、"Enter"
      console.log('键码:', event.keyCode);      // 打印键码，如 65、13
    }
  },
})
</script>

<style lang="scss" scoped>

</style>