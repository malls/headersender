var dotenv = require('dotenv');
var express = require('express');
var app = express();

dotenv.load();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization, Accept-Site");
  next();
 });

app.get('*', function(req, res){
  res.send(req.headers);
});

app.listen(process.env.PORT || 3000);