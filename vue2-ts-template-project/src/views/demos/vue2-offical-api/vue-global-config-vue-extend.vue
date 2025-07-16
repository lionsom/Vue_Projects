<template>
  <div>
    <h1>验证 Vue.extend</h1>
    <a href="https://v2.cn.vuejs.org/v2/api/#Vue-extend" target="_blank">https://v2.cn.vuejs.org/v2/api/#Vue-extend</a>

    <!-- 挂载点（确保是原生元素） -->
    <div ref="componentMount" class="mount-point"></div>

    <p>页面其他内容</p>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'MyPage',

  data() {
    return {
      dynamicComponent: null
    }
  },

  mounted() {
    this.$nextTick(() => {
      // 1. 创建组件构造器（使用渲染函数）
      const MyComponent = Vue.extend({
        // template: '<div>AAAAA</div>',
        render(h) {
          return h(
            'div',
            {
              style: { color: 'blue', fontSize: '20px', marginTop: '50px' }
            },
            `动态组件内容: Hello ${this.name}!`
          )
        },
        props: ['name']
      })

      // 2. 创建实例
      const instance = new MyComponent({
        propsData: { name: 'Vue Developer' }
      })

      // 3. 挂载到DOM
      if (this.$refs.componentMount) {
        instance.$mount(this.$refs.componentMount)
        this.dynamicComponent = instance
      } else {
        console.error('挂载点元素不存在')
      }
    })
  },

  beforeDestroy() {
    // 4. 清理工作
    if (this.dynamicComponent) {
      this.dynamicComponent.$destroy()
      this.dynamicComponent = null
    }
  }
}
</script>

<style scoped>
.mount-point {
  margin-top: 50px;
  border: 1px dashed #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
