var app = new Vue({
    // 挂载到el中的元素上
    el: '#app',
    // 最基础的数据，也是所有的数据
    data: {
        /*
        我们需要一个列表，包含商品名称，单价，购买数量,在实际中
        这个数据应该通过ajax从服务端动态获取
         */
        list: [
            {
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1,
                picked: false
            },
            {
                id: 2,
                name: 'iPad pro',
                price: 5888,
                count: 1,
                picked: false
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1,
                picked: false
            }
        ]
    },
    // 计算属性computed
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++){
                var item = this.list[i];
                if (item.picked){
                    total += item.price * item.count; // 总价等于单价乘以数量
                }
            }
            // 这里应用到了正则匹配，千位分隔符
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    // 方法methods，我们写的函数
    methods: {
        handleReduce: function (index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function (index) {
            this.list[index].count++;
        },
        handleRemove: function (index) {
            this.list.splice(index, 1);
        }
    }
});
