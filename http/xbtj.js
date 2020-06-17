var express = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function (req, res) {
    res.send('index 性别统计');
});


/**
 * 性别统计
 */
router.get('/xbtj', function (req, res) {
    var data = {
        result: true,
        obj: [{
                name: "其他",
                val: 24043
            },
            {
                name: "女",
                val: 35592
            },
            {
                name: "男",
                val: 43559
            }
        ],
        message: null
    }
    res.send(data);
});


module.exports = router;