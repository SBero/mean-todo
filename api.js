var express = require('express');
var mongo_client = require('mongodb').MongoClient;
var assert = require('assert');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = module.exports = express();
var path = require('path');

var db = require('monk')('localhost/mean_todo');

//get server params
var serverParams = require('./config/serverConfig.js');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS,GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var server = app.listen(serverParams.port);

var io = require('socket.io')(server);

// Auto load all controllers for the application
fs.readdirSync('./api/controllers').forEach(function (file){
	if (file.substr(-3) === ".js"){
		route = require('./api/controllers/' + file);
		route.controller(app, db);
	}
});
