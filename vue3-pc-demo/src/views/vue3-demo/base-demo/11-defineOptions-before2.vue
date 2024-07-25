<script lang="ts">
export default {
  name: 'test-index-111'
}
</script>

<script setup>
const message = 'this is a message'
const logMessage = () => {
  console.log(message)
}
</script>

<template>
  <div>{{ message }}</div>
  <button @click="logMessage">按钮</button>
</template>