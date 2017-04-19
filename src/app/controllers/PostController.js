export const PostCtrlName = 'postCtrl';
export const PostCtrl = ($scope, $routeParams, postsService, commentsService, $rootScope) => {
  $scope.$emit('LOAD');
  $scope.user = $rootScope.currentUser;
  let postid = $routeParams.postId;
  postsService
    .getPostById(postid)
    .then(function (response) {
      $scope.post = response.data;
      $scope.$emit('UNLOAD');
    });

  commentsService
    .getCommentsByPostId(postid)
    .then(function (response) {
      $scope.comments = response.data;
      $scope.$emit('UNLOAD');
    });

  $scope.addNewComment = function () {
    commentsService
      .getCommentsByPostId(postid)
      .then(function (response) {
        $scope.comments = response.data;
        $scope.$emit('UNLOAD');
      });
    commentsService.addCommentToPost($scope.comCont, postid);
    commentsService
      .getCommentsByPostId(postid)
      .then(function (response) {
        $scope.comments = response.data;
        $scope.$emit('UNLOAD');
      });
    $scope.comCont = '';
  };
};