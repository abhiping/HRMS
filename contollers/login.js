angular.module('guestlogin')
.controller('LoginCtrl', function ($scope, $state, $rootScope,$location, $cookieStore) {
    console.log('login controller called');
    $rootScope.title = 'HRMS | ERP Login';
    $scope.loadingDemo = true;
$scope.validateLogin = function(isvalid)
{
       
    $scope.showValid = true;
    if (isvalid)
    {     
        $state.go('app.mydashboard');
    }
    
}
});