<script lang="ts">
export default {
  name: 'PdfViewerAAA'
}
</script>

<script setup lang="ts">
import * as PDFJS from 'pdfjs-dist/legacy/build/pdf.mjs'
import * as PdfWorker from 'pdfjs-dist/legacy/build/pdf.worker.mjs'
import { nextTick, ref, watch } from 'vue'
import { isEmpty, debounce } from 'lodash'

const props: any = defineProps({
  pdf: {
    required: true
  }
})

let pdfDoc: any = null
const pdfPages = ref(0)
const pdfScale = ref(1.3)
const loadFile = async (url: any) => {
  // 设定pdfjs的 workerSrc 参数
  PDFJS.GlobalWorkerOptions.workerSrc = PdfWorker
  const loadingTask = PDFJS.getDocument(url)
  loadingTask.promise.then(async (pdf: any) => {
    pdfDoc = pdf // 保存加载的pdf文件流
    pdfPages.value = pdfDoc.numPages // 获取pdf文件的总页数
    await nextTick(() => {
      renderPage(1) // 将pdf文件内容渲染到canvas
    })
  }).catch((error: any) => {
    //可以用自己组件库弹出提示框
    console.log(error)
  })
}

const renderPage = (num: any) => {
  pdfDoc.getPage(num).then((page: any) => {
    page.cleanup()
    const canvas: any = document.getElementById(`pdf-canvas-${num}`)
    if (canvas) {
      const ctx = canvas.getContext('2d')
      const dpr = window.devicePixelRatio || 1
      const bsr = ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1
      const ratio = dpr / bsr
      const viewport = page.getViewport({ scale: pdfScale.value })
      canvas.width = viewport.width * ratio
      canvas.height = viewport.height * ratio
      canvas.style.width = viewport.width + 'px'
      canvas.style.height = viewport.height + 'px'
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      const renderContext = {
        canvasContext: ctx,
        viewport: viewport
      }
      page.render(renderContext)
      if (num < pdfPages.value) {
        renderPage(num + 1)
      }
    }
  })
}

const debouncedLoadFile = debounce((pdf: any) => loadFile(pdf), 1000)
watch(() => props.pdf, (newValue: any) => {
  !isEmpty(newValue) && debouncedLoadFile(newValue)
}, {
  immediate: true
})
</script>


<template>
  <div class="pdf-container">
    <canvas v-for="pdfIndex in pdfPages" :id="`pdf-canvas-${pdfIndex}`" :key="pdfIndex" />
  </div>
</template>


<style scoped lang="scss">
.pdf-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  /* 启用滚动条 */
}

canvas {
  width: 100%;
  max-height: 100vh;
  /* 设置最大高度为视口高度 */
}
</style>