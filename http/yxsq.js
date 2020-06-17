var express = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function (req, res) {
    res.send('index yixue_shequ');
});


/**
 * 医学 社区
 */
router.get('/yxsq', function (req, res) {
    var data = [{
        xuhao: "1",
        commu_name: "正在居家观察",
        datas: [{
                jiguan: "泗桥社区",
                num: "135"
            },
            {
                jiguan: "合丰社区",
                num: "126"
            },
            {
                jiguan: "车塘社区",
                num: "84"
            },
            {
                jiguan: "邹家角社区",
                num: "62"
            },
            {
                jiguan: "夏桥社区",
                num: "54"
            },
            {
                jiguan: "神通泾社区",
                num: "60"
            },
            {
                jiguan: "邵村社区",
                num: "39"
            },
            {
                jiguan: "陆家社区",
                num: "28"
            },
            {
                jiguan: "陈巷社区",
                num: "24"
            },
            {
                jiguan: "其他",
                num: "0"
            }
        ]
    }, {
        xuhao: "2",
        commu_name: "解除居家观察",
        datas: [{
                jiguan: "泗桥社区",
                num: "452"
            },
            {
                jiguan: "合丰社区",
                num: "332"
            },
            {
                jiguan: "车塘社区",
                num: "442"
            },
            {
                jiguan: "邹家角社区",
                num: "270"
            },
            {
                jiguan: "夏桥社区",
                num: "105"
            },
            {
                jiguan: "神通泾社区",
                num: "403"
            },
            {
                jiguan: "邵村社区",
                num: "365"
            },
            {
                jiguan: "陆家社区",
                num: "97"
            },
            {
                jiguan: "陈巷社区",
                num: "153"
            },
            {
                jiguan: "其他",
                num: "30"
            }
        ]
    }, {
        xuhao: "3",
        commu_name: "正在集中观察",
        datas: [{
                jiguan: "泗桥社区",
                num: "10"
            },
            {
                jiguan: "合丰社区",
                num: "11"
            },
            {
                jiguan: "车塘社区",
                num: "7"
            },
            {
                jiguan: "邹家角社区",
                num: "10"
            },
            {
                jiguan: "夏桥社区",
                num: "15"
            },
            {
                jiguan: "神通泾社区",
                num: "8"
            },
            {
                jiguan: "邵村社区",
                num: "14"
            },
            {
                jiguan: "陆家社区",
                num: "10"
            },
            {
                jiguan: "陈巷社区",
                num: "4"
            },
            {
                jiguan: "其他",
                num: "1"
            }
        ]
    }, {
        xuhao: "4",
        commu_name: "解除集中观察",
        datas: [{
                jiguan: "泗桥社区",
                num: "55"
            },
            {
                jiguan: "合丰社区",
                num: "51"
            },
            {
                jiguan: "车塘社区",
                num: "20"
            },
            {
                jiguan: "邹家角社区",
                num: "16"
            },
            {
                jiguan: "夏桥社区",
                num: "10"
            },
            {
                jiguan: "神通泾社区",
                num: "14"
            },
            {
                jiguan: "邵村社区",
                num: "36"
            },
            {
                jiguan: "陆家社区",
                num: "43"
            },
            {
                jiguan: "陈巷社区",
                num: "23"
            },
            {
                jiguan: "其他",
                num: "11"
            }
        ]
    }, {
        xuhao: "5",
        commu_name: "医学观察总览",
        datas: [{
                jiguan: "居家观察",
                num: 3261
            },
            {
                jiguan: "正在居家观察",
                num: 449
            },
            {
                jiguan: "解除居家观察",
                num: 2918
            },
            {
                jiguan: "集中观察",
                num: 391
            },
            {
                jiguan: "正在集中观察",
                num: 107
            },
            {
                jiguan: "解除集中观察",
                num: 333
            },
        ]
    }, {
        xuhao: "6",
        commu_name: "隔离点",
        datas: [{
                jiguan: "闽源亭集中观察点",
                num: 30
            },
            {
                jiguan: "白洋湾集中观察点",
                num: 8
            },
            {
                jiguan: "尚客优集中观察点",
                num: 69
            },
        ]
    }, {
        xuhao: "7",
        commu_name: "正在居家观察",
        datas: [{
                jiguan: "其他",
                num: "6"
            },
            {
                jiguan: "陕西省",
                num: "4"
            },
            {
                jiguan: "甘肃省",
                num: "7"
            },
            {
                jiguan: "山东省",
                num: "8"
            },
            {
                jiguan: "江苏省",
                num: "10"
            },
            {
                jiguan: "江西省",
                num: "29"
            },
            {
                jiguan: "湖北省",
                num: "91"
            },
            {
                jiguan: "河南省",
                num: "149"
            },
            {
                jiguan: "安徽省",
                num: "308"
            }
        ]
    }, {
        xuhao: "8",
        commu_name: "正在集中观察",
        datas: [{
                jiguan: "其他",
                num: "11"
            },
            {
                jiguan: "陕西省",
                num: "2"
            },
            {
                jiguan: "甘肃省",
                num: "0"
            },
            {
                jiguan: "山东省",
                num: "0"
            },
            {
                jiguan: "江苏省",
                num: "6"
            },
            {
                jiguan: "江西省",
                num: "3"
            },
            {
                jiguan: "湖北省",
                num: "9"
            },
            {
                jiguan: "河南省",
                num: "32"
            },
            {
                jiguan: "安徽省",
                num: "27"
            }
        ]
    }]
    res.send(data);
});


module.exports = router;