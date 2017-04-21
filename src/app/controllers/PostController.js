export const PostCtrlName = 'postCtrl';
export const PostCtrl = ($scope, $routeParams, postsService, commentsService, $rootScope, usersService) => {
  $rootScope.checkUser = localStorage.getItem('currentUserToken') ? true : false;
  $scope.$emit('LOAD');
  let currentUserToken = localStorage.getItem('currentUserToken');
  if (currentUserToken) {
    usersService
      .getCurrentUser(currentUserToken)
      .then(function (responce) {
        $scope.user = responce.data;
      });
  }
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
      $scope.$emit('UNLOAD');
    });

  $scope.addNewComment = function () {
    commentsService
      .getCommentsByPostId(postid)
      .then(function (response) {
        $scope.comments = response.data;
        $scope.$emit('UNLOAD');
      });
    commentsService.addCommentToPost($scope.comCont, postid, $scope.user);
    commentsService
      .getCommentsByPostId(postid)
      .then(function (response) {
        $scope.comments = response.data;
        $scope.$emit('UNLOAD');
      });
    $scope.comCont = '';
  };
};