(function(){

  'use strict';

    angular.module('app').config(['$routeProvider',
        function($routeProvider) {
          $routeProvider
            .when('/todo', {
                templateUrl: 'app/todo/todo.html',
            })
            .otherwise({
                  templateUrl: 'app/todo/todo.html'
            });
    }]);

}());