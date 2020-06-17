var express = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function (req, res) {
    res.send('index 排查类型');
});


/**
 * 排查类型
 */
router.get('/pclx', function (req, res) {
    var data = {
        result: true,
        obj: [{
                name: "社区排查",
                val: 54196
            },
            {
                name: "学校排查",
                val: 20039
            },
            {
                name: "企业排查",
                val: 24499
            },
            {
                name: "个体工商户排查",
                val: 2378
            },
            {
                name: "流动人员排查",
                val: 2082
            }
        ],
        message: null
    }
    res.send(data);
});


module.exports = router;