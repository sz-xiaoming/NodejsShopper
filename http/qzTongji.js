var express = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function (req, res) {
    res.send('index qztj');
});


/**
 * 健康
 */
router.get('/qztj', function (req, res) {
    var data = {
        SheQuShu: 9,
        JInaKanGuanChaXinZeng: 2284,
        WaiDiRenYunaXingZeng: 8496,
        Time: "2020-02-27 00:00:00",
        SheQuShuXinZeng: 0,
        XueXiaoRenYuan: 20565,
        JiuXiaoChangSuo: 2123,
        QiyeRenYuanXinZen: 11100,
        XueXiaoRenYuanXinZen: 1094,
        JiuXiaoChangSuoRenYuan: 0,
        QiyeRenYuan: 60355,
        JiZhongGuanChaDianShuXinZeng: 1,
        YiXueGuanCha: 1115,
        XueXiao: 23,
        JiZhongGuanChaDianShu: 528,
        QiYeShu: 2000,
        ZongRenKouXinZeng: 12645,
        JInaKanGuanCha: 2371,
        BenDiRenYuanXingZeng: 2109,
        JiuXiaoChangSuoRenYuanXinZeng: 0,
        QiYeShuXinZeng: 0,
        JiuXiaoChangSuoXinZeng: 0,
        ZongRenKou: 103194,
        YiXueGuanChaXinZeng: 399,
        XueXiaoXinZeng: 0,
        WaiDiRenYuna: 35374,
        BenDiRenYuan: 37439,
    }
    res.send(data);
});


module.exports = router;