export const NewPostCtrlName = 'newPostCtrl';
export const NewPostCtrl = ($scope, postsService, $location) => {
  $scope.addNew = function () {
    postsService.addPost($scope.newName, $scope.newContent)
      .then(function (res) {
        $location.path('/posts/' + res.data._id);
      });
  }
};