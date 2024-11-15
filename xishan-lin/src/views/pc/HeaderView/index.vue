<script lang="ts">
export default {
  name: 'HeaderView'
}
</script>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
// hooks
import useHooks from './hooks/useHooks'
// language
import useLanguage from '@/language/hooks/useLanguage';
//
const { handleDropdownCommand, handleChangeLanguage, changeTheme, openPDFViewr } = useHooks();
const { currentLocale } = useLanguage()

const switchValue = ref(true)

const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

const currentLanguageName = ref('中文')
watch(currentLocale, (newValue: any) => {
  newValue === 'zh' ? currentLanguageName.value = '中文' : currentLanguageName.value = 'English';
  newValue === 'zh' ? switchValue.value = true : switchValue.value = false;
})

onMounted(() => {
  //
  console.log('currentIndex', currentLocale.value);
})

const showLinks = () => {
  ElMessage({
    message: '跳转链接',
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
        {{ $t('title') }}
      </div>
    </div>
    <div class="right-view">

      <el-button @click="showLinks" link>链接</el-button>

      <el-dropdown class="el-dropdown-cls" @command="openPDFViewr">
        <span class="el-dropdown-link">
          {{  $t('navi.books') }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="一">《第一卷》</el-dropdown-item>
            <el-dropdown-item command="二">《第二卷》</el-dropdown-item>
            <el-dropdown-item command="三">《第三卷》</el-dropdown-item>
            <el-dropdown-item command="四">《第四卷》</el-dropdown-item>
            <el-dropdown-item command="五">《全卷》</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!-- 主题色 -->
      <el-dropdown class="el-dropdown-cls" @command="handleDropdownCommand">
        <span class="el-dropdown-link">
          {{ currentLanguageName }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="light">白天模式</el-dropdown-item>
            <el-dropdown-item command="night">夜晚模式</el-dropdown-item>
            <el-dropdown-item command="system">跟随系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      
      <!-- language 方式一 -->
      <el-switch v-model="switchValue" @change="handleChangeLanguage">
        <template #active-action>
          <span>中</span>
        </template>
        <template #inactive-action>
          <span>En</span>
        </template>
      </el-switch>

      <!-- language 方式二 -->
      <el-dropdown class="el-dropdown-cls" @command="handleDropdownCommand">
        <span class="el-dropdown-link">
          <!-- {{ $t('common.changeLanguage') }} -->
          {{ currentLanguageName }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
            <el-dropdown-item command="ja">日本語</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!-- avatar -->
      <el-image class="avatar-cls" :src="srcList[0]" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
        :preview-src-list="srcList" :initial-index="4" :z-index=9999 :preview-teleported=true fit="cover"
        @click="avatarClick" circle />

    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/element-plus-styles/el-button-scoped.scss';
@use '@/assets/styles/element-plus-styles/el-dropdown-scoped.scss';
@use '@/assets/styles/element-plus-styles/el-switch-scoped.scss';
</style>

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
    margin-left: 10px;

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

    .el-dropdown-cls {
      :hover {
        cursor: pointer;
      }

      height: 100%;

      .el-dropdown-link {
        display: flex;
        align-items: center;
        height: 100%;
        font-weight: 600;

        .el-icon--right {
          margin-left: 5px;
        }

        .el-icon {
          height: 16px;
          width: 16px;
          line-height: 100%;

          svg {
            height: 100%;
            width: 100%;
          }
        }
      }
    }

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