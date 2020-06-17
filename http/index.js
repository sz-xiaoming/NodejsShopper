var express        = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function(req, res) {
    res.send('index report_shopper');
});

/**
 * 商品浏览量
 */
router.get('/goods/browse', function(req, res){
    var data = {"success":true,"message":"查询成功","data":[
        {"time":"2017-11-03","count":63},{"time":"2017-11-04","count":123},
        {"time":"2017-11-05","count":12},{"time":"2017-11-06","count":312},{"time":"2017-11-07","count":123},
        {"time":"2017-11-08","count":24},{"time":"2017-11-09","count":123},{"time":"2017-11-10","count":10}]};
    res.send(data);        
});

/**
 * 商品售卖排行
 */
router.get('/goods/hosts', function(req, res){
    var data = {"success":true,"message":"查询成功","data":[
        {"goodsName": "雷柏（Rapoo） V500L 升级版混光机械键盘 ", "count":56, "httpUrl":"https://img14.360buyimg.com/n1/s180x180_jfs/t3115/169/2543205056/266556/a4543895/57e2514dN4d1d5740.jpg"},
        {"goodsName": "东芝（TOSHIBA）V8 CANVIO高端系列 2.5英寸 移动硬盘", "count":56, "httpUrl":"https://img13.360buyimg.com/n2/jfs/t4123/348/1493270688/100664/4b5582f/58c24a31N17b4feb2.jpg"},
        {"goodsName": "沃野专业电竞守望先锋lol逆战cf金属机械2代", "count":56, "httpUrl":"https://img12.360buyimg.com/n2/jfs/t3103/68/5538795245/324642/171e61c/58735ccaNd181288f.jpg"},
        {"goodsName": "华硕（ASUS）傲世V221IC 21.5英寸一体机电脑", "count":56, "httpUrl":"https://img13.360buyimg.com/n2/jfs/t9856/205/1894479374/222070/7ad35f8a/59e9556cN4952bbd8.jpg"},
        {"goodsName": "机械革命（MECHREVO）NX7-400 台式游戏电脑主机", "count":56, "httpUrl":"https://img11.360buyimg.com/n2/jfs/t4399/311/4221961645/297233/a86b6f28/590bd3e0N46e40dbc.jpg"},
        
    ]};
    res.send(data);        
});

/**
 * 订单数量，金额
 */
router.get('/order/count', function(req, res){
    var data = {"success":true,"message":"查询成功","data":[
        {"time":"2017-11-03","price": "812.09","count":53},{"time":"2017-11-04","price": "899.09","count":72},
        {"time":"2017-11-05","price": "1254.09", "count":31},{"time":"2017-11-06","price": "312.09", "count":46},
        {"time":"2017-11-07","price": "345.09", "count":45},{"time":"2017-11-08","price": "812.09", "count":21},
        {"time":"2017-11-09","price": "212.09", "count":9},{"time":"2017-11-10","price": "112.09", "count":19}]};
    res.send(data);
});


/**
 * 客户注册量
 */
router.get('/customer/count', function(req, res){
    var data = {"success":true,"message":"查询成功","data":[
       {"time":"2017-11-03","create_count": 5, "last_count":32},{"time":"2017-11-04","create_count": 19, "last_count":34},
        {"time":"2017-11-05","create_count": 15, "last_count":22},{"time":"2017-11-06","create_count": 7, "last_count":65},
        {"time":"2017-11-07","create_count": 28, "last_count":66},{"time":"2017-11-08","create_count": 4, "last_count":19},
        {"time":"2017-11-09","create_count": 12, "last_count":98}, {"time":"2017-11-10","create_count": 3, "last_count":12},]};
    res.send(data);
});

/**
 * 日历
 */
router.get('/scheduleEvents', function(req, res){
    var data = [
        {
            'title': '开门营业',
            'start': '2017-11-01'
        },
        {
            'title': '促销日期',
            'start': '2017-11-07',
            'end': '2017-11-10'
        },
        {
            'title': '双11抢购',
            'start': '2017-11-11'
        },
        {
            'title': '第二次双11活动',
            'start': '2017-11-16'
        },
        {
            'title': '线下活动',
            'start': '2017-11-11',
            'end': '2017-11-13'
        }
    ];
    res.send(data);
});


module.exports = router;