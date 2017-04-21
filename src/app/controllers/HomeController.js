export const HomeCtrlName = 'homeCtrl';
export const HomeCtrl = ($scope, $rootScope, usersService) => {
  $rootScope.checkUser = localStorage.getItem('currentUserToken') ? true : false;
  let currentUserToken = localStorage.getItem('currentUserToken');
  if (currentUserToken) {
    usersService
      .getCurrentUser(currentUserToken)
      .then(function (responce) {
        $scope.user = responce.data;
      });
  }
};