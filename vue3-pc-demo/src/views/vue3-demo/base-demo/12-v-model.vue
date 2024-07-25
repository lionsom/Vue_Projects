<script setup lang="ts">

import myInput from '@/12-my-input.vue'
import { ref } from 'vue'

const txt = ref('1111')

</script>

<template>

<myInput v-model="txt"></myInput>

{{ txt }}

</template>