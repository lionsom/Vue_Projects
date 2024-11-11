<script lang="ts">
export default {
  name: 'PCIndex'
}
</script>

<script setup lang="ts">

import { ElMessage } from 'element-plus'
// import PdfViewerAAA from '@/components/PdfViewerAAA.vue'
import PdfViewer from '@/components/PdfViewer.vue'

// import pdfurl from '@/assets/lego.pdf'

const open1 = () => {
  ElMessage('This is a message.')
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage.error('Oops, this is a error message.')
}

</script>

<template>

  <!-- <PdfViewer style="width: 1000px; height:500px; background-color: aqua;"></PdfViewer> -->
  <PdfViewer />

  <h1>
    我是PC端！！！
  </h1>

  <div>
    我是PC端
  </div>

  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </div>

  <el-button :plain="true" @click="open2">Success</el-button>
  <el-button :plain="true" @click="open3">Warning</el-button>
  <el-button :plain="true" @click="open1">Message</el-button>
  <el-button :plain="true" @click="open4">Error</el-button>

</template>

<style scoped lang="scss">
div {
  h1 {
    color: var(--lx-color-green);
    background-color: $lx-color-primary;
  }
}
</style>