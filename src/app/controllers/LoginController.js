export const LoginCtrlName = 'loginCtrl';
export const LoginCtrl = ($scope, $rootScope, usersService, $location) => {
  $scope.login = function (user) {
    if(user) {
      usersService
        .login(user)
        .then(function (response) {
          $rootScope.currentUser = response.data;
        });
      $location.path('/profile');
    }
  }
};