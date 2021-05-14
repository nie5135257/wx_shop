// components/goods.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        path: {
            type: String,
            value: ''
        },
        data:{
            type: Object,
            value: {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        isAn: false,
        left: 0,
        top: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 跳转
        toPath(){
            wx.navigateTo({
                url: this.data.path+'?obj=' + JSON.stringify(this.data.data)
            });
        },
        // 添加
        addFn: function(){
            this.triggerEvent("countFn",{count: 'add', data: this.data.data});
            this.animFn()
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
                scale(1).
                left(_this.data.left).top(_this.data.top).
                step({duration: '0'})
                _this.setData({animation: _this.animation.export()})

                setTimeout(()=>{
                    // 执行
                    _this.animation.rotate(720).
                    scale(0).
                    left(-10).top('90%').
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
    }
})
