<script setup lang="ts">

import { defineModel } from 'vue'

const modelValue = defineModel()

</script>

<template>
  <input 
    type="txt"
    :value="modelValue"
    @input="e => modelValue = e.target.value"
  >
</template>