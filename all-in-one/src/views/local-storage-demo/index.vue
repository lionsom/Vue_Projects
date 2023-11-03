<template>
  <div class="main">
    <!-- 导航啦 -->
    <div class="nav">
      <van-nav-bar
        safe-area-inset-top
        title="本地缓存的使用"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      ></van-nav-bar>
    </div>

    <div class="main-content">
      <!-- vant组件使用样例 -->
      <div class="content-section-1">
        <p>vant组件小试牛刀</p>
        <van-cell-group inset>
          <van-cell icon="location-o" title="打开i18n" value="前往" :clickable="true" is-link to="/i18n-demo" />
          <van-cell
            icon="location-o"
            title="打开凤凰网"
            value="前往"
            :clickable="true"
            is-link
            url="http://www.ifeng.com"
          />
        </van-cell-group>
      </div>

      <!-- cookie设置 -->
      <div class="content-section-2">
        <p>cookie设置</p>
        <van-cell-group inset>
          <van-cell
            title="设置cookie"
            value=""
            label="document.cookie = 'name=linxxxx'"
            :clickable="true"
            @click="clickCookie1"
          />
          <van-cell title="查看cookie" value="" label="document.cookie" :clickable="true" @click="clickCookie2" />
          <van-cell
            title="删除cookie"
            value=""
            label="将过期时间往前设置一点，浏览器会自动删除过期的Cookie"
            :clickable="true"
            @click="clickCookie3"
          />
        </van-cell-group>
      </div>

      <!-- sessionStorage -->
      <div class="content-section-3">
        <p>sessionStorage设置</p>
        <van-cell-group inset>
          <van-cell title="设置sessionStorage" value="" label="" :clickable="true" @click="clickSessionStorage1" />
          <van-cell title="查看sessionStorage" value="" label="" :clickable="true" @click="clickSessionStorage2" />
          <van-cell title="删除sessionStorage" value="" label="" :clickable="true" @click="clickSessionStorage3" />
        </van-cell-group>
      </div>

      <!-- localStorage -->
      <div class="content-section-4">
        <p>localStorage设置</p>
        <van-cell-group inset>
          <van-cell title="设置localStorage" value="" label="" :clickable="true" @click="clickLocalStorage1" />
          <van-cell title="查看localStorage" value="" label="" :clickable="true" @click="clickLocalStorage2" />
          <van-cell title="删除localStorage" value="" label="" :clickable="true" @click="clickLocalStorage3" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'

export default {
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    clickCookie1() {
      // 1. 最简单的设置
      // document.cookie = 'name=linxxxx'

      // 2. 设置过期时间
      const data = new Date().getTime() // 先将此时的时间转化为毫秒
      const newData = new Date(data + 7 * 24 * 60 * 60 * 1000) // 将过期时间设置为7天后
      // toUTCString() 是将时间根据世界时转换为字符串
      document.cookie = 'demo-name=张三;' + 'expires=' + newData.toUTCString()
      // 设置第二条 cookie
      document.cookie = 'demo-age=19;' + 'expires=' + newData.toUTCString()
    },
    clickCookie2() {
      Dialog.alert({
        title: '查看当前Cookie',
        message: document.cookie
      }).then(() => {
        // on close
      })
    },
    clickCookie3() {
      const data = new Date().getTime() // 先将此时的时间转化为毫秒
      const oldData = new Date(data - 24 * 60 * 60 * 1000) // 将过期时间设为24小时前
      document.cookie = 'demo-name=张三;' + 'expires=' + oldData.toUTCString()
    },
    clickSessionStorage1() {
      // 设置sessionStorage
      sessionStorage.setItem('key001', JSON.stringify('value11111110000011111'))
      sessionStorage.setItem('key002', JSON.stringify('value22222222222222222'))
    },
    clickSessionStorage2() {
      // 获取sessionStorage
      const val = JSON.parse(sessionStorage.getItem('key001'))
      Dialog.alert({
        title: '查看key001的值',
        message: val
      }).then(() => {
        // on close
      })
    },
    clickSessionStorage3() {
      // 删除对应键值的数据
      sessionStorage.removeItem('key001')

      // 删除所有sessionStorage的数据
      // sessionStorage.clear()
    },
    clickLocalStorage1() {
      // 设置localStorage
      localStorage.setItem('key001', JSON.stringify('value11111111'))
      localStorage.setItem('key002', JSON.stringify('value22222222'))
      localStorage.setItem('key003', 3333333)
    },
    clickLocalStorage2() {
      // 获取localStorage
      const val = JSON.parse(localStorage.getItem('key003'))
      Dialog.alert({
        title: '查看key003的值',
        message: val
      }).then(() => {
        // on close
      })
    },
    clickLocalStorage3() {
      // 删除对应键值的数据
      localStorage.removeItem('key003')

      // 删除所有localStorage的数据
      // localStorage.clear()
    }
  }
}
</script>

<style lang="scss">
.main {
  background-color: #f5f5f5;

  width: 100%;
  min-height: 100vh;

  // 导航栏
  .nav {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 999;
  }

  .main-content {
    margin-top: 46px;

    // 处理塌陷
    overflow: hidden;

    .content-section-1 {
      margin-top: 20px;
      p {
        margin-left: 20px;
        margin-bottom: 10px;
      }
    }

    .content-section-2 {
      margin-top: 20px;

      p {
        margin-left: 20px;
        margin-bottom: 10px;
      }
    }

    .content-section-3 {
      margin-top: 20px;

      p {
        margin-left: 20px;
        margin-bottom: 10px;
      }
    }

    .content-section-4 {
      margin-top: 20px;
      margin-bottom: 20px;

      p {
        margin-left: 20px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
