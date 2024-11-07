<script lang="ts">
export default {
  name: "PdfViewerBBB",
}
</script>

<script setup lang="ts">

import { ref, reactive, onMounted, nextTick } from "vue";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

let pdfDoc = reactive({}); // 保存加载的pdf文件流
let pdfPages = ref(0); // pdf文件的页数
let pdfUrl = ref(""); //pdf文件的链接
let pdfScale = ref(1.0); // 缩放比例

//调用loadFile方法
onMounted(() => {
  loadFile(pdfUrl.value);
});

//获取pdf文档流与pdf文件的页数
const loadFile = async (url: string) => {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js";
  const loadingTask = pdfjsLib.getDocument(url);
  loadingTask.promise.then((pdf: { numPages?: any; }) => {
    console.log(pdf);
    pdfDoc = pdf;
    pdfPages.value = pdf.numPages;
    nextTick(() => {
      renderPage(1);
    });
  });
};

//渲染pdf文件
const renderPage = (num: string | number) => {
  pdfDoc.getPage(num).then((page) => {
    const canvasId = "pdf-canvas-" + num;
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const bsr =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;
    const ratio = dpr / bsr;
    const viewport = page.getViewport({ scale: pdfScale.value });
    canvas.width = viewport.width * ratio;
    canvas.height = viewport.height * ratio;
    canvas.style.width = viewport.width + "px";
    canvas.style.height = viewport.height + "px";
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };
    page.render(renderContext);
    if (num < pdfPages.value) {
      renderPage(num + 1);
    }
  });
};

</script>

<template>
  <div class="interviewVideo_main" id="videoContainer">
    <!--此处根据pdf的页数动态生成相应数量的canvas画布-->
    <canvas v-for="pageIndex in pdfPages" :id="`pdf-canvas-` + pageIndex" :key="pageIndex"
      style="display: block"></canvas>
  </div>
</template>

<style lang="scss" scoped>
#videoContainer {
  height: 842px;
}
</style>