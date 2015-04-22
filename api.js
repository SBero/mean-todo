var express = require('express');
var mongo_client = require('mongodb').MongoClient;
var assert = require('assert');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = module.exports = express();

// var db_url = "mongodb://localhost:27017/mean_todo";

var db = require('monk')('localhost/mean_todo');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



var server = app.listen(3000, function () {

	var host = server.address().address
	var port = server.address().port

	console.log('TODO io.js server listening at http://%s:%s', host, port)

});

var io = require('socket.io')(server);
/*
// Verify the db application is successful
mongo_client.connect(db_url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server.");
	
	db.close();

  	



	

	// require('./sockets.js')(app, io, forge);

});*/

// Auto load all controllers for the application
fs.readdirSync('./api/controllers').forEach(function (file){
	if (file.substr(-3) === ".js"){
		route = require('./api/controllers/' + file);
		route.controller(app, db);
	}
});
