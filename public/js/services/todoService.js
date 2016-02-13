(function(){
	'use strict';
//get server params
//	var serverParams = app.require('/config/serverConfig.js');
	//Hmm looks like I might need to use gulp or grunt to manage setting a config on the]
	//angular side...seems a little weak, though...
	//TODO figure out parameterization in angular

	var serviceId = "todoService";

	angular.module('app.services').factory(serviceId, ['$http', todoService]);

	function todoService($http){
		var resource = "http://localhost:8080/todo";

		return {
			get: function(id){
				var url = resource;

				if(typeof id !== 'undefined'){
					url += "/" + id;
				}

				return $http.get(url);
			},
			create: function(todo){
				return $http.post(resource, todo);
			},
			update: function(todo){
				// var id = todo._id;

				var url = resource;

				return $http.put(url, todo);
			},
			delete: function(id){
				var url = resource + "/" + id;

				return $http.delete(url);
			}
		}
	}
}());