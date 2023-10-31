<template>
  <div class="content-header">
    <!-- 头部左侧缩放按钮 -->
    <div v-if="!isCollapse" class="left-close-button" style="width: 30px; height: 30px; background-color: #fff">
      <i class="el-icon-back" @click="closeBtnClick" style="color: green; font-size: 30px"></i>
    </div>

    <div v-else class="left-open-button" style="width: 30px; height: 30px; background-color: #fff">
      <i class="el-icon-right" @click="openBtnClick" style="color: green; font-size: 30px"></i>
    </div>

    <div class="right">
      <!-- 时钟 -->
      <div class="right-time">
        {{ currentTime }}
      </div>

      <!-- 分割线 -->
      <div class="sep-v-line"></div>

      <!-- 头像 -->
      <div class="right-avatar-button" style="width: 30px; height: 30px; background-color: #fff">
        <i class="el-icon-right" @click="avatarBtnClick" style="color: green; font-size: 30px"></i>
      </div>

      <!-- 信息 -->
      <div class="info">linxxxx</div>

      <!-- 右侧设置按钮 -->
      <div class="right-setting-button" style="width: 30px; height: 30px">
        <i class="el-icon-s-tools" @click="settingBtnClick" style="color: #fff; font-size: 30px"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ROLE_GENDER, appDesc } from '@/constant/index'

import Bus from '@/event-bus'
import lxNowTime from '@/plugins/moment'

export default {
  data() {
    return {
      isCollapse: false,
      timer: '',
      currentTime: ''
    }
  },
  mounted() {
    console.log(ROLE_GENDER.MAN.desc)
    console.log(appDesc)

    // 定时器
    this.timer = setInterval(this.updateTime, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    updateTime() {
      this.currentTime = lxNowTime()
    },
    closeBtnClick() {
      console.log('关闭侧栏')
      this.isCollapse = !this.isCollapse
      // 发送消息
      Bus.$emit('menuCollapseStatus', this.isCollapse)
    },
    openBtnClick() {
      console.log('打开')
      this.isCollapse = !this.isCollapse
      // 发送消息
      Bus.$emit('menuCollapseStatus', this.isCollapse)
    },
    avatarBtnClick() {
      console.log('avatar =')
    },
    settingBtnClick() {
      console.log('sdfsf')
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/constant/color.less';

.content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 50px;
  background-color: @lx-color-blue;

  .left-close-button {
    margin-left: 10px;
  }

  .left-close-button:hover {
    // 手形光标
    cursor: pointer;
  }
  .left-open-button {
    margin-left: 10px;
  }

  .left-open-button :hover {
    // 手形光标
    cursor: pointer;
  }

  .right {
    display: flex;
    align-items: center;
    margin-right: 30px;

    .right-setting-button:hover {
      // 放大
      transform: scale(1.1);
      // 手形光标
      cursor: pointer;
    }
    .right-avatar-button {
      margin-right: 5px;

      border-radius: 50%;
      border: 3px solid #eee;
      overflow: hidden;
    }

    .right-avatar-button:hover {
      // 放大
      transform: scale(1.1);
      // 手形光标
      cursor: pointer;
    }

    .info {
      // background-color: red;
      color: #fff;
      margin-right: 20px;
    }

    .sep-v-line {
      background-color: #fff;
      height: 20px;
      width: 2px;
      margin-right: 10px;
    }

    .right-time {
      margin-right: 10px;
      color: #fff;
    }
  }
}
</style>
