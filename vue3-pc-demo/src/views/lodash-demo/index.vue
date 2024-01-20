
<script setup lang="ts">

import AA from './array/lodash-array'
import BB from './number/lodash-number'

const { lodashChunk, lodashCompact } = AA()
const { lodashClamp, lodashInRange, lodashRandom } = BB()


</script>

<template>
  <div>
    <h1>lodash-demo</h1>
    <p>
      <button @click="lodashChunk">array chunk 测试</button>

      <button @click="lodashCompact">lodash Compact 测试</button>

      <br />

      <button @click="lodashClamp">lodash Clamp 测试</button>

      <button @click="lodashInRange">lodash InRange 测试</button>

      <button @click="lodashRandom">lodash Random 测试</button>

    </p>
    <p>
      <a href="https://lodash.com/docs/4.17.15" target="_blank">lodash docs</a>
    </p>
  </div>

</template>

<style lang="scss" scoped>

button {
  margin: 10px;
}

</style>