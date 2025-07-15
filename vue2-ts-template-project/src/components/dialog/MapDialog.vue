<template>
  <div class="modal-overlay" @click="hideModal">
    <div class="map-dialog" :style="dialogStyle" ref="dialog">
      <div class="map-dialog-arrow" :class="arrowClass" :style="arrowStyle" />
      <div class="modal-header">
        <div class="modal-title">
          {{ title }}
        </div>
        <div class="modal-close" @click="hideModal" />
      </div>
      <div class="modal-main">
        <div class="first-div item-div-cls">
          <p class="item-title-cls">票号：</p>
          <p class="item-detail-cls">{{ piaohaoData }}</p>
        </div>
        <div class="second-div item-div-cls">
          <p class="item-title-cls">作业内容：</p>
          <p class="item-detail-cls">{{ zuoyeneirongData }}</p>
        </div>
        <div class="third-div item-div-cls">
          <p class="item-title-cls">作业状态：</p>
          <p class="item-detail-cls">{{ zuoyezhuangtaiData }}</p>
        </div>
        <div class="forth-div item-div-cls">
          <p class="item-title-cls">作业视频：</p>
          <p class="item-detail-btn-cls" @click.prevent.stop="showVideoClick">查看</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '弹框'
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogStyle: {},
      arrowClass: '',
      arrowStyle: {},
      piaohaoData: '123213',
      zuoyeneirongData: '123多少分',
      zuoyezhuangtaiData: '未通过',
      zuoyeshipinData: ''
    }
  },
  watch: {
    visible(val) {}
  },
  created() {
    console.log('=============>', 'createdcreatedcreatedcreated')
  },
  mounted() {
    console.log('=============>', 'mountedmountedmountedmountedmounted')
    this.$nextTick(this.updatePosition)
  },
  methods: {
    hideModal() {
      this.$emit('close')
    },
    updatePosition() {
      // 获取弹框尺寸
      const dialog = this.$refs.dialog
      const { x, y } = this
      console.log('=========AAAAAAAAA====>', x, y)
      const dialogRect = dialog.getBoundingClientRect()
      const winW = window.innerWidth
      const winH = window.innerHeight

      console.log('=============>', dialogRect)

      // 默认下方弹出
      let top = y + 10
      let left = x - dialogRect.width / 2
      let arrowClass = 'arrow-top'
      const arrowStyle = { left: `${dialogRect.width / 2}px` }

      // 判断是否超出底部
      if (top + dialogRect.height > winH) {
        top = y - dialogRect.height - 10
        arrowClass = 'arrow-bottom'
      }
      // 判断是否超出左侧
      if (left < 0) left = 50
      // 判断是否超出右侧
      if (left + dialogRect.width > winW) left = winW - dialogRect.width - 50

      this.dialogStyle = {
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`
      }
      this.arrowClass = arrowClass
      this.arrowStyle = arrowStyle
    },
    showVideoClick(e) {
      console.log('=============>', e.currentTarget)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent; // rgba(0, 0, 0, 0.1); // 半透明背景
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.map-dialog {
  position: fixed;
  background: rgba(10, 29, 43, 0.83);
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(37, 169, 211, 1);
  padding: 10px;
  z-index: 1000;
  width: 350px;
  height: 200px;
  color: #fff;

  display: flex;
  flex-direction: column;

  .map-dialog-arrow {
    position: absolute;
    width: 0;
    height: 0;
    z-index: 1;
  }

  .arrow-top {
    top: -17px;
    left: 100px;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent rgba(10, 29, 43, 0.83) transparent;
    // 外边框
    &::before {
      content: '';
      position: absolute;
      top: -9px;
      left: -8px;
      border-width: 9px;
      border-style: solid;
      border-color: transparent transparent rgba(37, 169, 211, 1) transparent;
      z-index: -1;
    }
  }

  .arrow-bottom {
    bottom: -17px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: rgba(10, 29, 43, 0.83) transparent transparent transparent;
    &::before {
      content: '';
      position: absolute;
      bottom: -9px;
      left: -8px;
      border-width: 9px;
      border-style: solid;
      border-color: rgba(37, 169, 211, 1) transparent transparent transparent;
      z-index: -1;
    }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center; // 新增这一行
    max-width: 100% !important;
    height: 30px;
    line-height: 30px !important;
    margin-bottom: 10px;

    background-color: transparent;
    background-image: url('./images/image_tcbt.png');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: auto 100%;

    .modal-title {
      width: 100%;
      height: 30px;
      margin-left: 10px;
      text-align: left;
      color: #fff;
      font-size: 16px;
    }

    .modal-close {
      cursor: pointer;
      background-image: url('./images/close.png');
      width: 44px;
      height: 44px;
      background-color: transparent;
      background-size: 30%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .modal-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    margin-left: 10px;

    .item-div-cls {
      display: flex;
      align-items: center;
    }

    .item-title-cls {
      font-size: 14px;
      color: #fff;
    }

    .item-detail-cls {
      font-size: 14px;
      color: #fd9b27;
    }

    .item-detail-btn-cls {
      width: 72px;
      height: 24px;
      border-radius: 4px;
      background-color: #30a0ff;
      cursor: pointer;
      line-height: 24px;
      text-align: center;
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>
