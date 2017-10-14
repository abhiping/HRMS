(function () {
    'use strict';

    angular
        .module('guestlogin')
        .service('LoginService', LoginService);

    LoginService.$inject = ['$http', '$cookieStore','ApiService','$rootScope'];

    function LoginService($http, $cookieStore,ApiService,$rootScope) {
        var service = {};

        if($rootScope.role =="broker")
        {
                service.doLogin = function (params) {
            return $http.post(ApiService.get() + "login", params);
        };

        }
         else if($rootScope.role =="client")
        {
                service.doLogin = function (params) {
            return $http.post(ApiService.get() + "login", params);
        };
        
        }
            else{    
               service.doLogin = function (params) {
                return $http.post(ApiService.get() + "users/login", params);
            };
    }
   
  
        service.getmyProjects = function () {
            return $http.get(ApiService.get() + "projects", {
                headers: {
                    "Authorization": 'Token token=' + $cookieStore.get('token'),
                    "Content-Type": 'application/json'
                }
            })
        };

        return service;
    }
})();