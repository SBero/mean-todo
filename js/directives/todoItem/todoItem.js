(function(){
	'use strict';

	var directiveId = "todoItem";

	angular.module('app.directives').directive(directiveId, ['todoService', todoItem]);
		
	function todoItem(todoService){
		return {
			restrict: 'E',
			scope: {
				todo: '=',
				refreshFn: '&'
			},
			templateUrl: 'js/directives/todoItem/todoItem.html',
			link: function(scope, element, attr){
				scope.editing = false;

				scope.deleteItem = function(){
					todoService.delete(scope.todo._id).then(
						function(success){
							scope.refreshFn();
						},
						function(error){

						});
				}

				scope.updateItem = function(){
					todoService.update(scope.todo).then(
						function(success){
							scope.refreshFn();
						},
						function(error){

						});
				}

				scope.editItem = function(){
					scope.editing = true;
				}

				scope.cancelUpdate = function(){
					scope.editing = false;
				}

			}
		}
	}
		
}());