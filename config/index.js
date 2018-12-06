module.exports = {
    dev: {
        env: require('./dev.env'),
        port: 8791,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api/': {
                target: 'http://gate.social.sinochem.vip/', // 社区
                // target: 'http://gate.social.chuantest.com/', // 社区
                changeOrigin: true
            }
        }
    }
}
