export const CommentsServiceName = 'commentsService';
export const CommentsService = function ($http, $rootScope) {

  this.getComments = () => {
    return $http.get('https://fathomless-mesa-71587.herokuapp.com/commentlist');
  };

  this.getCommentsByPostId = (postID) => {
    return $http.get('https://fathomless-mesa-71587.herokuapp.com/commentlist/' + postID)
  };

  this.addCommentToPost = (commentCont, postID) => {
    let d = new Date();
    $http
      .post('https://fathomless-mesa-71587.herokuapp.com/commentlist', {
        content: commentCont,
        date: d.toDateString() + ' ' + d.toLocaleTimeString(),
        post_id: postID,
        author: $rootScope.currentUser.username
      });
  };
};