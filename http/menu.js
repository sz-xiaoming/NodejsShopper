var express = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function(req, res) {
    res.send('menu index');
});

/**
 * menu
 */
router.get('/navicat', function(req, res){
    var data = [
        {
            label: '首页', icon: 'fa fa-fw fa-home', routerLink: ['dashboard']
        },
        {
            label: '商品管理', icon: 'fa fa-fw  fa-archive',
            items: [
                { label: '商品列表', icon: 'fa fa-fw fa-reorder', routerLink: ['goods/list'] },
                { label: '创建商品', icon: 'fa fa-fw fa-plus',    routerLink: ['goods/detail'] },
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
    ];
    res.send(data);
});


module.exports = router;
