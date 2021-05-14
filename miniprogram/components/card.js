// components/card.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        path: {
            type: String,
            value: ''
        },
        data: { //标题
            type: Object,
            value: {
                
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        discount: '00.00',
        money: '00',
        money1: '00',
        oldMoney: '00',
        oldMoney1: '00',
        count: 0,
        isAn: false,
        left: 0,
        top: 0
    },
    lifetimes: {
        attached: function() {
            // 在组件实例进入页面节点树时执行
            var discount = (Number(this.data.data.money)/Number(this.data.data.oldMoney)*10).toFixed(2)
            var money = Number(this.data.data.money).toFixed(2)
            var oldMoney = Number(this.data.data.oldMoney).toFixed(2)
            this.setData({
                "money": money.toString().split('.')[0],
                "money1": money.toString().split('.')[1],
                "oldMoney": oldMoney.toString().split('.')[0],
                "oldMoney1": oldMoney.toString().split('.')[1],
                "discount": discount
            })

            
        },
        detached: function() {
          // 在组件实例被从页面节点树移除时执行
        },
    },
    
    /**
     * 组件的方法列表
     */
    methods: {
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
                scale(1).
                left(_this.data.left).top(_this.data.top).
                step({duration: '0'})
                _this.setData({animation: _this.animation.export()})

                setTimeout(()=>{
                    // 执行
                    _this.animation.rotate(720).
                    scale(0).
                    left(0).top('91%').
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
        toPath(){
            wx.navigateTo({
                url: this.data.path+'?obj=' + JSON.stringify(this.data.data)
            });
        },
        // 首次添加
        add1Fn(){
            this.setData({
                'data.count': 1
            })
            this.triggerEvent("countFn",{count:this.data.data.count,data:this.data.data});
            this.animFn()
        },
        // 输入事件
        iptFn(e){
            if(this.data.data.count == e.detail)
                return;
            this.setData({
                'data.count': Number(e.detail)
            })
            this.triggerEvent("countFn",{count:this.data.data.count,data:this.data.data});
        },
        addFn: function(){
            this.animFn()
        },
        jianFn: function(){
        }
    }
})
