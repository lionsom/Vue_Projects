import { ref, onMounted, onUnmounted } from 'vue'

export default function useDeviceType() {

  const isMobile = ref(false);

  const handleResize = () => {
    isMobile.value = window.innerWidth < 768;
  };

  onMounted(() => {
    isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return { isMobile };
}