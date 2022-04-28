const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3001
  },
  configureWebpack: {
    output: {
      library: 'singleVue',
      libraryTarget: 'umd'
    }
  }
})
