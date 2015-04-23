describe('Unit: Services', function(){
	beforeEach(module('app'));

	describe('todoService', function(){
		var todoService;
		var $httpBackend;
		var baseUrl = "http://localhost:3000";


		beforeEach(inject(function($injector, _$httpBackend_){
			todoService = $injector.get('todoService');
			$httpBackend = _$httpBackend_;
		}));
		
		it('should have todoService as a service.', function(){
			expect(todoService).toBeDefined();
		});

		it('should get all todos', function(){
			$httpBackend.expectGET(baseUrl + '/todo')
			.respond(200, 'todo API');
		
			todoService.get();

			$httpBackend.flush();

			// $httpBackend with throw an error automatically if there is a request issue		
		});

		it('should get one todo', function(){
			$httpBackend.expectGET(baseUrl + '/todo/1')
			.respond(200, 'todo API');

			todoService.get(1);

			$httpBackend.flush();
		});

		it('should update a todo item', function(){
			$httpBackend.expectPUT(baseUrl + '/todo')
			.respond(200, 'todo API');

			todoService.update({title: 'My Todo', description: 'Another Todo Update.'});

			$httpBackend.flush();
		});

		it('should delete a todo item', function(){
			$httpBackend.expectDELETE(baseUrl + '/todo/1')
			.respond(200, 'todo API');

			todoService.delete(1);

			$httpBackend.flush();
		});
	});
});