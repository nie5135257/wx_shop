const cloud = require('wx-server-sdk')
cloud.init({
  env: 'test-shop-4gobl4tb3c799836'
})

exports.main = async (event) => {
  
  // 如果云函数所在环境为 abc，则下面的调用就会请求到 abc 环境的数据库
  const data = await cloud.database().collection('test').get()

  return data
}