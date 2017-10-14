(function () {
    'use strict';
//------------*********** Declare app level module which depends on views, and components **********---------------------------
 var mainApp = angular.module('mainApp', [
  'ngRoute',
  'ui.router',
  'ngCookies',
  'ngMessages',
  'angular-loading-bar',
  'angular-ladda',
  'ngAnimate',
  'ngMaterial',
  'datatables',
  'datatables.light-columnfilter',
  'datatables.bootstrap',
  'Config',
  'guestlogin',
])
 //defining factory metthod for interceptor//
   mainApp.factory('testInterceptor', testInterceptor)

   //app config for default routing//
   mainApp.config(['$urlRouterProvider','$httpProvider','$locationProvider',function ($urlRouterProvider,$httpProvider,$locationProvider) {
      // $locationProvider.hashPrefix('');
       $urlRouterProvider.otherwise('/myLogin');
       $httpProvider.interceptors.push('testInterceptor');
       

 }])
})();
//---------------------******* Intercepting the api calls to perform diffreent actions ********------------------------//
  function testInterceptor($location) {
  return {
    request: function(config) {
      return config;
    },

    requestError: function(config) {
      return config;
    },

    response: function(res) {
      return res;
    },

    responseError: function(res) {
      if(res.status == "401"){
        $location.path('/myLogin');
      }
        return res;

    }
  }
}
