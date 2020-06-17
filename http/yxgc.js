var express = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function (req, res) {
    res.send('index 医学观察');
});


/**
 * 医学观察
 */
router.get('/yxgc', function (req, res) {
    var data = [{
            xuhao: "1",
            commu_name: "人员所属社区（正在医学观察人员）",
            datas: [{
                    name: "车塘社区",
                    value: 18
                },
                {
                    name: "合丰社区",
                    value: 14
                },
                {
                    name: "泗桥社区",
                    value: 11
                },
                {
                    name: "邵村社区",
                    value: 6
                },
                {
                    name: "神童泾社区",
                    value: 4
                },
                {
                    name: "陈巷社区",
                    value: 3
                },
                {
                    name: "邹家角社区",
                    value: 0
                },
                {
                    name: "夏桥社区",
                    value: 0
                },
                {
                    name: "陆家社区",
                    value: 0
                }
            ]
        },
        {
            xuhao: "2",
            commu_name: "医学观察人员分析（正在居家隔离）",
            datas: [{
                    name: "四川省",
                    value: 1
                },
                {
                    name: "陕西省",
                    value: 0
                },
                {
                    name: "江西省",
                    value: 2
                },
                {
                    name: "湖北省",
                    value: 43
                },
                {
                    name: "河南省",
                    value: 0
                },
                {
                    name: "甘肃省",
                    value: 0
                },
                {
                    name: "安徽省",
                    value: 3
                },
                {
                    name: "其他",
                    value: 8
                }
            ]
        },
        {
            xuhao: "3",
            commu_name: "医学观察人员分析（正在集中隔离）",
            datas: [{
                    name: "四川省",
                    value: 1
                },
                {
                    name: "陕西省",
                    value: 3
                },
                {
                    name: "江西省",
                    value: 1
                },
                {
                    name: "湖北省",
                    value: 12
                },
                {
                    name: "河南省",
                    value: 2
                },
                {
                    name: "甘肃省",
                    value: 2
                },
                {
                    name: "安徽省",
                    value: 1
                },
                {
                    name: "其他",
                    value: 17
                }
            ]
        },
        {
            xuhao: "4",
            commu_name: "隔离点统计分析",
            datas: [{
                    name: "尚客优集中观察点",
                    value: 20
                },
                {
                    name: "白杨湾集中观察点",
                    value: 4
                },
                {
                    name: "格林豪泰集中观察点",
                    value: 1
                }
            ]
        },
        {
            xuhao: "5",
            commu_name: "医学观察人员分析（总览）",
            datas: [{
                    name: "四川省",
                    value: 2
                },
                {
                    name: "陕西省",
                    value: 3
                },
                {
                    name: "江西省",
                    value: 3
                },
                {
                    name: "湖北省",
                    value: 55
                },
                {
                    name: "河南省",
                    value: 2
                },
                {
                    name: "甘肃省",
                    value: 2
                },
                {
                    name: "安徽省",
                    value: 4
                },
                {
                    name: "其他",
                    value: 25
                }
            ]
        },
        {
            xuhao: "6",
            commu_name: "人员出发国家统计",
            datas: [{
                    name: "台湾",
                    value: 9
                },
                {
                    name: "越南",
                    value: 5
                },
                {
                    name: "英国",
                    value: 4
                },
                {
                    name: "柬埔寨",
                    value: 4
                },
                {
                    name: "美国",
                    value: 2
                },
                {
                    name: "马来西亚",
                    value: 2
                },
                {
                    name: "澳门",
                    value: 1
                },
                {
                    name: "加拿大",
                    value: 1
                },
                {
                    name: "泰国",
                    value: 1
                },
                {
                    name: "巴基斯坦",
                    value: 1
                },
                {
                    name: "德国",
                    value: 1
                }
            ]
        }
    ]
    res.send(data);
});


module.exports = router;