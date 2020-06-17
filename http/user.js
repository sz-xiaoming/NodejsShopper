var express        = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function(req, res) {
    res.send('user report_shopper');
});


/**
 * 登录
 */
router.post('/login', function(req, res){
    var data = {"success":true,"id":null,"message":"登录成功！","errorCode":null,"data":{"userId":"2","username":"shopper","nickname":"电商管理员","mobile":null,"email":null,"headUrl":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2764371306,3467823016&fm=27&gp=0.jpg","identityUrl":null,"identityCard":null,"shopId":"1","shopName":"移动端电商商户","shopStatus":1,"statusText":"已认证","description":null},"encrypt":true};
    res.send(data);
});

/**
 * 用户列表
 */
router.get('/getUserPage', function(req, res){
    var data = {
        "pageNow": 1,
        "pageTotal": 1,
        "numberTotal": 2,
        "beanList": [
        {
            "userId": 1,
            "username": "admin",
            "nickname": "admin",
            "mobile": "13433232323",
            "email": "admin@admin.com",
            "userType": 1,
            "userTypeName": "综合管理员",
            "createTime": "",
            "lastTime": "2017-09-14 18:03",
            "useFlag": 1,
            "useFlagText": "启用",
            "headUrl": "http://upload.jianshu.io/users/upload_avatars/6688999/d88e6852-be89-4979-9682-3e20aa2fd6f2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
            "groupRoleList": [
                {
                "userId": 1,
                "roleId": 1,
                "groupId": 1,
                "roleName": "高级系统管理员",
                "groupName": "公司总部"
                }
            ]
        },
        {
            "userId": 2,
            "username": "shopper",
            "nickname": "电商管理员",
            "mobile": "134123123123",
            "email": "shopper@apple.com",
            "userType": 2,
            "userTypeName": "电商人员",
            "createTime": "",
            "lastTime": "2016-04-25 14:17",
            "useFlag": 1,
            "useFlagText": "启用",
            "isOnline": 0,
            "headUrl": "http://upload.jianshu.io/users/upload_avatars/6688999/d88e6852-be89-4979-9682-3e20aa2fd6f2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
            "groupRoleList": [
                {
                    "userId": 2,
                    "roleId": 2,
                    "groupId": 2,
                    "roleName": "电商管理员",
                    "groupName": "电商高级管理员"
                }
            ]
        }
        ]
    };
    res.send(data);
});

router.get('/getUserRes', function(req, res){
    var data =  [
            { label: '首页122333', icon: 'fa fa-fw fa-home', routerLink: ['dashboard'] },
            { label: '权限管理', icon: 'fa fa-fw fa-lock',    routerLink: ['user'] },
            { label: '商品分类', icon: 'fa fa-fw fa-random',  routerLink: ['category'] },
            { label: 'hello', icon: 'fa fa-fw fa-random',  routerLink: ['hello'] },
            {
                label: '网络设备管理', icon: 'fa fa-fw  fa-archive',
                items: [
                    { label: '设备列表', icon: 'fa fa-fw fa-reorder', routerLink: ['netDev/list'] },
                    { label: '创建设备', icon: 'fa fa-fw fa-plus',    routerLink: ['netDev/detail', -1] }
                ]
            },
            {
                label: '商品管理', icon: 'fa fa-fw  fa-archive',
                items: [
                    { label: '商品列表', icon: 'fa fa-fw fa-reorder', routerLink: ['goods/list'] },
                    { label: '创建商品', icon: 'fa fa-fw fa-plus',    routerLink: ['goods/detail', -1] },
                    { label: '商品评论', icon: 'fa fa-fw fa-comment', routerLink: ['goods/comment'] }
                ]
            },
            {
                label: '订单管理', icon: 'fa fa-fw fa-credit-card',
                items: [
                    {label: '新订单', icon: 'fa fa-fw fa-share',    routerLink: ['order', 1] },
                    {label: '已出库', icon: 'fa fa-fw fa-truck',    routerLink: ['order', 4] },
                    {label: '已完成', icon: 'fa fa-fw fa-circle',   routerLink: ['order', 7] },
                    {label: '已取消', icon: 'fa fa-fw fa-circle-o', routerLink: ['order', 10] },
                ]
            },

        ]
    
    res.send(data);
});


/**
 * 部门列表
 */
router.get('/getGroupList', function(req, res){
    var data = [
        {
        "groupId": 1,
        "groupName": "公司总部",
        "parentId": 0,
        "sequence": -1,
        "createTime": "2016-06-02 14:33:57",
        "useFlag": 1,
        "useFlagText": null
        },
        {
        "groupId": 2,
        "groupName": "电商部门",
        "parentId": 0,
        "sequence": -1,
        "createTime": "2016-03-03 10:13:57",
        "useFlag": 1,
        "useFlagText": null
        }
    ];
    res.send(data);
});

/**
 * 角色列表
 */
router.get('/getRoleList', function(req, res){
    var data = [
        {
            "roleId": 1,
            "roleName": "高级系统管理员",
            "roleType": null,
            "roleTypeText": null,
            "manageType": null,
            "manageTypeText": null,
            "useFlag": 0,
            "useFlagText": null,
            "sequence": null,
            "description": null,
            "authorityList": null
        },
        {
            "roleId": 2,
            "roleName": "电商高级管理员",
            "roleType": null,
            "roleTypeText": null,
            "manageType": null,
            "manageTypeText": null,
            "useFlag": 0,
            "useFlagText": null,
            "sequence": null,
            "description": null,
            "authorityList": null
        },
        {
            "roleId": 3,
            "roleName": "电商-财务管理员",
            "roleType": null,
            "roleTypeText": null,
            "manageType": null,
            "manageTypeText": null,
            "useFlag": 0,
            "useFlagText": null,
            "sequence": null,
            "description": null,
            "authorityList": null
        },
        {
            "roleId": 4,
            "roleName": "电商-商品管理员",
            "roleType": null,
            "roleTypeText": null,
            "manageType": null,
            "manageTypeText": null,
            "useFlag": 0,
            "useFlagText": null,
            "sequence": null,
            "description": null,
            "authorityList": null
        },
        {
            "roleId": 5,
            "roleName": "平台系统管理员",
            "roleType": null,
            "roleTypeText": null,
            "manageType": null,
            "manageTypeText": null,
            "useFlag": 0,
            "useFlagText": null,
            "sequence": null,
            "description": null,
            "authorityList": null
        }
    ];
    res.send(data);
});
module.exports = router;



