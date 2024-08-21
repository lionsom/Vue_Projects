<template>
  <div>

    <!-- 样式 -->
    <my-base-nav-bar :title="mytitle" :showLeftArrow="true" :isAutoBack="false" @click-left="onClickLeft"
      @click-right="onClickRight" />

    <!-- 样式 -->
    <my-base-nav-bar :title="mytitle" :showLeftArrow="true" :isAutoBack="false" @click-left="onClickLeft"
      @click-right="onClickRight">
      <!-- slot -->
      <van-icon name="search" color="red" size="20px" slot="my-right" />
    </my-base-nav-bar>

    <!-- 样式 -->
    <my-base-nav-bar :title="mytitle" :showLeftArrow="true" :isAutoBack="false" @click-left="onClickLeft"
      @click-right="onClickRight">
      <!-- slot -->
      <template slot="my-right">
        <div style="width: 20px; background-color: aqua; margin-right: 10px;" @click="customRightClick1">
          <van-icon name="search" />
        </div>
        <div style="width: 20px; background-color: red;" @click="customRightClick2">
          <van-icon name="search" />
        </div>
      </template>
    </my-base-nav-bar>

  </div>
</template>

<script>

export default {
  name: 'BaseNavBarUsagePage',
  created() {

  },
  data() {
    return {
      mytitle: '我是老大'
    }
  },
  methods: {
    onClickLeft(param) {
      console.log('点击了111', param);
    },
    onClickRight() {
      console.log('点击了222');
    },
    customRightClick1() {
      console.log('自定义点击了111');
    },
    customRightClick2() {
      console.log('自定义点击了222');
    }
  }


}
</script>

<style lang="scss" scoped></style>