describe('Unit: Controllers', function(){
	beforeEach(module('app'));

	//TODO: Get the service dependencies setup with $httpBackend?
	
	describe('todoCtrl', function(){
		var todoCtrl, 
			scope,
			$httpBackend,
			baseUrl = "http://localhost:3000";

		beforeEach(inject(function($controller, _$rootScope_, _$httpBackend_){
			scope = _$rootScope_.$new();

			todoCtrl = $controller('todoCtrl as vm', {
				$scope: scope,
				// $routeParams: {id: 1}
			});

			$httpBackend = _$httpBackend_;
		}));

		it('should have a createTodo function', function(){
			expect(scope.vm.createTodo).toBeDefined();
		});

		it('should have a refreshTodos function', function(){
			expect(scope.vm.refreshTodos).toBeDefined();
		});

		it('should create a new todo item', function(){
			$httpBackend.when('POST', baseUrl + '/todo')
			.respond(200, 'todo API POST');

			$httpBackend.when('GET', baseUrl + '/todo')
			.respond(200, 'todo API');
	
			var todo = {
				title: "My Todo",
				description: "My Todo Description"
			}

			scope.vm.createTodo(todo);

			$httpBackend.flush();
		});

		it('should fail when trying to create a new todo item', function(){
			$httpBackend.when('POST', baseUrl + '/todo')
			.respond(400, 'todo invalid');

			$httpBackend.when('GET', baseUrl + '/todo')
			.respond(200, 'todo invalid');

			scope.vm.createTodo({});

			$httpBackend.flush();
		});

		it('should fail when trying to refresh the todo items', function(){
			$httpBackend.whenGET(baseUrl + '/todo')
			.respond(400, 'refresh invalid');
			

			scope.vm.refreshTodos();

			$httpBackend.flush();
		});
	});
});