<script lang="ts">
export default {
  name: "PdfViewerCCC",
}
</script>

<script setup lang="ts">

import { ref, reactive, onMounted, nextTick } from "vue";
// pdfjs-dist
import * as PDFJS from 'pdfjs-dist/legacy/build/pdf.mjs';
// import pdfjsWorker from 'pdfjs-dist/legacy/build/pdf.worker.mjs';
// import pdfjsWorker from 'pdfjs-dist/legacy/build/pdf.worker.mjs';
import * as PdfWorker from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs'

// 
let pdfDoc = reactive({}); // 保存加载的pdf文件流
let pdfPages = ref(0); // pdf文件的页数
// 具体路径由自身项目决定，另外这可能会涉及跨域问题可参照官网解决
// let pdfUrl = ref("./lego.pdf");
let pdfUrl = ref("https://raw.githubusercontent.com/lionsom/imagesRepo/xishanlin/tree/莆田林氏西山本支族谱(卷一).pdf");
let pdfScale = ref(1.0); // 缩放比例

// 调用loadFile方法
onMounted(() => {
  loadFile(pdfUrl.value);
});

//获取pdf文档流与pdf文件的页数
const loadFile = async (url: string) => {
  // 注意我的pdfjs-dist的版本是3.9.179，其他的版本需要更换版本号，不然运行时会报版本不匹配的错
  // 1.外部链接引入，存在安全性问题
  // PDFJS.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js";
  // PDFJS.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;
  // 2.内部链接引入
  PDFJS.GlobalWorkerOptions.workerSrc = JSON.stringify(PdfWorker);

  // 第 3 步：使用 PDFJS.getDocument（） 处理 pdf 文档
  PDFJS.getDocument(url).promise.then((pdfDoc: PDFJS.PDFDocumentProxy) => {
    const totalPages = pdfDoc.numPages; // pdf 的总页数
    const canvasContainer = document.getElementById("#canvasContainer"); //html中需创建一个相应的div容器，用于存放canvas元素
    for (let i = 1; i <= totalPages; i++) {
      // 第4步：使用 pdfDoc.getPage（i） 获取第 i 页的数据
      pdfDoc.getPage(i).then((page) => {
        let scaledViewport = page.getViewport({ scale: 1.5 }); //可通过scale来调节初始的缩放比
        //第5步：创建一个 canvas 元素，并设置元素的画布属性
        let canvas = document.createElement("canvas");
        canvas.setAttribute("id", "the-canvas" + i);
        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;
        let context = canvas.getContext("2d");
        let renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        };
        //第 6 步: 使用 page.render 将数据渲染到画布上
        page.render(renderContext).promise.then(() => { });
        canvasContainer.appendChildren(canvas); //将canvas元素加入到容器中
      });
    }
  });




  const loadingTask = PDFJS.getDocument(url);
  loadingTask.promise.then((pdf: any) => {
    console.log(pdf);
    pdfDoc = pdf; // 获取pdf文档流
    pdfPages.value = pdf.numPages; // 获取pdf文件的页数
    nextTick(() => {
      renderPage(1);
    });
  });
};




const renderPage = (num: number) => {
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
  我是AAA
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