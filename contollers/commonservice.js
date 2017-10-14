(function () {
    'use strict';

    angular
        .module('Config')
        .service('comonService', comonService);

    comonService.$inject = ['$http', 'ApiService', '$cookieStore'];

    function comonService($http, ApiService, $cookieStore) {
        var service = {};

        service.logOut = function (rtid) {
            return $http.delete(ApiService.get() + "users/logout", {
                headers: {
                    "Authorization": 'Token token=' + $cookieStore.get('token'),
                    "Content-Type": 'application/json'
                }
            })
        };
        return service;
    }
})();
