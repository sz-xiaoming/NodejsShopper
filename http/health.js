var express = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function (req, res) {
    res.send('index health');
});


/**
 * 健康
 */
router.get('/health', function (req, res) {
    var data = [{
            xuhao: "1",
            commu_name: "总览",
            datas: [{
                    name: "累计观察人数",
                    value: 54110
                },
                {
                    name: "累计解除观察人数",
                    value: 27160
                },
                {
                    name: "当前观察人数",
                    value: 26950
                },
                {
                    name: "较昨日新增观察人数",
                    value: 8
                },
                {
                    name: "今日解除观察人数",
                    value: 19
                },
            ]
        },
        {
            xuhao: "2",
            commu_name: "近七日新增观察人数",
            datas: [{
                    date: "03-26",
                    num: "232"
                },
                {
                    date: "03-27",
                    num: "239"
                },
                {
                    date: "03-28",
                    num: "256"
                },
                {
                    date: "03-29",
                    num: "341"
                },
                {
                    date: "03-30",
                    num: "226"
                },
                {
                    date: "03-31",
                    num: "170"
                },
                {
                    date: "04-01",
                    num: "168"
                }
            ]
        },
        {
            xuhao: "3",
            commu_name: "近七日解除观察人数",
            datas: [{
                    date: "03-26",
                    num: "220"
                },
                {
                    date: "03-27",
                    num: "218"
                },
                {
                    date: "03-28",
                    num: "202"
                },
                {
                    date: "03-29",
                    num: "171"
                },
                {
                    date: "03-30",
                    num: "94"
                },
                {
                    date: "03-31",
                    num: "72"
                },
                {
                    date: "04-01",
                    num: "58"
                },
            ]
        },
        {
            xuhao: "4",
            commu_name: "当前观察人数",
            datas: [{
                    value: "合丰村 (社区)",
                    num: 4846
                },
                {
                    value: "陈巷村 (社区)",
                    num: 1952
                },
                {
                    value: "邵村社区",
                    num: 2389
                },
                {
                    value: "泗桥村 (社区)",
                    num: 2351
                },
                {
                    value: "夏桥村 (社区)",
                    num: 1738
                },
                {
                    value: "神童泾村 (社区)",
                    num: 995
                },
                {
                    value: "陆家村 (社区)",
                    num: 1454
                },
                {
                    value: "车塘村 (社区)",
                    num: 1875
                },
                {
                    value: "邹家角村 (社区)",
                    num: 876
                },
                {
                    value: "企业集体宿舍",
                    num: 672
                },
                {
                    value: "工地",
                    num: 140
                },
                {
                    value: "学校",
                    num: 34
                },
            ]
        }
    ]
    res.send(data);
});


module.exports = router;