module.exports = {
  devServer(config) {
    config.headers = {
      'Access-Control-Allow-Origin': '*'
    }
    return config
  },
  webpack(config) {
    config.output.library = 'm-react'
    config.output.libraryTarget = 'umd'
    config.output.publicPath = '//localhost:3002/'
    return config
  }
}
