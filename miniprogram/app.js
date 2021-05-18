//app.js
App({
  onLaunch: function () {
    let that = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      // 初始化数据库
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'test-shop-4gobl4tb3c799836',
        traceUser: true,
      })
      
    }

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(res)
        var appid = 'wx53e656be0649de88'; //填写微信小程序appid
        var secret = '978dee2b312dc53382581d4eb3accb41'; //填写微信小程序secret 
 
        //调用request请求api转换登录凭证 
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid='+appid+'&secret='+secret+'&grant_type=authorization_code&js_code=' + res.code,
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log(res.data.openid) //获取openid
            // 设置 用户登录信息 openid
            that.globalData = {
              userInfo: res.data
            };
            
            // 获取用户数据库
            const users = wx.cloud.database().collection('users')
            // 查看用户是否存在 不存在则注册
            users.where({
              _openid: res.data.openid
            }).get({
              success(res){
                if(res.data.length==0){
                  // 注册
                  users.add({
                    data:{
                      _openid: res.data.openid,
                      shop: {
                        allMoney: 0,
                        allCount: 0,
                        type:{},
                        data: []
                      }
                    },
                    success(res){
                      console.log(res)
                      that.globalData._id = res._id
                    }
                  })
                }else{
                  that.globalData._id = res.data[0]._id
                }
              }
            })
          }
        }) 
      }
    })

    
  },
  globalData: {
    userInfo: null
  }
})
