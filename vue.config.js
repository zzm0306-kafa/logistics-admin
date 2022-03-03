const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// 向预处理器 Loader 传递选项
module.exports = {
  css: {
    loaderOptions: {

      scss: {
        additionalData: '@import "~@/styles/variables.scss";'
      }
    }
  }
}
