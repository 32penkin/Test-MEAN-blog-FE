export const PostCtrlName = 'postCtrl';
export const PostCtrl = ($scope, $routeParams, postsService, commentsService) => {
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

  $scope.addNewComment = function(){
    commentsService.addCommentToPost($scope.comName, $scope.comCont, postid);
    commentsService
      .getCommentsByPostId(postid)
      .then(function (response) {
        $scope.comments = response.data;
      });
    $scope.comName = '';
    $scope.comCont = '';
  };
};