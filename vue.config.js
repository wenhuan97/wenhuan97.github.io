// module.exports = {
//   devServer: {
//     // port: 8084,
//     host: '0.0.0.0',
//     https:false,
//     headers: {
//       'Access-Control-Allow-Origin':'*'
//     },
//     hotOnly:false,
//     disableHostCheck: true
//   }

// }
// vue.config.js
// 再来
// const ENV = process.env.NODE_ENV

// module.exports = {
//   publicPath: ENV === 'development' ? '' : '/wenhuan97.github.io/'
// }
module.exports = {
  publicPath: './',
  outputDir: 'docs'
}
