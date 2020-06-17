var express     = require('express');
var index = require('./http/index');
var menu = require('./http/menu');
var user = require('./http/user');
var shop = require('./http/shop');
var order = require('./http/order');
var goods = require('./http/goods');
var yxsq = require('./http/yxsq');
var qzzl = require('./http/qzzl');
var heal = require('./http/health');
var qztj = require('./http/qzTongji');
var idxSta = require('./http/idxSta');
var pclx = require('./http/pclx');
var xbtj = require('./http/xbtj');
var yxgc = require('./http/yxgc');
var cmjg = require('./http/commuJG');
var sqAgeFX = require('./http/sqAgeFX');

// web服务
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/index', index);
app.use('/menu', menu);
app.use('/user', user);
app.use('/shop', shop);
app.use('/order', order);
app.use('/goods', goods);
app.use('/yxsq', yxsq);
app.use('/quanzhen', qzzl);
app.use('/health', heal);
app.use('/qztj', qztj);
app.use('/idxSta', idxSta);
app.use('/pclx', pclx);
app.use('/xbtj', xbtj);
app.use('/yxgc', yxgc);
app.use('/cmjg', cmjg);
app.use('/sqAgeFX', sqAgeFX);


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});