var dotenv = require('dotenv');
var express = require('express');
var app = express();

dotenv.load();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(process.env.PORT);