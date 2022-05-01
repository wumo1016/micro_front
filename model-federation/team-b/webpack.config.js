const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devtool: false,
  devServer: {
    port: 3002
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'teamb', // 应用的唯一标识
      filename: 'remoteEntry.js', // 生成的文件名 给别人用的
      library: {
        type: 'umd',
        name: 'teambVar' // 暴露一个全局变量
      },
      // 作为容器向外暴露的模块或组件 key就是别名
      exposes: {
        './dropdown': './src/dropdown.js',
        './button': './src/button.js'
      },
      shared: ['is-array'] // 容器和组件共享的模块
    })
  ],
  experiments: {
    topLevelAwait: true
  }
}
