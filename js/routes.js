(function(){

  'use strict';

    app.config(['$routeProvider',
        function($routeProvider) {
          $routeProvider
            .when('/dashboard', {
                templateUrl: 'app/dashboard/dashboard.html',
            })
            .otherwise({
                  templateUrl: 'app/dashboard/dashboard.html'
            });
    }]);

}());