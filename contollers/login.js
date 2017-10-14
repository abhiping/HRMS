angular.module('guestlogin')
.controller('LoginCtrl', function ($scope, $state, $rootScope,$location, LoginService, $cookieStore) {
    console.log('login controller called');
    $rootScope.title = 'Olympeo | ERP Login'
    $scope.loadingDemo = false;
$scope.validate = function(isvalid)
{
        $state.go('app.mydashboard')
    $scope.showValid = true;
    if (isvalid)
    {
       //  $scope.loadingDemo = true;
       //  var postData = {
       //      email:$scope.emailId,
       //      password: $scope.psword
       //  };
     
       //  LoginService.doLogin(postData).then(function (response) {
       //      $scope.res = response.data;
       //      $scope.loadingDemo = false;
       //      if( response.data.status==true)
       //      {
       //      $cookieStore.put('userId', $scope.res.data.uuid);
       //      $cookieStore.put('email', $scope.res.data.email);
       //      $cookieStore.put('token', $scope.res.data.token);
       //      $cookieStore.put('name', $scope.res.data.name);
       //      if($rootScope.role=="admin"){ $state.go('app.mydashboard');}
       //      if($rootScope.role=="broker"){ $state.go('app.gotobrokerDashboard');}
       //      if($rootScope.role=="client"){ $state.go('app.gotoclientDashboard');}
       //      }
       //      else{swal("Error",response.data.message,"error");}
            
           
       //  },
       // function (error) {
       //     swal("", error.data.message, "error");
       //     $scope.loadingDemo = false;
       //         //alert(error.data.Message);
       //     //else
       //     //{ swal("", "Network issue", "error"); $scope.loadingDemo = false; }
       // });
       
      // $state.go('app.mydashboard')

    }
    
}
});