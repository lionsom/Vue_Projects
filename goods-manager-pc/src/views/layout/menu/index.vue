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
        collapse="true"
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
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <!-- 产品管理 -->
        <el-submenu index="/manager">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>产品管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <!-- 订单管理 -->
        <el-submenu index="/order">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 产品分类 -->
        <el-submenu index="/goods">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>产品分类</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-menu-view',
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
// 从控制台中找到css类
.el-menu {
  border-right-width: 0px;
}

// 再找到
.is-active {
  background-color: #1e78bf !important;
}
</style>
