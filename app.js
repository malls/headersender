var dotenv = require('dotenv'),
    express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./db/db'),
    lib = require('./lib/library'),
    app = express();

dotenv.load();

app
    .use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Accept-Site, Content-Type');
      next();
     })
    .use(bodyParser.json ());

app
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