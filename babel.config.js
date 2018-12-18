// module.exports = {
//   presets: [
//     '@vue/app'
//   ]
// }

module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      '@vue/app'
    ],
    plugins: [
      ['import', {
        'libraryName': 'muse-ui',
        'libraryDirectory': 'lib',
        'camel2DashComponentName': false
      }]
    ]
  }
}
