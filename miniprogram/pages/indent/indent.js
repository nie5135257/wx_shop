// pages/indent/indent.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shop: {},//购物车
        allMoneyFixed: '',//总价钱小数点后数值
        code: '18964467347759',//订单编号
        time: '',//创建时间戳
        createTime: '',//创建时间
        show_loading: false,//是否加载完毕
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this
        that.setData({
            show_loading: true
        })
        let db_users = wx.cloud.database().collection('users');
        setTimeout(()=>{
            db_users.doc(getApp().globalData._id).get({
                success(res){
                    console.log(res)
                    let x = (res.data.shop.allMoney%1).toFixed(2).toString().split('.')[1];
                   
                    console.log(x)
                    that.setData({
                        shop: res.data.shop,
                        allMoneyFixed: x
                    })
                    // wx.hideLoading()
                    that.setData({
                        show_loading: false
                    })
                }
            })
        },1000)
        
        let createTime = ''
        let time = getApp().getTime();
        let dates = getApp().getDate(time)
        createTime = dates.yy + '.' + dates.mm + '.' + dates.dd + '  ' + dates.hh + ':' + dates.mn
        this.setData({
            time: time,
            code: time,
            createTime: createTime
        })
    },
    // 赋值订单编号
    copy: function(e){
        let that = this;
        wx.setClipboardData({
            data: that.data.code,
            success: function (res) {
                wx.getClipboardData({
                    success: function (res) {
                        wx.showToast({
                            title: '复制成功'
                        })
                    }
                 })
            }
        })
    },
    // 取消
    cancel: function(){
        wx.navigateBack({
          delta: 0,
        })
    },
    // 提交支付订单
    submit: function(){
        wx.navigateTo({
          url: './res',
        })
    }
})