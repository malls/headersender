var dotenv = require('dotenv');
var express = require('express');
var users = require('./mocks/users');
var auth = require('./mocks/auth');
var app = express();

dotenv.load();

console.log(users.user1);
console.log(auth);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization, Accept-Site");
  next();
 });

app.get('/auth', function(req, res){
  res.send(auth);
});

app.get('/users/:user', function(req, res){
  var user = users[req.params.user]
  res.send(user);
});

app.get('*', function(req, res){
  res.send(req.headers);
});

app.post('*', function(req, res){
  res.send(req.headers);
});

app.listen(process.env.PORT || 3000);