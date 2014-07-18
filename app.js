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
	  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Accept-Site');
	  next();
	 })
	.use(bodyParser.json ());

app
	.get('/:type/:id', function (req, res) {
		var response = {};
		response[req.params.type] = db[req.params.type].find(req.params.id);
		response.headers = req.headers;
	  	res.send(response);
	})
	.get('/:type', function (req, res) {
		var response = {};
		response[req.params.type] = db[req.params.type][req.params.type]; 
		response.headers = req.headers;
		res.send(response);
	})
	.post('/:type/:id', function (req, res) {
		var response = {};
		var index = db[req.params.type].index(req.params.id);
		db[req.params.type][req.params.type][index] = req.body[req.params.type];
		db[req.params.type][req.params.type][index]._id = req.params.id;
		console.log(db[req.params.type].find(req.params.id));
		response[req.params.type] = db[req.params.type].find(req.params.id);
		response.headers = req.headers;
		res.send(response);
	})
	.post('/:type', function (req, res) {
		var response = {};
		var list = db[req.params.type][req.params.type];
		list.push(req.body[req.params.type]);
		response[req.params.type] = list;
		response.headers = req.headers;
		res.send(response);
	})
	.get('*', function (req, res) {
	  res.send(req.headers);
	})
	.post('*', function (req, res) {
	  res.send(req.headers);
	});

app.listen (process.env.PORT || 3000);