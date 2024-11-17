import myI18n from "../index";
import { computed } from 'vue';

export default function useLanguage() {

  const currentLocale = computed(() => {
    return myI18n.global.locale.value;
  });

  // 语言切换
  const changeLanguage = (language: string) => {
    // 检查 language 是否为 "zh" 或 "en"
    if (language === "zh" || language === "en") {
      myI18n.global.locale.value = language;
      document.title = translate('title') || '西山123';
    } else {
      myI18n.global.locale.value = 'zh';
      console.error("Invalid language value:", language);
      document.title = translate('title') ?? '西山123';
    }
  }

  //翻译
  const translate = (text: string) => {
    if (!text) return
    return myI18n.global.t(text)
  }

  return {
    currentLocale,
    changeLanguage,
    translate
  }
}