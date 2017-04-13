export const PostsCtrlName = 'postsCtrl';
export const PostsCtrl = ($scope, $routeParams, postsService, commentsService) => {
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
    });
};