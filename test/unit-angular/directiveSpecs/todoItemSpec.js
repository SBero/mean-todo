describe('Unit: Directives', function(){
	var elem,
		scope,
		$compile;

	beforeEach(module('app'));

	/* Directive Templates */
	beforeEach(module('js/directives/todoItem/todoItem.html'));

	beforeEach(inject(function($rootScope, _$compile_){
		scope = $rootScope.$new();
		$compile = _$compile_;
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

			console.log(scope.refreshFn());

			

			scope.$digest();

			var elemAsHtml = elem.html();

			expect(elemAsHtml).toContain(scope.todo.title);
			expect(elemAsHtml).toContain(scope.todo.description);
		});
/*
		it('should have a default client count of 0', function(){
			elem = $compile(directiveStr)(scope);
		
			scope.$digest();

			expect(scope.clientsCount).toBe(0);
		});*/

	});

	
});