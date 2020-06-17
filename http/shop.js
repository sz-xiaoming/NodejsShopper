var express        = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function(req, res) {
    res.send('user report_shopper');
});


/**
 * 店铺详情
 */
router.get('/get/:shopId', function(req, res){
    var data = {
        "success": true,
        "id": null,
        "message": "操作成功",
        "errorCode": null,
        "data": {
        "userId": "864",
        "username": "lishiming",
        "nickname": "麦兜",
        "mobile": "13423232323",
        "email": "maidou@Live.omc",
        "headUrl": "http://upload.jianshu.io/users/upload_avatars/6688999/d88e6852-be89-4979-9682-3e20aa2fd6f2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
        "identityUrl": "http://upload.jianshu.io/users/upload_avatars/6688999/d88e6852-be89-4979-9682-3e20aa2fd6f2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
        "identityCard": "520123198609090909",
        "shopId": "1054",
        "shopName": "社区特卖",
        "shopStatus": 1,
        "statusText": "已认证",
        "description": "<p><strong>勘探突破：我国页岩气资源量位居世界前列</strong></p><p>近期，我国页岩气勘探开发捷报频传——</p><p>重庆南部地区的中石化丁页4井试获20．56万立方米／日高产工业气流，突破了埋深超过4000米的压裂技术瓶颈；</p><p>重庆西部地区的中石油足202井试获4．9万立方米／日气流，压裂深度达到3980米；</p>",
        "verifyTime": "",
        "createTime": "2016-11-04 11:52:00"
        },
        "encrypt": true
        };
    res.send(data);
});


module.exports = router;



