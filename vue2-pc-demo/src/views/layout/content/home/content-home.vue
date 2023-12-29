<template>
  <div class="content-home">
    <!-- 顶部 -->
    <div class="top">
      <top-item
        v-for="item in topList"
        :key="item.name"
        :name="item.name"
        :total="item.all"
        :today="item.today"
        @click.native="showMessage"
      />
      <!-- <top-item @click.native="showMessage"> </top-item> -->
    </div>

    <!-- 图表 -->
    <div class="center">
      <div class="charts" style="width: 100%; height: 400px"></div>
    </div>
  </div>
</template>

<script>
import TopItem from '@/component/show-message-item'
// 导入ecahrt组件
import * as echarts from 'echarts'

export default {
  name: 'layout-main-home',
  components: {
    TopItem
  },
  data() {
    return {
      title: '主页哈',
      // 销售额
      titleSale: '销售额',
      totalSale: 10,
      todaySale: 20,
      // 访问量
      titlevisit: '访问量',
      totalVisit: 0,
      todayVisit: 0,
      // 收藏量
      titlecollect: '收藏量',
      totalCollect: 0,
      todayCollect: 0,
      // 支付量
      titlepay: '支付量',
      totalPay: 0,
      todayPay: 0
    }
  },
  computed: {
    // 顶部数据源整理
    topList() {
      return [
        {
          name: this.titleSale,
          all: this.totalSale,
          today: this.todaySale
        },
        {
          name: this.titlevisit,
          all: this.totalVisit,
          today: this.todayVisit
        },
        {
          name: this.titlecollect,
          all: this.totalCollect,
          today: this.todayCollect
        },
        {
          name: this.titlepay,
          all: this.totalPay,
          today: this.todayPay
        }
      ]
    }
  },
  mounted() {
    // 实例化echarts对象
    this.myChart = echarts.init(document.querySelector('.charts'))
    // 指定图表的配置项和数据
    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        // x轴数据
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {}, // y轴会自动创建数据
      series: [
        // 图表内容
        {
          name: '销量',
          type: 'bar', // 图表类型: line pie bar map
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }

    // 使用刚指定的配置项和数据显示图表。
    this.myChart.setOption(option)
  },
  created() {
    this.getHomeTopData()
  },
  methods: {
    showMessage() {
      this.$message({
        message: '我是消息',
        type: 'success'
      })
    },
    getHomeTopData() {
      this.$api.totalInfo().then((res) => {
        const data = res.data
        for (const key in data) {
          const item = data[key]
          if (item.id === 1) {
            this.titleSale = item.title
            this.totalSale = item.total
            this.todaySale = item.today
          } else if (item.id === 2) {
            this.titlevisit = item.title
            this.totalVisit = item.total
            this.todayVisit = item.today
          } else if (item.id === 3) {
            this.titlecollect = item.title
            this.totalCollect = item.total
            this.todayCollect = item.today
          } else if (item.id === 4) {
            this.titlepay = item.title
            this.totalPay = item.total
            this.todayPay = item.today
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.content-home {
  background-color: #f5f5f5;
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 160px;
  }

  .center {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    background-color: aliceblue;
  }
}
</style>
