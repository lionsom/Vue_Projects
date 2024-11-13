<script lang="ts">
export default {
  name: 'HeaderView'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const switchValue = ref(true)

// const currentIndex = ref(0); // 当前预览的图片索引
// const visible = ref(true); // 控制图片预览框的显示

// const images = [AA];
// const images = ref<string[]>([]);
// images.value.push('@/assets/images/common/avatar.jpeg');

const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

const changeLang = () => {
  //
  ElMessage({
    message: '切换语言',
    type: 'success',
  })
}

const showBook = () => {
  //
  ElMessage({
    message: '《书籍》',
    type: 'success',
  })
}

const avatarClick = () => {

}

</script>

<template>
  <div class="main-view">
    <div class="left-view">
      <img src="@/assets/images/common/logo.svg" alt="">
      <div class="title">
        西山
      </div>
    </div>
    <div class="right-view">

      <el-dropdown>
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="日月">Action 1</el-dropdown-item>
            <el-dropdown-item command="e">Action 2</el-dropdown-item>
            <el-dropdown-item command="e">Action 3</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-button @click="showBook" link>书籍</el-button>
      <el-button @click="changeLang" link>切换语音</el-button>
      <el-switch v-model="switchValue">
        <template #active-action>
          <span class="custom-active-action">T</span>
        </template>
        <template #inactive-action>
          <span class="custom-inactive-action">F</span>
        </template>
      </el-switch>

      <!-- avatar -->
      <el-image class="avatar-cls" :src="srcList[0]" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
        :preview-src-list="srcList" :initial-index="4" z-index="9999" preview-teleported="true" fit="cover" @click="avatarClick" circle />

    </div>
  </div>


  <!-- <el-image-viewer /> -->


</template>


<style scoped lang="scss">
:deep(.el-button) {
  margin-left: 0px;
}

.main-view {
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 0 20px;
  background-color: #f5f5f5;


  .left-view {
    display: flex;
    // justify-content: left;
    width: 200px;

    img {
      height: 80%;
      aspect-ratio: 1 / 1;
      /* 宽高比为 1:1 */
      background-color: rebeccapurple;
      border-radius: 50%;
      margin-top: calc(var(--header-height) * 0.1);
    }

    .title {
      line-height: var(--header-height);
      margin-left: 15px;
      background-color: transparent;
      width: 100px;
    }
  }

  .right-view {
    display: flex;
    justify-content: right;
    align-items: center; // 垂直居中
    gap: 15px;

    .avatar-cls {
      width: 40px;
      height: 40px;
      border: 0px;
      border-radius: 50%;
      // background-image: url('@/assets/images/common/avatar.jpeg');
      // background-repeat: no-repeat;
      // background-size: cover;
      // background-position: center center;
    }
  }
}
</style>