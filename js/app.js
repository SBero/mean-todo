'use strict';

angular.module('app', [
	'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
        'ngResource',
        'app.controllers',
        'app.directives',
        'app.services'
	]);

angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.services', []);