import { onMounted } from "vue";
import { ElNotification } from 'element-plus'
// i18n
import useLanguage from '@/language/hooks/useLanguage';
import { useThemeStore } from "@/stores/themeStore";
//
const { changeLanguage } = useLanguage()
const { theme } = useThemeStore()
export default function useHooks() {

  onMounted(() => {
    console.log('useHooks')
  })

  const handleDropdownCommand = (command: string | number | object) => {
    console.log(command);
    switch (command) {
      case 'zh':
        changeLanguage('zh');
        ElNotification({
          title: '切换为中文! Success!!!',
          type: 'success',
          offset: 50,
          duration: 1500,
        })
        break;
      case 'en':
        changeLanguage('en');
        ElNotification({
          title: 'Switch to English. Success!!!',
          type: 'success',
          offset: 50,
          duration: 1500,
        })
        break;
      case 'ja':
        ElNotification({
          title: '暂不支持',
          type: 'warning',
          offset: 50,
          duration: 1500,
        })
        break;
      default:
        break;
    }
  }

  const changeTheme = (e: any) => {
    console.log('changeTheme', e);
    
  }
  
  return {
    handleDropdownCommand,
    changeTheme
  }
}