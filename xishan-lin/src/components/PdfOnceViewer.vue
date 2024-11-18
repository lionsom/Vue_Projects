<script lang="ts">
export default {
  name: 'PdfOnceViewer'
}
</script>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import type { ComponentSize } from 'element-plus'
// pdfjs-dist
import * as PDFJS from 'pdfjs-dist/legacy/build/pdf.mjs'
import * as PdfWorker from 'pdfjs-dist/legacy/build/pdf.worker.mjs'

//-----------
const currentPage3 = ref(1)
const pageSize3 = ref(100)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)

  renderPage(val);
}

//
let pdfDoc: any = null // 保存加载的pdf文件流
let pdfPages = ref(0) // pdf文件的页数
// 具体路径由自身项目决定，另外这可能会涉及跨域问题可参照官网解决
// let pdfUrl = ref('./lego.pdf')
let pdfUrl = ref("https://raw.githubusercontent.com/lionsom/imagesRepo/xishanlin/genealogy/莆田林氏西山本支族谱(卷一).pdf");

let pdfScale = ref(1.3) // 缩放比例

// 调用loadFile方法
onMounted(() => {
  loadFile(pdfUrl.value)
})

//获取pdf文档流与pdf文件的页数
const loadFile = async (url: string) => {
  // 1.外部链接引入，存在安全性问题
  /* 注意我的pdfjs-dist的版本是3.9.179，其他的版本需要更换版本号，不然运行时会报版本不匹配的错 */
  // PDFJS.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js";
  // PDFJS.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;  // 动态获取当前pdfjs版本
  // 2.内部链接引入
  PDFJS.GlobalWorkerOptions.workerSrc = JSON.stringify(PdfWorker) // 字符串类型，否则报错！！

  const loadingTask = PDFJS.getDocument(url)
  loadingTask.promise
    .then((pdf: any) => {
      pdf.loadingParams.disableAutoFetch = true;
      pdf.loadingParams.disableStream = true;
      pdfDoc = pdf // 获取pdf文档流
      pdfPages.value = pdf.numPages // 获取pdf文件的总页数
      console.log('pdfPages = ', pdfPages.value);
      nextTick(() => {
        renderPage(1)
      })
    })
    .catch((error: any) => {
      console.warn(`[upthen] pdfReader loadFile error: ${error}`);
    });
}

const renderPage = (num: any) => {
  pdfDoc.getPage(num).then((page: any) => {
    page.cleanup();
    const canvas: any = document.getElementById(`pdf-canvas`);
    if (canvas) {
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
    }
  });
};

</script>

<template>
  <div class="top-container">
    我是top部：第一页
    <el-button type="primary">
      下载
    </el-button>
  </div>

  <el-scrollbar class="container-main">
    <div class="main-center">
      <canvas id="pdf-canvas"></canvas>
    </div>
  </el-scrollbar>

  <div class="bottom-container">
    <el-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize3" :size="size" :disabled="disabled"
      :background="background" layout="prev, pager, next, jumper" :total="pdfPages" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<style lang="scss" scoped>
.top-container {
  height: 40px;
}

.container-main {
  height: calc(100vh - 100px);
  background-color: goldenrod;
  width: 100%;

  .main-center {
    margin: 0 auto;
    width: auto;

    .pdf-canvas {
      margin: 0 auto;
      margin-top: 10px;
      margin-bottom: 10px;
      width: 60%;
      left: 200px;
      background-color: aqua;
    }
  }
}

.bottom-container {
  position: fixed;
  bottom: 20px;
  right: 30px;
}
</style>
