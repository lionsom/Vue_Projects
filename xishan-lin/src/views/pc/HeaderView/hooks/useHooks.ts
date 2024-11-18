import { onMounted } from 'vue'
import { ElNotification, ElMessage } from 'element-plus'
// i18n
import useLanguage from '@/language/hooks/useLanguage'
import { useThemeStore } from '@/stores/themeStore'
//
const { changeLanguage } = useLanguage()

export default function useHooks() {
  onMounted(() => {
    console.log('useHooks')
  })

  const handleDropdownCommand = (command: string | number | object) => {
    console.log(command)
    switch (command) {
      case 'zh':
        changeLanguage('zh')
        ElMessage({
          message: '切换为中文! Success!!!》',
          type: 'success',
          offset: 50,
          duration: 1500
        })
        break
      case 'en':
        changeLanguage('en')
        ElMessage({
          message: 'Switch to English. Success!!!',
          type: 'success',
          offset: 50,
          duration: 1500
        })
        break
      case 'ja':
        ElNotification({
          title: '暂不支持',
          type: 'warning',
          offset: 50,
          duration: 1500
        })
        break
      default:
        break
    }
  }

  const handleChangeLanguage = (isZh: boolean) => {
    if (isZh) {
      changeLanguage('zh')
      ElMessage({
        message: '切换为中文! Success!!!》',
        type: 'success',
        offset: 50,
        duration: 1500
      })
    } else {
      changeLanguage('en')
      ElMessage({
        message: 'Switch to English. Success!!!',
        type: 'success',
        offset: 50,
        duration: 1500
      })
    }
  }

  const changeTheme = (e: any) => {
    console.log('changeTheme', e)
  }

  return {
    handleDropdownCommand,
    handleChangeLanguage,
    changeTheme
  }
}
