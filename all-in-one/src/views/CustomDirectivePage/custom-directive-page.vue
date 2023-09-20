<template>
  <div class="main-page">

    <!-- 自定义指令: v-lxfocus -->
    <input placeholder="请输入" v-lxfocus v-lxcolor="color1">

    <div class="showLoading" v-loading="true" v-lxcolor="color2"></div>

    <div class="descContent">{{ desc }}</div>

  </div>
</template>

<script>
export default {
  name: 'custom-directive-page',
  data () {
    return {
      desc: '注册指令时不用加v-前缀，但使用时一定要加v-前缀',
      color1: 'red',
      color2: 'blue'
    }
  },
  // 自定义指令 - 局部注册
  directives: {
    // 自动聚焦指令
    lxfocus: {
      inserted (el) {
        el.focus()
      }
    },
    // 颜色指令 - 有参数
    lxcolor: {
      inserted (el, binding) {
        el.style.color = binding.value
      },
      update (el, binding) {
        el.style.color = binding.value
      }
    },
    // loading指令
    loading: {
      inserted (el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      },
      update (el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      }
    }
  }
}
</script>

<style scoped lang="scss">

.main-page {
  margin: 100px auto;

  text-align: center;
  font-weight: 800;

  .showLoading {
    width: 100px;
    height: 100px;

    margin: 200px auto;
  }

  .descContent {
    margin-top: 30px;
  }
}

.loading:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  background: #dfeb92 url('@/assets/loading.gif') no-repeat center;
  background-size: cover;
}

</style>
