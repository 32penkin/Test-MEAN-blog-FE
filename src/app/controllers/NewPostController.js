export const NewPostCtrlName = 'newPostCtrl';
export const NewPostCtrl = ($scope, postsService, $location, $rootScope, usersService) => {
  $rootScope.checkUser = localStorage.getItem('currentUserToken') ? true : false;
  let currentUserToken = localStorage.getItem('currentUserToken');
  if (currentUserToken) {
    usersService
      .getCurrentUser(currentUserToken)
      .then(function (responce) {
        $scope.user = responce.data;
      });
  }
  $scope.addNew = function () {
    postsService.addPost($scope.newName, $scope.newContent, $scope.user)
      .then(function (res) {
        $location.path('/posts/' + res.data._id);
      });
  }
};