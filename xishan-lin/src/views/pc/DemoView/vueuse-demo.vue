<script lang="ts">
export default {
  name: 'VueUseDemo'
}
</script>

<script setup lang="ts">
import { useMouse, useCounter } from '@vueuse/core'

const { x, y } = useMouse()
const { count, inc, dec } = useCounter()
</script>

<template>
  <div>
    <img src="@/assets/images/common/logo.svg" />
    <h1>Hello <a href='https://github.com/vuejs/vite' target='__blank'>Vite</a> and <a
        href='https://github.com/vueuse/vueuse' target='__blank'>VueUse</a>!</h1>

    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <h3>
      Counter: {{ count }}
      <a @click='inc()' style='margin-right:10px'>+</a>
      <a @click='dec()'>-</a>
    </h3>

    <br><br>
    <p><a href='https://github.com/vueuse/vueuse-vite-starter' target='__blank'>Source</a></p>
    <p><a href='https://vueuse-vue3-example.netlify.app/' target='__blank'>Webpack Example</a></p>
  </div>
</template>


<style scoped lang="scss">
img {
  width: 500px;
}

a {
  color: #41b883;
  text-decoration: none;
  cursor: pointer;
}
</style>