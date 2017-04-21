export const LoginCtrlName = 'loginCtrl';
export const LoginCtrl = ($scope, usersService, $location, $rootScope) => {
  $scope.login = function (user) {
    usersService
      .login(user)
      .then(function (response) {
        if (response.data.success) {
          localStorage.setItem('currentUserToken', response.data.token);
          $rootScope.checkUser = localStorage.getItem('currentUserToken') ? true : false;
          $location.path('/profile');
        }
        else alert('Invalid username or password!');
      });
  }
};