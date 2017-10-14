angular.module('Config', [])
.service('ApiService', function ($rootScope) {

   function get() 
   {
     if($rootScope.role =="broker")
      {    
       return 'http://olympeo-staging.tnyurl.me/broker_api/'; 
      }
    else if($rootScope.role =="client")
      { 
         return 'http://olympeo-staging.tnyurl.me/client_api/';
      }
      else
      {
         return 'http://olympeo-staging.tnyurl.me/api/';
      }
   }
    return {get: get}
  
})
  .config(function config($stateProvider) {
      $stateProvider
      .state('app', {
          url: '/home',
          templateUrl: 'views/master.html',
          controller: 'masterCtrl'
      })
  });