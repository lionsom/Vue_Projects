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
        <p>showtime</p>
      </div>

      <!-- 头像 + 信息 -->
      <div class="right-avatar-button" style="width: 30px; height: 30px; background-color: #fff">
        <i class="el-icon-right" @click="avatarBtnClick" style="color: green; font-size: 30px"></i>
        <div class="info"></div>
      </div>

      <!-- 右侧设置按钮 -->
      <div class="right-setting-button" style="width: 30px; height: 30px; background-color: #fff">
        <i class="el-icon-s-tools" @click="settingBtnClick" style="color: green; font-size: 30px"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ROLE_GENDER, appDesc } from '@/constant/index'

import Bus from '@/event-bus'

export default {
  data() {
    return {
      isCollapse: false
    }
  },
  created() {},
  mounted() {
    console.log(ROLE_GENDER.MAN.desc)
    console.log(appDesc)
  },
  methods: {
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
      console.log('avatar')
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
  .left-open-button {
    margin-left: 10px;
  }

  .right {
    display: flex;
    align-items: center;
  }
}
</style>
