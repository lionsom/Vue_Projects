import myI18n from "../index";
import { computed } from 'vue';

export default function useLanguage() {

  const currentLocale = computed(() => {
    return myI18n.global.locale.value;
  });

  // 语言切换
  const changeLanguage = (language: string) => {
    // 检查 language 是否为 "zh" 或 "ja"
    if (language === "zh" || language === "ja") {
      myI18n.global.locale.value = language;
      document.title = translate('common.documentTitle') || '調査報告書の内容';
    } else {
      myI18n.global.locale.value = 'zh';
      console.error("Invalid language value:", language);
      document.title = translate('common.documentTitle') || '查勘报告详情';
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