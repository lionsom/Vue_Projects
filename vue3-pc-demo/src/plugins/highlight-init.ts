// highlight的样式，依赖包，组件
import 'highlight.js/lib/common'
import hljs from 'highlight.js'
import hljsVuePlugin from "@highlightjs/vue-plugin";
// 主题
import 'highlight.js/styles/stackoverflow-light.css';
// 语言
import javascript from 'highlight.js/lib/languages/javascript';

// 类型声明
import type { App } from 'vue';

/**
 * 初始化代码高亮
 * @param app main.ts传入app对象
 */
function initHighlightJS(app: App) {
  // Then register the languages you need
  hljs.registerLanguage('javascript', javascript);

  // 自定义一个代码高亮指令
  app.directive('highlight', function (el: any) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
      hljs.highlightBlock(block)
    })
  })

  // 注意Vue2的directive是挂在Vue上的，Vue3中无法直接引入Vue但可以挂在app上
  app.directive('highlight', function (el: any) {
    let highlight = el.querySelectorAll('pre code');
    highlight.forEach((block: any) => {
      // Deprecated as of 10.7.0. highlightBlock will be removed entirely in v12.0
      // Deprecated as of 10.7.0. Please use highlightElement now.
      hljs.highlightElement(block);
    })
  });

  // 注册组件
  app.use(hljsVuePlugin)
}

export default initHighlightJS
