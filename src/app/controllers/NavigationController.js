export const NavCtrlName = 'navCtrl';
export const NavCtrl = ($scope, $rootScope, $location) => {
  $rootScope.checkUser = localStorage.getItem('currentUserToken') ? true : false;
  $scope.logout = function () {
    localStorage.removeItem('currentUserToken');
    $rootScope.checkUser = false;
    $location.path('/login');
  };
};