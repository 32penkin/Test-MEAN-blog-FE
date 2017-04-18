export const NavCtrlName = 'navCtrl';
export const NavCtrl = ($scope, $rootScope, $location, usersService) => {
  $scope.logout = function () {
    usersService.logout()
      .then(function (responce) {
        $rootScope.currentUser = null;
        $location.path('/login');
      });
  }
};