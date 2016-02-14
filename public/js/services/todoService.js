(function(){
    'use strict';

    var serviceId = "todoService";

    angular.module('app.services').factory(serviceId, ['CONFIG', '$http', todoService]);

    function todoService(CONFIG, $http) {
        var port = CONFIG.port;
        var host = CONFIG.host;
        var resource = "http://" + host + ":" + port + "/todo";

        return {
            get: function (id) {
                var url = resource;

                if (typeof id !== 'undefined') {
                    url += "/" + id;
                }

                return $http.get(url);
            },
            create: function (todo) {
                return $http.post(resource, todo);
            },
            update: function (todo) {
                // var id = todo._id;

                var url = resource;

                return $http.put(url, todo);
            },
            delete: function (id) {
                var url = resource + "/" + id;

                return $http.delete(url);
            }
        }
    }
}());