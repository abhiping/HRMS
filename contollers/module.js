angular.module('guestlogin',[])


.config(function config($stateProvider) {
  $stateProvider
  .state('adminLogin', {
     url:'/myLogin',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
   .state('app.mydashboard', {
     url:'/dashboard',
    templateUrl: 'views/dashboard.html',
    controller: 'dashboardCtrl'
  })
});


