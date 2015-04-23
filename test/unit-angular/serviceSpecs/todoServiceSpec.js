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
	});
});