// pages/farm/dingDanRes.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageFlag: true,// 是否为 支付成功页面
    code: 187816385,//订单编号
    time: '2020-09-21 13:44:31',//下单时间
  },
  // 查看订单
    tolist(){
        wx.switchTab({
            url: '/pages/list/list'
        })
    },
  // 返回首页
  toMain(){
        wx.switchTab({
            url: '/pages/main/main'
        })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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