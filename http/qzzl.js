var express = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function (req, res) {
    res.send('index qzzl');
});


/**
 * 全镇  总览
 */
router.get('/qzzl', function (req, res) {
    var data = [{
            xuhao: "1",
            commu_name: "人员户籍统计",
            datas: [{
                    name: "江苏省",
                    value: 40647
                },
                {
                    name: "安徽省",
                    value: 22078
                },
                {
                    name: "河南省",
                    value: 15793
                },
                {
                    name: "湖北省",
                    value: 8600
                },
                {
                    name: "陕西省",
                    value: 3962
                },
                {
                    name: "四川省",
                    value: 3918
                },
                {
                    name: "甘肃省",
                    value: 3425
                },
                {
                    name: "江西省",
                    value: 3266
                },
                {
                    name: "其他",
                    value: 3129
                },
            ]
        },
        {
            xuhao: "2",
            commu_name: "社区人员统计",
            datas: [{
                    name: "邹家角社区",
                    value: 5087
                },
                {
                    name: "陆家社区",
                    value: 5931
                },
                {
                    name: "神童泾社区",
                    value: 8383
                },
                {
                    name: "邵村社区",
                    value: 20638
                },
                {
                    name: "陈巷社区",
                    value: 11769
                },
                {
                    name: "泗桥社区",
                    value: 7757
                },
                {
                    name: "车塘社区",
                    value: 10438
                },
                {
                    name: "夏桥社区",
                    value: 9344
                },
                {
                    name: "合丰社区",
                    value: 6040
                }
            ]
        },
        {
            xuhao: "3",
            commu_name: "流动人口统计",
            datas: [{
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
            commu_name: "户籍人口统计",
            datas: [{
                    name: "邵村",
                    value: 7146
                },
                {
                    name: "神通泾",
                    value: 7066
                },
                {
                    name: "车塘",
                    value: 6488
                },
                {
                    name: "陆家",
                    value: 5596
                },
                {
                    name: "合丰",
                    value: 5530
                },
                {
                    name: "陈巷",
                    value: 4381
                },
                {
                    name: "邹家角",
                    value: 4162
                },
                {
                    name: "夏桥",
                    value: 2489
                },
                {
                    name: "泗桥",
                    value: 2398
                },
                {
                    name: "现属综保区",
                    value: 338
                },
                {
                    name: "集体",
                    value: 113
                }
            ]
        },
        {
            xuhao: "5",
            commu_name: "人员年龄段统计",
            datas: [{
                    name: "0 - 3",
                    value: 7146
                },
                {
                    name: "4 - 6",
                    value: 7066
                },
                {
                    name: "7 - 12",
                    value: 6488
                },
                {
                    name: "13 - 18",
                    value: 5596
                },
                {
                    name: "19 - 30",
                    value: 5530
                },
                {
                    name: "31 - 40",
                    value: 4381
                },
                {
                    name: "41 - 50",
                    value: 4162
                },
                {
                    name: "51 - 60",
                    value: 2489
                },
                {
                    name: "60 以上",
                    value: 2398
                },
            ]
        }
    ]
    res.send(data);
});


module.exports = router;