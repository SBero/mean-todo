describe('Unit: Filters', function(){
	var filter;

	beforeEach(module('app'));
	beforeEach(inject(function($filter){
		filter = $filter;
	}));

	it('should filter a number and give it two decimals', function(){
		var num = filter('number')(100, 2);

		expect(num).toEqual("100.00");
	});
});