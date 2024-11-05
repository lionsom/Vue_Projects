import { ref, onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash'

export default function useDeviceType() {

  const isMobile = ref(false);

  onMounted(() => {
    isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)
    window.addEventListener('resize', throttledResizeHandler);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', throttledResizeHandler);
  });

  // 处理 resize 事件的回调
  const handleResize = () => {
    console.log('Window resized');
  };

  // 使用 throttle 限制每 200 毫秒触发一次
  const throttledResizeHandler = debounce(handleResize, 200);

  return { isMobile };
}