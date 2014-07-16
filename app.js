var dotenv = require('dotenv');
var express = require('express');
var app = express();

dotenv.load();

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function(req, res){
  res.send('gimme the root, gimme the root!');
});

app.get('/:anythingelse', function(req, res){
  res.send(req.headers);
});

app.listen(process.env.PORT);