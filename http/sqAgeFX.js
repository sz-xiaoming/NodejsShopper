var express = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function (req, res) {
    res.send('index 社区年龄段统计');
});


/**
 * 社区年龄段统计
 */
router.get('/sqAgeFX', function (req, res) {
    var data = [{
            xuhao: "1",
            name: "0-3",
            datas: [
                {
                    name: "邵村",
                    value: 10328
                },
                {
                    name: "夏桥",
                    value: 7393
                },
                {
                    name: "陈巷",
                    value: 7388
                },
                {
                    name: "泗桥",
                    value: 5878
                },
                {
                    name: "陆家",
                    value: 4535
                },
                {
                    name: "车塘",
                    value: 3648
                },
                {
                    name: "合丰",
                    value: 2955
                },
                {
                    name: "邹家角",
                    value: 2802
                },
                {
                    name: "神童泾",
                    value: 959
                }
            ]
        },
        {
            xuhao: "2",
            name: "4-6",
            datas: [
                {
                    name: "邵村",
                    value: 10328
                },
                {
                    name: "夏桥",
                    value: 7393
                },
                {
                    name: "陈巷",
                    value: 7388
                },
                {
                    name: "泗桥",
                    value: 5878
                },
                {
                    name: "陆家",
                    value: 4535
                },
                {
                    name: "车塘",
                    value: 3648
                },
                {
                    name: "合丰",
                    value: 2955
                },
                {
                    name: "邹家角",
                    value: 2802
                },
                {
                    name: "神童泾",
                    value: 959
                }
            ]
        },
        {
            xuhao: "3",
            name: "7-12",
            datas: [
                {
                    name: "邵村",
                    value: 10328
                },
                {
                    name: "夏桥",
                    value: 7393
                },
                {
                    name: "陈巷",
                    value: 7388
                },
                {
                    name: "泗桥",
                    value: 5878
                },
                {
                    name: "陆家",
                    value: 4535
                },
                {
                    name: "车塘",
                    value: 3648
                },
                {
                    name: "合丰",
                    value: 2955
                },
                {
                    name: "邹家角",
                    value: 2802
                },
                {
                    name: "神童泾",
                    value: 959
                }
            ]
        },
        {
            xuhao: "4",
            name: "13-18",
            datas: [
                {
                    name: "邵村",
                    value: 10328
                },
                {
                    name: "夏桥",
                    value: 7393
                },
                {
                    name: "陈巷",
                    value: 7388
                },
                {
                    name: "泗桥",
                    value: 5878
                },
                {
                    name: "陆家",
                    value: 4535
                },
                {
                    name: "车塘",
                    value: 3648
                },
                {
                    name: "合丰",
                    value: 2955
                },
                {
                    name: "邹家角",
                    value: 2802
                },
                {
                    name: "神童泾",
                    value: 959
                }
            ]
        },
        {
            xuhao: "5",
            name: "19-30",
            datas: [
                {
                    name: "邵村",
                    value: 10328
                },
                {
                    name: "夏桥",
                    value: 7393
                },
                {
                    name: "陈巷",
                    value: 7388
                },
                {
                    name: "泗桥",
                    value: 5878
                },
                {
                    name: "陆家",
                    value: 4535
                },
                {
                    name: "车塘",
                    value: 3648
                },
                {
                    name: "合丰",
                    value: 2955
                },
                {
                    name: "邹家角",
                    value: 2802
                },
                {
                    name: "神童泾",
                    value: 959
                }
            ]
        },
        {
            xuhao: "6",
            name: "31-40",
            datas: [
                {
                    name: "邵村",
                    value: 10328
                },
                {
                    name: "夏桥",
                    value: 7393
                },
                {
                    name: "陈巷",
                    value: 7388
                },
                {
                    name: "泗桥",
                    value: 5878
                },
                {
                    name: "陆家",
                    value: 4535
                },
                {
                    name: "车塘",
                    value: 3648
                },
                {
                    name: "合丰",
                    value: 2955
                },
                {
                    name: "邹家角",
                    value: 2802
                },
                {
                    name: "神童泾",
                    value: 959
                }
            ]
        },
        {
            xuhao: "7",
            name: "41-50",
            datas: [
                {
                    name: "邵村",
                    value: 10328
                },
                {
                    name: "夏桥",
                    value: 7393
                },
                {
                    name: "陈巷",
                    value: 7388
                },
                {
                    name: "泗桥",
                    value: 5878
                },
                {
                    name: "陆家",
                    value: 4535
                },
                {
                    name: "车塘",
                    value: 3648
                },
                {
                    name: "合丰",
                    value: 2955
                },
                {
                    name: "邹家角",
                    value: 2802
                },
                {
                    name: "神童泾",
                    value: 959
                }
            ]
        },
        {
            xuhao: "8",
            name: "51-60",
            datas: [
                {
                    name: "邵村",
                    value: 10328
                },
                {
                    name: "夏桥",
                    value: 7393
                },
                {
                    name: "陈巷",
                    value: 7388
                },
                {
                    name: "泗桥",
                    value: 5878
                },
                {
                    name: "陆家",
                    value: 4535
                },
                {
                    name: "车塘",
                    value: 3648
                },
                {
                    name: "合丰",
                    value: 2955
                },
                {
                    name: "邹家角",
                    value: 2802
                },
                {
                    name: "神童泾",
                    value: 959
                }
            ]
        },
        {
            xuhao: "9",
            name: "60以上",
            datas: [
                {
                    name: "邵村",
                    value: 10328
                },
                {
                    name: "夏桥",
                    value: 7393
                },
                {
                    name: "陈巷",
                    value: 7388
                },
                {
                    name: "泗桥",
                    value: 5878
                },
                {
                    name: "陆家",
                    value: 4535
                },
                {
                    name: "车塘",
                    value: 3648
                },
                {
                    name: "合丰",
                    value: 2955
                },
                {
                    name: "邹家角",
                    value: 2802
                },
                {
                    name: "神童泾",
                    value: 959
                }
            ]
        },
    ]
    res.send(data);
});


module.exports = router;