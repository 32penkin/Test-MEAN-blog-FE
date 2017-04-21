export const ProfileCtrlName = 'profileCtrl';
export const ProfileCtrl = ($scope, $rootScope, usersService) => {
  $scope.$emit('LOAD');
  $rootScope.checkUser = localStorage.getItem('currentUserToken') ? true : false;
  let currentUserToken = localStorage.getItem('currentUserToken');
  if (currentUserToken) {
    usersService
      .getCurrentUser(currentUserToken)
      .then(function (responce) {
        $scope.user = responce.data;
        $scope.$emit('UNLOAD');
      });
  }
};

