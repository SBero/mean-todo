var request = require('supertest'),
	express = require('express'),
	chai = require('chai');

var expect = chai.expect;

var app = require('../../api.js');

describe('Unit: todoController', function(){
	var resource = "/todo";

	describe(' CREATE ', function(){
		var todo = undefined;

		after(function(done){
			request(app)
				.delete(resource + "/" + todo._id)
				.end(function(err, res){
					expect(res.statusCode).to.equal(200);
					done();
				});
		});

		it("creates a todo item 200 on success", function(done){
			request(app)
				.post(resource)
				.send({title: "Todo Title", description: "Todo Description"})
				.end(function(err, res){
					expect(res.statusCode).to.equal(200);
					expect(res.body.todo).to.exist;
					todo = res.body.todo;
					done();
				});
		});
	});

	describe(" READ ", function(){
		var todo = undefined;

		before(function(done){
			request(app)
				.post(resource)
				.send({title: "Todo Title", description: "Todo Description"})
				.end(function(err, res){
					expect(res.statusCode).to.equal(200)
					expect(res.body.todo).to.exist;
					todo = res.body.todo;
					done();
				})
		});

		after(function(done){
			request(app)
				.delete(resource + "/" + todo._id)
				.end(function(err, res){
					expect(res.statusCode).to.equal(200);
					done();
				});
		});

		it("gets all of the available todo items 200 ok on success", function(done){
			request(app)
				.get(resource)
				.end(function(err, res){
					expect(res.statusCode).to.equal(200);
					expect(res.body.todos).to.exist;
					todo = res.body.todos[0];
					done();
				});
		});

		it("gets a todo item that doesn't exist 400 on error", function(done){
			request(app)
				.get(resource + "/0")
				.end(function(err, res){
					expect(res.statusCode).to.equal(400);
					done();
				});
		});

		it('gets a todo item and returns 200 ok on success', function(done){
			request(app)
				.get(resource + "/" + todo._id)
				.end(function(err, res){
					expect(res.statusCode).to.equal(200);
					expect(res.body.todo).to.exist;
					done();
				});
		});

		it('gets a todo item thats long enough, but invalid returns 400 on error', function(done){
			var todoId = todo._id.substr(0, todo._id.length-1);
			todoId += "0";
			
			request(app)
				.get(resource + "/" + todoId)
				.end(function(err, res){
					expect(res.statusCode).to.equal(400);
					done();
				});
		});
	});

	describe(" UPDATE ", function(){
		var todo = undefined;

		before(function(done){
			request(app)
				.post(resource)
				.send({title: "Todo Title", description: "Todo Description"})
				.end(function(err, res){
					expect(res.statusCode).to.equal(200)
					expect(res.body.todo).to.exist;
					todo = res.body.todo;
					done();
				})
		});

		after(function(done){
			request(app)
				.delete(resource + "/" + todo._id)
				.end(function(err, res){
					expect(res.statusCode).to.equal(200);
					done();
				});
		});

		it("updates a todo item that exists with 200 on success", function(done){
			todo.title = "Title Update!";

			request(app)
				.put(resource)
				.send(todo)
				.end(function(err, res){
					expect(res.statusCode).to.equal(200);
					expect(res.body.todo).to.exist;
					expect(res.body.todo.title).to.equal("Title Update!");
					done();
				})
		});
	});

	describe(" DELETE ", function(){
		var todo = undefined;

		before(function(done){
			request(app)
				.post(resource)
				.send({title: "Todo Title", description: "Todo Description"})
				.end(function(err, res){
					expect(res.statusCode).to.equal(200)
					expect(res.body.todo).to.exist;
					todo = res.body.todo;
					done();
				})
		});

		it("deletes a todo item that exists with 200 on success", function(done){
			request(app)
				.delete(resource + "/" + todo._id)
				.end(function(err, res){
					expect(res.statusCode).to.equal(200);
					done();
				});
		});

		it("deletes a todo item that doesn't have a long enough id with 400 on error", function(done){
			var todoId = "1234";

			request(app)
				.delete(resource + "/" + todoId)
				.end(function(err, res){
					expect(res.statusCode).to.equal(400);
					done();
				});
		});

		it("deletes a todo item that doesn't exist with 400 on error", function(done){
			var todoId = todo._id.substr(0, todo._id.length-1);
			todoId += "0";

			request(app)
				.delete(resource + "/" + todoId)
				.end(function(err, res){
					expect(res.statusCode).to.equal(400);
					done();
				});
		});
	});
});