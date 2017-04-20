export const RegistrationCtrlName = 'regCtrl';
export const RegistrationCtrl = ($scope, $rootScope, usersService, $location) => {
  $scope.register = function (user) {
    if(user) {
      if (user.password === user.password2) {
        usersService.register(user)
          .then(function (response) {
            $rootScope.currentUser = response.data;
            $location.path('/profile');
          });
      }
      else alert('Passwords aren\'t the same!');
    }
  };
};