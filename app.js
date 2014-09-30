'use strict';

var dotenv = require('dotenv'),
    express = require('express'),
    http = require('http'),
    httpProxy = require('http-proxy'),
    bodyParser = require('body-parser'),
    db = require('./db/db'),
    lib = require('./lib/library');

var app = express();
var imageSource = process.env.IMAGESOURCE || 'http://local.businessinsider.com/image/';

var proxy = httpProxy.createProxyServer();

dotenv.load();

var allowCrossDomain = function(req, res, next) {
    console.log('allowingCrossDomain');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization, X-Mindflash-SessionID');
      
    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app
    .use(allowCrossDomain)
    .use(bodyParser.json());

app
    .get('/images/:id', function (req, res) {
        var _res = res;
        http.get(imageSource + req.params.id, function (res) {
            var imagedata = '';
            _res.writeHead(200, {'Content-Type': res.headers['content-type']});
            res.setEncoding('binary');
            res.on('data', function (chunk) {
                imagedata += chunk;
            });
            res.on('end', function() {
                _res.end(imagedata, 'binary');
            });
        }).on('error', function (err) {
            console.log('error getting image: ', err);
        });
    })
    .get('/:type/:id', function (req, res) {
        var response = {};
        var type = req.params.type;
        response = db[type].find(req.params.id);
        res.send(response);
    })
    .get('/:type', function (req, res) {
        var response = {};
        var type = req.params.type;
        response = db[type][type];
        res.send(response);
    })
    .post('/:type/new', function (req, res) {
        var obj = req.body;
        var type = req.params.type;
        var id = lib.generateId();
        obj._id = id;
        db[type][type].push(obj);
        res.send(id);
    })
    .post('/:type/:id', function (req, res) {
        var response = {};
        var type = req.params.type;
        var id = req.params.id;
        var list = db[type][type];
        var index = db[type].index(id);
        list[index] = lib.updater(list[index], req.body);
        response = db[type].find(id);
        res.send(response);
    })
    .post('/:type', function (req, res) {
        var response = {};
        var type = req.params.type;
        var list = db[type][type];
        list.push(req.body);
        response = list;
        res.send(response);
    })
    .get('*', function (req, res) {
      res.send(req.headers);
    })
    .post('*', function (req, res) {
      res.send(req.headers);
    });

app.listen (process.env.RESTPORT || 3000);