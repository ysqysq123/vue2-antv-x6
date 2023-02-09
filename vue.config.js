const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   port: 8080,
  //   headers: {
  //     'Access-Control-Allow-Origin': 'http://hn216.api.yesapi.cn',
  //     'Access-Control-Allow-Credentials': true
  //   }
  // 
})
// module.exports = {
//   devServer: {
//       proxy: {
//           '^/api': {
//               target: 'http://hn216.api.yesapi.cn/',//接口的前缀
//               ws:true,//代理websocked
//               changeOrigin:true,//虚拟的站点需要更管origin
//               pathRewrite:{
//                   '^/api':''//重写路径
//               }
//           }
//       }
//   }
// }
