export const PostCtrlName = 'postCtrl';
export const PostCtrl = ($scope, $routeParams, postsService, commentsService, $rootScope) => {
  $scope.user = $rootScope.currentUser;
  let postid = $routeParams.postId;
  postsService
    .getPostById(postid)
    .then(function (response) {
      $scope.post = response.data;
    });

  commentsService
    .getCommentsByPostId(postid)
    .then(function (response) {
      $scope.comments = response.data;
    });

  $scope.addNewComment = function () {
    commentsService
      .getCommentsByPostId(postid)
      .then(function (response) {
        $scope.comments = response.data;
      });
    commentsService.addCommentToPost($scope.comCont, postid);
    commentsService
      .getCommentsByPostId(postid)
      .then(function (response) {
        $scope.comments = response.data;
      });
    $scope.comCont = '';
  };
};