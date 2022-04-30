const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '//localhost:3001/', // 保证子应用的静态资源都是向3001发送的
  transpileDependencies: true,
  devServer: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },

  },
  configureWebpack: {
    output: {
      library: 'm-vue',
      libraryTarget: 'umd'
    }
  }
})
