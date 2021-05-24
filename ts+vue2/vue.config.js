const path = require('path')


module.exports = {
  devServer: {
    port: devServerPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: {
    // }
  },
  lintOnSave: false,
}
