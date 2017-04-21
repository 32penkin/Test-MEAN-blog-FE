export const PostsCtrlName = 'postsCtrl';
export const PostsCtrl = ($scope, $routeParams, postsService, commentsService, usersService, $rootScope) => {
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
  postsService
    .getPostsList()
    .then(function (response) {
      response.data.forEach((post) => {
        commentsService.getCommentsByPostId(post._id)
          .then(res => {
            post.commentsCount = res.data.length;
          });
      });
      $scope.posts = response.data;
      $scope.$emit('UNLOAD');
    });
};