var express = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function (req, res) {
    res.send('index 社区籍贯');
});


/**
 * 社会分类  社区籍贯
 */
router.get('/cmjg', function (req, res) {
    var data = [{
            xuhao: "1",
            commu_name: "车塘社区",
            datas: [{
                    jiguan: "江苏省",
                    num: "5194"
                },
                {
                    jiguan: "安徽省",
                    num: "1709"
                },
                {
                    jiguan: "河南省",
                    num: "834"
                },
                {
                    jiguan: "湖北省",
                    num: "682"
                },
                {
                    jiguan: "陕西省",
                    num: "218"
                },
                {
                    jiguan: "四川省",
                    num: "269"
                },
                {
                    jiguan: "甘肃省",
                    num: "142"
                },
                {
                    jiguan: "江西省",
                    num: "288"
                },
                {
                    jiguan: "其他",
                    num: "1102"
                }
            ]
        },
        {
            xuhao: "2",
            commu_name: "陈巷社区",
            datas: [{
                    jiguan: "江苏省",
                    num: "1358"
                },
                {
                    jiguan: "安徽省",
                    num: "1095"
                },
                {
                    jiguan: "河南省",
                    num: "1170"
                },
                {
                    jiguan: "湖北省",
                    num: "371"
                },
                {
                    jiguan: "陕西省",
                    num: "472"
                },
                {
                    jiguan: "四川省",
                    num: "217"
                },
                {
                    jiguan: "甘肃省",
                    num: "412"
                },
                {
                    jiguan: "江西省",
                    num: "127"
                },
                {
                    jiguan: "其他",
                    num: "1214"
                }
            ]
        },
        {
            xuhao: "3",
            commu_name: "合丰社区",
            datas: [{
                    jiguan: "江苏省",
                    num: "1056"
                },
                {
                    jiguan: "安徽省",
                    num: "1368"
                },
                {
                    jiguan: "河南省",
                    num: "869"
                },
                {
                    jiguan: "湖北省",
                    num: "1236"
                },
                {
                    jiguan: "陕西省",
                    num: "87"
                },
                {
                    jiguan: "四川省",
                    num: "91"
                },
                {
                    jiguan: "甘肃省",
                    num: "125"
                },
                {
                    jiguan: "江西省",
                    num: "450"
                },
                {
                    jiguan: "其他",
                    num: "758"
                }
            ]
        },
        {
            xuhao: "4",
            commu_name: "陆家社区",
            datas: [{
                    jiguan: "江苏省",
                    num: "1583"
                },
                {
                    jiguan: "安徽省",
                    num: "2108"
                },
                {
                    jiguan: "河南省",
                    num: "755"
                },
                {
                    jiguan: "湖北省",
                    num: "232"
                },
                {
                    jiguan: "陕西省",
                    num: "141"
                },
                {
                    jiguan: "四川省",
                    num: "194"
                },
                {
                    jiguan: "甘肃省",
                    num: "55"
                },
                {
                    jiguan: "江西省",
                    num: "133"
                },
                {
                    jiguan: "其他",
                    num: "730"
                }
            ]
        },
        {
            xuhao: "5",
            commu_name: "邵村社区",
            datas: [{
                    jiguan: "江苏省",
                    num: "8239"
                },
                {
                    jiguan: "安徽省",
                    num: "3778"
                },
                {
                    jiguan: "河南省",
                    num: "2605"
                },
                {
                    jiguan: "湖北省",
                    num: "693"
                },
                {
                    jiguan: "陕西省",
                    num: "873"
                },
                {
                    jiguan: "四川省",
                    num: "544"
                },
                {
                    jiguan: "甘肃省",
                    num: "721"
                },
                {
                    jiguan: "江西省",
                    num: "496"
                },
                {
                    jiguan: "其他",
                    num: "2689"
                }
            ]
        },
        {
            xuhao: "6",
            commu_name: "神童泾社区",
            datas: [{
                    jiguan: "江苏省",
                    num: "5791"
                },
                {
                    jiguan: "安徽省",
                    num: "793"
                },
                {
                    jiguan: "河南省",
                    num: "331"
                },
                {
                    jiguan: "湖北省",
                    num: "486"
                },
                {
                    jiguan: "陕西省",
                    num: "50"
                },
                {
                    jiguan: "四川省",
                    num: "126"
                },
                {
                    jiguan: "甘肃省",
                    num: "53"
                },
                {
                    jiguan: "江西省",
                    num: "150"
                },
                {
                    jiguan: "其他",
                    num: "603"
                },
            ]
        },
        {
            xuhao: "7",
            commu_name: "泗桥社区",
            datas: [{
                    jiguan: "江苏省",
                    num: "1584"
                },
                {
                    jiguan: "安徽省",
                    num: "1932"
                },
                {
                    jiguan: "河南省",
                    num: "1038"
                },
                {
                    jiguan: "湖北省",
                    num: "996"
                },
                {
                    jiguan: "陕西省",
                    num: "124"
                },
                {
                    jiguan: "四川省",
                    num: "222"
                },
                {
                    jiguan: "甘肃省",
                    num: "120"
                },
                {
                    jiguan: "江西省",
                    num: "398"
                },
                {
                    jiguan: "其他",
                    num: "1343"
                }
            ]
        },
        {
            xuhao: "8",
            commu_name: "夏桥社区",
            datas: [{
                    jiguan: "江苏省",
                    num: "2563"
                },
                {
                    jiguan: "安徽省",
                    num: "1994"
                },
                {
                    jiguan: "河南省",
                    num: "2109"
                },
                {
                    jiguan: "湖北省",
                    num: "467"
                },
                {
                    jiguan: "陕西省",
                    num: "405"
                },
                {
                    jiguan: "四川省",
                    num: "231"
                },
                {
                    jiguan: "甘肃省",
                    num: "223"
                },
                {
                    jiguan: "江西省",
                    num: "298"
                },
                {
                    jiguan: "其他",
                    num: "1054"
                }
            ]
        },
        {
            xuhao: "9",
            commu_name: "邹家角社区",
            datas: [{
                    jiguan: "江苏省",
                    num: "1262"
                },
                {
                    jiguan: "安徽省",
                    num: "1472"
                },
                {
                    jiguan: "河南省",
                    num: "942"
                },
                {
                    jiguan: "湖北省",
                    num: "325"
                },
                {
                    jiguan: "陕西省",
                    num: "41"
                },
                {
                    jiguan: "四川省",
                    num: "81"
                },
                {
                    jiguan: "甘肃省",
                    num: "27"
                },
                {
                    jiguan: "江西省",
                    num: "113"
                },
                {
                    jiguan: "其他",
                    num: "824"
                }
            ]
        }
    ]
    res.send(data);
});


module.exports = router;