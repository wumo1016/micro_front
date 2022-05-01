const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devtool: false,
  output: {
    publicPath: 'http://localhost:3001/'
  },
  devServer: {
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'teama',
      filename: 'remoteEntry.js',
      // library: { type: 'umd', name: 'teamaVar' },
      // 远程配置 key代表远程别名
      remotes: {
        teamb: 'teambVar@http://localhost:3002/remoteEntry.js' // 全局变量名@远程地址
      },
      shared: ['is-array']
    })
  ],
  experiments: {
    topLevelAwait: true
  }
}
