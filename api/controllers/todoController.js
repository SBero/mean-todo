module.exports.controller = function(app, db) {
	var resource = "/todo";
	var todos = db.get('todos');

	/**
	 * GET /todo/config
	 *
	 * Retrieve config values for the app (front and back)
	 *
	 * @param  {[type]} req         [description]
	 * @param  {[type]} res){		var todo_id       [description]
	 * @return {[type]}             [description]
	 */
	app.get(resource + "/config", function (req, res) {

		console.log("in config service");
		//config is on the serverParams object
		var params = app.get('serverParams');
		return res.json(params);

	});

	/**
	 * GET /todo/:todo_id
	 *
	 * Retrieves a todo item based on its id.
	 * 
	 * @param  {[type]} req         [description]
	 * @param  {[type]} res){		var todo_id       [description]
	 * @return {[type]}             [description]
	 */
	app.get(resource + "/:todo_id", function(req, res){
		var todo_id = req.params.todo_id;

		var byteLength = Buffer.byteLength(todo_id, 'utf8');

		if(byteLength !== 24){
			return res.status(400).send({message: 'Invalid todo id supplied. Please try again.'});
		}
		
		todos.findById(todo_id, function(err, doc){
			// if(err){
				// return res.status(500).send({error: "Invalid todo id supplied."});
			// }

			if(doc === null){
				return res.status(400).send({message: "No valid todo found with that id."});
			}

			return res.json({message: "Successfully retrieved a TODO.", todo: doc});
		});
	});

	/**
	 * GET /todo
	 *
	 * Retrieves a list of all todo items.
	 * 
	 * @param  {[type]} req       [description]
	 * @param  {[type]} res){	} [description]
	 * @return {[type]}           [description]
	 */
	app.get(resource, function(req, res){
		todos.find({}, function(err, docs){
			return res.json({message: "Successfully retrieved all TODOs.", todos: docs})
		});
	});

	/**
	 * POST /todo
	 *
	 * Creates a new todo item.
	 * 
	 * @param  {[type]} req                             [description]
	 * @param  {[type]} res){				todos.insert({title: 'Test',          description: 'Another                          TODO!'}            [description]
	 * @param  {[type]} function(err,                   doc){			if(err) throw        err;			console.log(doc);			return res.json({message: "Successfully created a new TODO.", todo: doc});		});			} [description]
	 * @return {[type]}                                 [description]
	 */
	app.post(resource, function(req, res){
		var todo = req.body;

		todos.insert(todo, function(err, doc){
			// if(err) throw err;

			return res.json({message: "Successfully created a new TODO.", todo: doc});
		});
	});

	/**
	 * PUT /todo
	 *
	 * Updates an existing todo item.
	 * 
	 * @param  {[type]} req           [description]
	 * @param  {[type]} res){				var todo          [description]
	 * @return {[type]}               [description]
	 */
	app.put(resource, function(req, res){
		
		var todo = req.body;
		
		todos.updateById(todo._id, todo, function(err, doc){
			// if(err) throw err;

			return res.json({message: "Successfully updated a TODO.", todo: todo});
		});
	});

	/**
	 * DELETE /todo/:todo_id
	 *
	 * Deletes a todo item based on its id.
	 * 
	 * @param  {[type]} req         [description]
	 * @param  {[type]} res){		var todo_id       [description]
	 * @return {[type]}             [description]
	 */
	app.delete(resource + "/:todo_id", function(req, res){
		var todo_id = req.params.todo_id;

		var byteLength = Buffer.byteLength(todo_id, 'utf8');

		if(byteLength !== 24){
			return res.status(400).send({message: 'Invalid todo id supplied. Please try again.'});
		}

		todos.findById(todo_id, function(err, doc){
			// if(err) throw err;

			if(doc === null){
				return res.status(400).send({message: "No valid todo found with that id."});
			}

			todos.remove(doc, function(err){
				// if(err) throw err;

				
				return res.json({message: "Successfully delete a TODO."});
			
			});
		});
	});

	console.log('Loaded TODO Controller');
}