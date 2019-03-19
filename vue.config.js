
module.exports = {
  pages: {
    index: {
      entry: './src/main.js'
    }
  },
  devServer: {
    port: 8799,
    proxy: {
      '/api/': {
        target: 'http://gate.social.sinochem.vip/',
        // target: 'http://gate.social.chuantest.com/',
        changeOrigin: true
      }
    }
  }
}
