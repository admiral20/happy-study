module.exports = {
    dev: {
        port: 8086,
        // host: '0.0.0.0',
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api/': {
                // target: 'http://outersvr.sinochem.vip:8765/',
                target: 'http://gate.social.chuantest.com/',
                changeOrigin: true
            },
        }
    }
}
