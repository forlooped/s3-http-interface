// user defined settings
var host = '127.0.0.1';
var port = 8888;

// server config and setup
var http = require('http');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'jade');

// Load the AWS SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

// Create an S3 client
var s3 = new AWS.S3();

// Create view routes
app.get('/', function(req, res) {
  res.render('index.html');
});

// Start up the node server
app.listen(port, host, function (){
  console.log('Server running at http://'+host+':'+port+'/');
});