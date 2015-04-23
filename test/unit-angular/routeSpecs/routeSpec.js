describe('Unit: Routes', function(){
	beforeEach(module('app'));

	var location, route, rootScope;

	beforeEach(inject(function(_$location_, _$route_, _$rootScope_){
		location = _$location_;
		route = _$route_;
		rootScope = _$rootScope_;
	}));

	describe('index route', function(){
		beforeEach(inject(function($httpBackend){
			$httpBackend.expectGET('app/todo/todo.html')
			.respond(200, 'todo HTML');
		}));

		it('should load the todo page on successful load of /', function(){
			location.path('/');
			rootScope.$digest();
			expect(route.current.templateUrl).toBe('app/todo/todo.html');
		});
	});

	describe('todo route', function(){
		beforeEach(inject(function($httpBackend){
			$httpBackend.expectGET('app/todo/todo.html')
			.respond(200, 'todo HTML');
		}));

		it('should load the todo page', inject(function(){

			location.path('/todo');
			rootScope.$digest();
			expect(route.current.templateUrl).toBe('app/todo/todo.html');
		}));
	});
});