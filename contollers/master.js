angular.module('Config')
.controller('masterCtrl', function ($scope, $state, $rootScope, $cookieStore,comonService)
{
  $scope.r=$rootScope.role;
  $scope.name=$cookieStore.get('name');
  $scope.email=$cookieStore.get('email');
    $scope.signOut = function () {
       comonService.logOut().then(function (response) {
        $scope.res = response.data;
        $cookieStore.remove('userId');
        $cookieStore.remove('email');
        $cookieStore.remove('token');
        $cookieStore.remove('name');
        $state.go('adminLogin');
        },
       function (error) {
           swal("", error.data.message, "error");
           $scope.loadingDemo = false;
       });
        
    }

});
