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


const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
themeMedia.addListener(e => {
  if (e.matches) {
    console.log("light");
  } else {
    console.log("dark");
  }
});

// 监听页面变化缩放
window.addEventListener('prefers-color-scheme', (e) => {
  console.log('prefers-color-scheme', e);
});


</script>

<template>
  <RouterView />
</template>

<style scoped></style>
