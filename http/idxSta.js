var express = require('express');

// 路由
var router = express.Router();

// 首页
router.get('/', function (req, res) {
    res.send('index idxsta');
});


/**
 * 首页  数据
 */
router.get('/idxsta', function (req, res) {
    var data = {
        href: "",
        status: {
            code: "200",
            desc: "SUCCESS."
        },
        data: [{
                indexName: "新增当前居家观察",
                rn: null,
                indexValue: 44,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "新增排查人数",
                rn: null,
                indexValue: 2353,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "新增当前集中观察",
                rn: null,
                indexValue: 23,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "累计集中观察",
                rn: null,
                indexValue: 262,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "新增解除居家观察",
                rn: null,
                indexValue: 0,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "累计居家观察",
                rn: null,
                indexValue: 2984,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "新增解除集中观察",
                rn: null,
                indexValue: 0,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "新增累计集中观察",
                rn: null,
                indexValue: 23,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "新增累计居家观察",
                rn: null,
                indexValue: 44,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "新增累计观察人数",
                rn: null,
                indexValue: 0,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "新增当前观察人数",
                rn: null,
                indexValue: 67,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "新增解除观察人数",
                rn: null,
                indexValue: 0,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "总排查人数",
                rn: 1,
                indexValue: 103294,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "累计观察人数",
                rn: 2,
                indexValue: 3246,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "当前观察人数",
                rn: 3,
                indexValue: 1133,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "解除观察人数",
                rn: 4,
                indexValue: 2113,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "当前集中观察",
                rn: 5,
                indexValue: 143,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "解除集中观察",
                rn: 6,
                indexValue: 119,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "当前居家观察",
                rn: 7,
                indexValue: 990,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "解除居家观察",
                rn: 8,
                indexValue: 1994,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "全镇总览",
                type_rn: null
            },
            {
                indexName: "社区数量",
                rn: 1,
                indexValue: 9,
                date: "2020-02-27",
                idx_unit: "个",
                idx_type: "社区排查",
                type_rn: null
            },
            {
                indexName: "总排查人数",
                rn: 2,
                indexValue: 57088,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "社区排查",
                type_rn: null
            },
            {
                indexName: "当前观察人数",
                rn: 3,
                indexValue: 893,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "社区排查",
                type_rn: null
            },
            {
                indexName: "解除观察人数",
                rn: 4,
                indexValue: 1817,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "社区排查",
                type_rn: null
            },
            {
                indexName: "企业数量",
                rn: 1,
                indexValue: 2000,
                date: "2020-02-27",
                idx_unit: "家",
                idx_type: "企业排查",
                type_rn: null
            },
            {
                indexName: "总排查人数",
                rn: 2,
                indexValue: 24525,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "企业排查",
                type_rn: null
            },
            {
                indexName: "当前观察人数",
                rn: 3,
                indexValue: 89,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "企业排查",
                type_rn: null
            },
            {
                indexName: "解除观察人数",
                rn: 4,
                indexValue: 234,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "企业排查",
                type_rn: null
            },
            {
                indexName: "学校数量",
                rn: 1,
                indexValue: 23,
                date: "2020-02-27",
                idx_unit: "所",
                idx_type: "学校排查",
                type_rn: null
            },
            {
                indexName: "总排查人数",
                rn: 2,
                indexValue: 20858,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "学校排查",
                type_rn: null
            },
            {
                indexName: "当前观察人数",
                rn: 3,
                indexValue: 186,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "学校排查",
                type_rn: null
            },
            {
                indexName: "解除观察人数",
                rn: 4,
                indexValue: 271,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "学校排查",
                type_rn: null
            },
            {
                indexName: "场所数量",
                rn: 1,
                indexValue: 2158,
                date: "2020-02-27",
                idx_unit: "个",
                idx_type: "社会面排查",
                type_rn: null
            },
            {
                indexName: "总排查人数",
                rn: 2,
                indexValue: 310,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "社会面排查",
                type_rn: null
            },
            {
                indexName: "当前观察人数",
                rn: 3,
                indexValue: 1,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "社会面排查",
                type_rn: null
            },
            {
                indexName: "解除观察人数",
                rn: 4,
                indexValue: 0,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "社会面排查",
                type_rn: null
            },
            {
                indexName: "累计观察",
                rn: 1,
                indexValue: 30986,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "健康观察",
                type_rn: null
            },
            {
                indexName: "当前观察",
                rn: 2,
                indexValue: 30492,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "健康观察",
                type_rn: null
            },
            {
                indexName: "新增观察",
                rn: 3,
                indexValue: 612,
                date: "2020-02-27",
                idx_unit: "人",
                idx_type: "健康观察",
                type_rn: null
            },
            {
                indexName: "总企业数",
                rn: 1,
                indexValue: 5318,
                date: "2020-02-27",
                idx_unit: "家",
                idx_type: "企业复工",
                type_rn: null
            },
            {
                indexName: "已复工企业",
                rn: 2,
                indexValue: 735,
                date: "2020-02-27",
                idx_unit: "家",
                idx_type: "企业复工",
                type_rn: null
            },
            {
                indexName: "未复工企业",
                rn: 3,
                indexValue: 4583,
                date: "2020-02-27",
                idx_unit: "家",
                idx_type: "企业复工",
                type_rn: null
            },
        ],
        template: null,
    }
    res.send(data);
});


module.exports = router;