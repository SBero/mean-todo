'use strict';
var theApp =
    angular.module('app', [
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
        'ngResource',
        'app.controllers',
        'app.directives',
        'app.services'
    ]);


fetchData().then(bootstrapApplication);

//fetchData sets up a constant, CONFIG, which is visible across the angular app

function fetchData() {
    var initInjector = angular.injector(["ng"]);
    var $http = initInjector.get("$http");
    return $http.get('/todo/config').then(function (response) {
        theApp.constant('CONFIG', response.data);
    }, function (errorResponse) {
        // Handle error case...probably want to retry or display error message
    });
}

function bootstrapApplication() {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ["app"]);
    });
}


angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.services', []);

