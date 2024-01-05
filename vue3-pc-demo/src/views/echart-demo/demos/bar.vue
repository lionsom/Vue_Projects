<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup lang="ts">
//
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
//
import VChart, { THEME_KEY } from "vue-echarts";
//
import { ref, provide } from "vue";

use([GridComponent, BarChart, CanvasRenderer])

provide(THEME_KEY, "dark");

const option = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>