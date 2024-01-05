<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup lang="ts">
//
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
//
import VChart, { THEME_KEY } from "vue-echarts";
//
import { ref, provide } from "vue";

use([GridComponent, LineChart, CanvasRenderer])

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
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>