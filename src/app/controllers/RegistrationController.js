export const RegistrationCtrlName = 'regCtrl';
export const RegistrationCtrl = ($scope, $rootScope, usersService, $location) => {
  $scope.register = function (user) {
    if(user.password === user.password2){
      usersService.register(user)
      .then(function (response) {
        if(response){
          $rootScope.successMessage = 'You are successfully registered!';
        }
      });
      $location.path('/login');
    }
    else {
      $scope.alertMessage = 'Passwords aren\'t the same!';
    }
  };
};