var dotenv = require('dotenv');
var express = require('express');
var auth = require('./mocks/auth');
var posts = require('./mocks/posts');
var users = require('./mocks/users');
var app = express();

dotenv.load();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Accept-Site');
  next();
 });

app
	.get('/auth', function(req, res){
  		res.send({auth: auth, headers: req.headers});
	});

app
	.get('/posts/:post', function(req, res){
		var post = posts[req.params.post];
		res.send({post: post, headers: req.headers});
	})
	.post('/posts', function(req, res){
		var post = req.post;
		// posts[post.name] = post;
		res.send({post: post, headers: req.headers});
	});

app
	.get('/users/:user', function(req, res){
	  var user = users[req.params.user];
	  res.send({user: user, headers: req.headers});
	})
	.post('/users', function(req, res){
		res.send({user: req.user, headers: req.headers});
	});

app
	.get('*', function(req, res){
	  res.send(req.headers);
	})
	.post('*', function(req, res){
	  res.send(req.headers);
	});

app.listen(process.env.PORT || 3000);