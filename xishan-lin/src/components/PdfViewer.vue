
<script lang="ts">
export default {
  name: 'PdfViewer'
}
</script>

<script setup lang="ts">
import pdfjs from "pdfjs-dist";

import * as PDFJS from 'pdfjs-dist/legacy/build/pdf.mjs'
import * as PdfWorker from 'pdfjs-dist/legacy/build/pdf.worker.mjs'

import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  
})


</script>

<template>
  <div ref="pdfContainer" class="pdf-container"></div>
</template>


<style scoped lang="scss">

</style>