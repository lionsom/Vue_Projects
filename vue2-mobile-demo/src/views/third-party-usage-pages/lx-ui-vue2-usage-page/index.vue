<template>
  <div class="mainPage">
    <my-base-nav-bar title="lx ui vue2" :showLeftArrow="true" :isAutoBack="true" />

    <lx-success-button>自制的npm包的按钮</lx-success-button>

    <lx-success-button class="success-button">成功</lx-success-button>
    <lx-warning-button>警告</lx-warning-button>
    <lx-fail-button>失败</lx-fail-button> -->

    <lx-success-button>成功</lx-success-button>
    <lx-warning-button>警告</lx-warning-button>
    <lx-fail-button>失败</lx-fail-button>

    <lxSuccessButton>234</lxSuccessButton>
  </div>
</template>

<script>
import { lxSuccessButton, lxWarningButton, lxFailButton } from 'lx-ui-vue2'

export default {
  name: 'lx-ui-vue2-usage-page',
  components: {
    lxSuccessButton,
    lxWarningButton,
    lxFailButton
  }
}
</script>

<style lang="scss" scoped>
.mainPage {
  // .success-button {
  //   margin: 10px auto;
  //   background-color: darkblue;
  //   width: 100px;
  //   height: 80px;
  // }
}
</style>
