describe('Unit: Directives', function(){
	var elem,
		scope,
		$compile,
		$httpBackend,
		baseUrl = "http://localhost:3000";

	beforeEach(module('app'));
	beforeEach(module('app.directives'));

	/* Directive Templates */
	beforeEach(module('js/directives/todoItem/todoItem.html'));

	beforeEach(inject(function($rootScope, _$compile_, _$httpBackend_){
		scope = $rootScope.$new();
		$compile = _$compile_;
		$httpBackend = _$httpBackend_;
	}));

	describe('todoItem', function(){

		var directiveStr;

		beforeEach(function(){
			var todo = {
				title: "Todo Title",
				description: "Todo Description"
			}

			var refreshFn = function(){
				return "Todo Refresh Fn. Call";
			}

			scope.todo = todo;
			scope.refreshFn = refreshFn;
			scope.editing = false;

			directiveStr = "<todo-item todo='todo' refresh-fn='refreshFn()'></todo-item>";
		});
		
		it('should have a title and description', function(){
			elem = $compile(directiveStr)(scope);

			scope.$digest();

			var elemAsHtml = elem.html();

			expect(elemAsHtml).toContain(scope.todo.title);
			expect(elemAsHtml).toContain(scope.todo.description);
		});

		it('should execute the refreshFn scope function', function(){
			elem = $compile(directiveStr)(scope);

			scope.$digest();

			var elemAsHtml = elem.html();

			expect(elemAsHtml).toContain(scope.todo.title);
			expect(elemAsHtml).toContain(scope.todo.description);
		});

		it('should set the scope edit item to true', function(){
			elem = $compile(directiveStr)(scope);
			
			scope.$digest();
			
			var elemScope = elem.isolateScope();

			elemScope.editItem();		

			expect(elemScope.editing).toBeTruthy();
		});

		it('should set the scope edit item to false', function(){
			elem = $compile(directiveStr)(scope);

			scope.$digest();

			var elemScope = elem.isolateScope();

			elemScope.editItem();
			elemScope.cancelUpdate();

			expect(elemScope.editing).toBeFalsy();
		});

		it('should update the todo item', function(){
			$httpBackend.expectPUT(baseUrl + '/todo')
			.respond(200, 'todo API');

			scope.todo._id = 1;

			elem = $compile(directiveStr)(scope);

			scope.$digest();

			var elemScope = elem.isolateScope();

			elemScope.updateItem();

			$httpBackend.flush();
		});

		it('should throw an error when trying to update the todo item', function(){
			$httpBackend.expectPUT(baseUrl + '/todo')
			.respond(400, 'todo API');

			scope.todo._id = 0;

			elem = $compile(directiveStr)(scope);

			scope.$digest();

			var elemScope = elem.isolateScope();

			elemScope.updateItem();

			$httpBackend.flush();
		});

		it('should delete the todo item', function(){
			$httpBackend.expectDELETE(baseUrl + '/todo/1')
			.respond(200, 'todo API');

			scope.todo._id = 1;

			elem = $compile(directiveStr)(scope);

			scope.$digest();

			var elemScope = elem.isolateScope();

			elemScope.deleteItem();

			$httpBackend.flush();
		});

		it('should throw an error when trying to delete the todo item', function(){
			$httpBackend.expectDELETE(baseUrl + '/todo/0')
			.respond(400, 'todo API');

			scope.todo._id = 0;

			elem = $compile(directiveStr)(scope);

			scope.$digest();

			var elemScope = elem.isolateScope();

			elemScope.deleteItem();

			$httpBackend.flush();
		});

	});

	
});