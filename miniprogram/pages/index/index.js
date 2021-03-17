// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img: '',
        id: ''
    },
    img: function(){
        let that = this
        wx.cloud.downloadFile({
            fileID: that.data.id, // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              that.setData({
                  img: res.tempFilePath
              })
            },
            fail: console.error
          })
    },
    test: function(){
        console.log('aaa')
        let that = this
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success (res) {
              // tempFilePath可以作为img标签的src属性显示图片
              const tempFilePaths = res.tempFilePaths
              console.log(res)
              wx.cloud.uploadFile({
                cloudPath: 'test/example.png',
                filePath: tempFilePaths[0], // 文件路径
                success: res => {
                  // get resource ID
                  console.log(res.fileID)
                  that.setData({
                      id: res.fileID
                  })
                },
                fail: err => {
                    console.log(err)
                  // handle error
                }
            })
            }
          })
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
       
      wx.cloud.callFunction({
          name: 'add',      
            data:{    
                a: 1,  
                b:2   
            }
      }).then(res=>{
          console.log(res)
      },err=>{
          console.log(err)
      })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})