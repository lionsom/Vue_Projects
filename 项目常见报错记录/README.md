# 报错一

Vue项目报错： Component name “xxx“ should always be multi-word vue/multi-word-component-names

![](images/001.png)

**原因**

在配置完 [ESlint](https://so.csdn.net/so/search?q=ESlint&spm=1001.2101.3001.7020) 后，要求代码格式规范的同时，也规定了组件的名称格式，要写成 “XXXName”的格式，不能是单个单词。

**处理**

所以除了改名，另一种解决方法是在 vue.config.js 文件中加一行

```js
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false   // 新增一行
})
```



# 报错二

![](images/002.png)

**原因**

组件模板应该只包含一个根元素

**处理**

写一个根div



# 警告一

运行成功，控制台提示当前Vue为开发版本

![](images/003.png)

**处理**

Vue.config.productionTip = false

























