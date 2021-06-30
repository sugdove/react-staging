const proxy = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
    proxy('/api',{
      target:'http://localhost:5000', // 当遇到/api就会触发到5000端口的代理
      changeOrigin: true, // 控制服务器接收的请求头中的Host值 true接收5000 false接收真实的Host
      pathRewrite: { '^/api': '' } // 重写路由路径
    }),
    proxy('/api2',{
      target:'http://localhost:5200',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    })
  )
}