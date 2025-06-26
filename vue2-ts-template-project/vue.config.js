const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue2-demos/' : '/',
  /*
  // 启用模板编译器（会增加包体积）
  runtimeCompiler: true, 
  // 等价于
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  },
  */
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
