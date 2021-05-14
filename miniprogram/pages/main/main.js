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
                id: 'id1',//
                ttl: 'id1',//
                src: 'cloud://test-shop-4gobl4tb3c799836.7465-test-shop-4gobl4tb3c799836-1305182803/shop/t1.jpg',
                type: '招牌',//类型
                order: 3,//本店畅销第3名
                monthCounts: '888',//月销量
                goodRate: '100',//好评率
                money: '2',//打折后价格
                oldMoney: '3',//标价
                discount: '2.56',//打折（2.56折）
                limitCount: '限一份',//限量 剩余3份
                packaging: '1',//包装费
                text: '为回馈广大新老客户，特推出特惠套餐',//商品描述
                element: ['鸡肉'],//原料
                comment: [ //评论
                    {
                        head: 'cloud://test-shop-4gobl4tb3c799836.7465-test-shop-4gobl4tb3c799836-1305182803/user.png',//头像
                        name: '匿名用户',
                        type: 'vip',
                        time: '2020-1-31 21:19',
                        rate: 3,//是否点赞
                        text: '啊啊啊啊',//评论内容
                        src: [//图片
                        ]
                    },
                    {
                        head: 'cloud://test-shop-4gobl4tb3c799836.7465-test-shop-4gobl4tb3c799836-1305182803/user.png',//头像
                        name: '匿名用户',
                        type: 'vip',
                        time: '2020-1-31 21:19',
                        rate: 5,//是否点赞
                        text: '啊啊啊啊',//评论内容
                        src: [//图片
                            'cloud://test-shop-4gobl4tb3c799836.7465-test-shop-4gobl4tb3c799836-1305182803/user.png',
                            'cloud://test-shop-4gobl4tb3c799836.7465-test-shop-4gobl4tb3c799836-1305182803/user.png'
                        ]
                    }
                ]
            },
            {
                id: 'id2',//
                ttl: 'id2',//
                src: 'cloud://test-shop-4gobl4tb3c799836.7465-test-shop-4gobl4tb3c799836-1305182803/shop/t1.jpg',
                type: '招牌',//类型
                order: 3,//本店畅销第3名
                monthCounts: '888',//月销量
                goodRate: '100',//好评率
                money: '2',//打折后价格
                oldMoney: '3',//标价
                discount: '2.56',//打折（2.56折）
                limitCount: '限一份',//限量 剩余3份
                packaging: '1',//包装费
                text: '为回馈广大新老客户，特推出特惠套餐',//商品描述
                element: ['鸡肉'],//原料
                comment: [ //评论
                ]
            },
            {
                id: 'id3',//
                ttl: 'id3',//
                src: 'cloud://test-shop-4gobl4tb3c799836.7465-test-shop-4gobl4tb3c799836-1305182803/shop/t1.jpg',
                type: '招牌',//类型
                order: 3,//本店畅销第3名
                monthCounts: '888',//月销量
                goodRate: '100',//好评率
                money: '2',//打折后价格
                oldMoney: '3',//标价
                discount: '2.56',//打折（2.56折）
                limitCount: '限一份',//限量 剩余3份
                packaging: '1',//包装费
                text: '为回馈广大新老客户，特推出特惠套餐',//商品描述
                element: ['鸡肉'],//原料
                comment: [ //评论
                ]
            }
        ],
        // 购物车
        showShop: false,//是否显示购物车
        shop: {
            allMoney: 0,
            allCount: 0,
            type:{

            },
            data: [

            ]
        }
    },
    // 显示购物车
    shopFn: function(){
        console.log(7777)
        this.setData({
            showShop: true
        })
    },
    // 隐藏购物车
    onClose: function(){
        this.setData({
            showShop: false
        })
    },
    // 添加购物车
    countFn(e){
        console.log(e.detail)
        
        const testDB = wx.cloud.database();
        const db_shop = testDB.collection('shop');
        db_shop.add({
            data: {
                id: '',
                test: '111'
            }
        }).then(res => {
            console.log(res)
          })

        // 添加购物车类型数据
        let key = e.detail.data.id
        if(this.data.shop.type[key]){ 
            if(e.detail.count == 'add'){
                this.data.shop.type[key][1] +=  1
            }else{
                this.data.shop.type[key][0] =  e.detail.count
            }
            if(e.detail.count == 0 && this.data.shop.type[key][1] == 0){
                for(let i = 0; i<this.data.shop.data.length; i++){
                    console.log(key)
                    if(this.data.shop.data[i].id == key){
                      this.data.shop.data.splice(i,1);
                      break;
                    }
                }
                delete this.data.shop.type[key]
                this.setData({
                    shop: this.data.shop
                })
            }
        }else{
            if(e.detail.count == 'add'){
                this.data.shop.type[key] = [0,1,e.detail.data.money]
            }else{
                this.data.shop.type[key] = [1,0,e.detail.data.money]
            }
            this.data.shop.data.push(e.detail.data)
        }
        
        // 重置
        this.data.shop.allCount = 0
        this.data.shop.allMoney = 0
        // 计算总金额 总共购买个数
        for (const key in this.data.shop.type) {
            this.data.shop.allCount += (this.data.shop.type[key][0] + this.data.shop.type[key][1])
            this.data.shop.allMoney += (this.data.shop.type[key][0]*this.data.shop.type[key][2] + this.data.shop.type[key][1]*this.data.shop.type[key][2])
        }
        this.data.shop.allMoney = this.data.shop.allMoney*100

        // 同步购买份额
        if(e.detail.count !='add'){
            
            for(let i = 0; i < this.data.goods.length; i++){
                if(e.detail.data.id == this.data.goods[i].id){
                    this.data.goods[i].count = e.detail.count
                }
            }
            for(let i = 0; i < this.data.shop.data.length; i++){
                if(e.detail.data.id == this.data.shop.data[i].id && e.detail.count!=0){
                    console.log(this.data.shop.data[i])
                    this.data.shop.data[i].count = e.detail.count
                }
            }
            this.setData({
                goods: this.data.goods
            })
            console.log(this.data.shop)
        }

        this.setData({
            shop: this.data.shop
        })
    },

    // 提交按钮
    onClickButton: function(){
        console.log(22222)
        this.data.goods[0].count = 3
        this.setData({
            goods: this.data.goods
        })
    },
    toPath(){
        console.log(11111111)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        for(let i = 0; i<this.data.goods.length; i++){
            this.data.goods[i].count = 0
         
        }
        this.setData({
            goods: this.data.goods
        })
    }
})