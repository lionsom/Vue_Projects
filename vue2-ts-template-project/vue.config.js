const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue2-demos/' : '/1234/',
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
  },
})
