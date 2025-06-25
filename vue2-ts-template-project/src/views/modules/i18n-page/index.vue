<template>
  <div class="main">
    <h1>国际化</h1>

    <!-- Usage
      1. template 需要使用 {{}} 将 name包装起来
        {{$t('save')}}

      2. js
        this.$t('save')
      -->

    <div class="top">
      <h3>安装： pnpm install vue-i18n@8</h3>
      <p>测试： {{ $t('message.hello') }}</p>
    </div>

    <button @click="showAlert">{{ $t('message.changeLang') }}</button>

    <!-- <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" :description="$t('message.changeLang')"
      close-on-click-action @select="onSelect" /> -->

    <div class="sheet-div" v-for="item in actions" :key="item.name">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { getCurrentLocaleKey, setCurrentLocaleKey } from '@/i18n'

export default {
  name: 'i18n-demo-view',
  data() {
    return {
      mesg: '123哈哈',
      show: false,
      actions: [{ name: 'zh' }, { name: 'en' }, { name: 'ja' }]
    }
  },
  computed: {
    test() {
      return this.$t('message.changeLang')
    }
  },
  created() {
    this.changeActions()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    showAlert() {
      this.show = true
    },
    onSelect(val) {
      console.log(val.name)
      this.$i18n.locale = val.name
      setCurrentLocaleKey(val.name)
      this.changeActions()
    },
    // 更改数据源
    changeActions() {
      // 获取当前语言环境
      const curlocale = getCurrentLocaleKey()
      console.log('curlocale = ' + curlocale)
      if (curlocale == null) {
        return
      }
      this.actions.forEach((item) => {
        if (item.name === curlocale) {
          item.color = '#ee0a24'
          item.disabled = true
        } else {
          item.color = '#a86432'
          item.disabled = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: antiquewhite;
}
</style>
>
