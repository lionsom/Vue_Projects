<template>
  <div>
    <div class="menu-list">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#112f50"
        text-color="#fff"
        active-text-color="#ebe234"
        router
        :collapse="isCollapse"
      >
        <!-- 标题 -->
        <el-menu-item index="">
          <span
            slot="title"
            style="
              display: block;
              text-align: center;
              align-items: center;
              background-color: transparent;
              font-size: 20px;
            "
            >采购系统</span
          >
        </el-menu-item>

        <!-- 首页 -->
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <!-- 产品管理 -->
        <el-submenu index="/product">
          <template slot="title">
            <i class="el-icon-s-management"></i>
            <span>产品管理</span>
          </template>
          <el-menu-item index="/product/list">
            <span slot="title">产品列表</span>
          </el-menu-item>
          <el-menu-item index="/product/category">产品分类</el-menu-item>
        </el-submenu>

        <!-- 订单管理 -->
        <el-submenu index="/order">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item index="/order/list">订单列表</el-menu-item>
          <el-menu-item index="/order/collect">订单汇总</el-menu-item>
        </el-submenu>

        <!-- 广告分类 -->
        <el-submenu index="/advert">
          <template slot="title">
            <i class="el-icon-s-opportunity"></i>
            <span>广告管理</span>
          </template>
          <el-menu-item index="/advert/list">广告列表</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-menu-view',
  props: ['isCollapse'],
  methods: {
    handleOpen(row) {
      console.log('open', row, this.$route.path)
    },
    handleClose(row) {
      console.log('close', row)
    }
  }
}
</script>

<style lang="less" scoped>
.menu-list {
  overflow: hidden;
}

// 从控制台中找到css类
.el-menu {
  border-right-width: 0px;
}

// 再找到
.is-active {
  background-color: #1e78bf !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
