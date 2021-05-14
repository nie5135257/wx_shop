// pages/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index: 1,//tab索引值 0:详情 1:评价
        isAn: false,//是否开启动画
        left: 0, //动画初始化left
        top: 0, //动画初始化top

        good: {},//数据

        showShop: false,//是否显示购物车
        shop: {
            allMoney: 0,
            allCount: 0,
            type:{},
            data: []
        }
    },
    // tab切换
    tabFn(e){
        let index = e.currentTarget.dataset.index
        this.setData({
            index: index
        })
    },
    // 首次添加
    add1Fn(){
        this.setData({
            'good.count': 1
        })
        this.countFn(1,{count:this.data.good.count,data:this.data.good})
        this.animFn()
    },
    // 输入事件
    iptFn(e){
        if(this.data.good.count == e.detail)
            return;
        this.setData({
            'good.count': Number(e.detail)
        })
        this.countFn(1,{count:this.data.good.count,data:this.data.good});
    },
    // 点击添加按钮
    addFn: function(){
        this.animFn()
    },
    // 点击减小按钮
    jianFn: function(){
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
    countFn(e,obj){
        
        if(e==1){
            e = {
                type: 1,
                detail: obj
            }
        }
        console.log(e.detail)
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
            
            this.data.good.count = e.detail.count

            for(let i = 0; i < this.data.shop.data.length; i++){
                if(e.detail.data.id == this.data.shop.data[i].id && e.detail.count!=0){
                    console.log(this.data.shop.data[i])
                    this.data.shop.data[i].count = e.detail.count
                }
            }
            this.setData({
                good: this.data.good
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
      
    },
    // 动画
    animFn(){
        if(this.data.isAn){
            return
        };
        this.animation = wx.createAnimation()
        let _this = this
        
        const query = wx.createSelectorQuery().in(this)
        setTimeout(function(){
        query.select('#animation').boundingClientRect(function(res){
                _this.setData({
                    left: res.left,
                    top: res.top
                })
                
            // 开始
            _this.setData({
                isAn: true
            })
            _this.animation.rotate(0).
            scale(0.5).
            left(_this.data.left).top(_this.data.top).
            step({duration: '0'})
            _this.setData({animation: _this.animation.export()})

            setTimeout(()=>{
                // 执行
                _this.animation.
                rotate(1440).
                scale(0).
                left('-40%').top('80%').
                step({duration: '1500'})
                _this.setData({animation: _this.animation.export()})
            },100)

            // 结束
            setTimeout(()=>{
                _this.setData({
                    isAn: false,
                })
                _this.animation.rotate(-720).
                scale(1).
                left(0).top(0).
                step({duration: '10'})
                _this.setData({animation: _this.animation.export()})
            },1700)

            }).exec()
        },100)

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let obj = JSON.parse(options.obj)
        this.setData({
            good: obj
        })
    }

})