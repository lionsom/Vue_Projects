<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router'

import useDeviceType from '@/hooks/useDeviceType'
const { isMobile } = useDeviceType();
const router = useRouter()

onMounted(() => {  
  console.log('isMobile', isMobile.value)
  if (isMobile.value) {
    // router.replace('/m');
  } else {
    // router.replace('/p');
    // console.log('pc')
  }
})

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
