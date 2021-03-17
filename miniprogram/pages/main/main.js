// pages/main/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 轮播图
        bgSrc: [
            {
                src: 'cloud://test-shop-4gobl4tb3c799836.7465-test-shop-4gobl4tb3c799836-1305182803/banner1.png'
            },
            {
                src: 'cloud://test-shop-4gobl4tb3c799836.7465-test-shop-4gobl4tb3c799836-1305182803/banner2.png'
            }
        ],
       
        // 优惠卷
        discountsArr: [
            {
                all: 10, //满
                num: 1,//减
                count: 20,//数量
                time: '2020.02.03 - 2020.04.06',
                ts: '新人大礼包'
            },
            {
                all: 30, //满
                num: 20,//减
                count: 20,//数量
                time: '2020.02.03 - 2020.04.06'
            },
            {
                all: 50, //满
                num: 30,//减
                count: 20,//数量
                time: '2020.02.03 - 2020.04.06'
            },
            {
                all: 500, //满
                num: 300,//减
                count: 20,//数量
                time: '2020.02.03 - 2020.04.06'
            }
        ],

        // 店长优选
        goods: [
            {
                ttl: '汉堡套餐1111111111111111111111111111',//
                src: 'cloud://test-shop-4gobl4tb3c799836.7465-test-shop-4gobl4tb3c799836-1305182803/shop/t1.jpg',
                type: '招牌',//类型
                order: 3,//本店畅销第3名
                monthCounts: '888',//月销量
                goodRate: '100',//好评率
                money: '2',//打折
                oldMoney: '3',//标价
                packaging: '1',//包装费
                text: '为回馈广大新老客户，特推出特惠套餐',//商品描述
                element: ['鸡肉'],//原料
                comment: [ //评论
                    {
                        head: '',//头像
                        type: 'vip',
                        time: '2020-1-31 21:19',
                        isLike: true,//是否点赞
                        text: '',//评论内容
                        src: [//图片
                            '',
                            ''
                        ]
                    }
                ]
            }
        ]
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